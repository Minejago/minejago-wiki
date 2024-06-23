import { loadedAddonStore, selectedAddonStore } from '$lib/stores/addonStore';
import { get } from 'svelte/store';
import {
	advancementStore,
	modonomiconStore,
	recipesStore,
	texturesStore
} from '$lib/stores/fileStore';
import { getAddonURL } from '$lib/utils/apiUtils';
import { modInformations } from '$lib/utils/modInformations';
import { prepareZip } from '$lib/setup/prepareZip';
import { getMatchingJSONFiles, getTextureFiles } from '$lib/setup/loadFiles';
import { prepareModonomicon } from '$lib/setup/prepareModonomicon';
import { languagesStore } from '$lib/stores/languageStore';
import { updateSearch } from '$lib/setup/initializeSearch';

const isObject = (item: any) => {
	return item && typeof item === 'object' && !Array.isArray(item);
};

const mergeDeep = (target?: object, ...sources: Array<object>): object => {
	if (!sources.length) return target || {};
	const source = sources.shift();

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			// @ts-ignore
			if (isObject(source[key])) {
				// @ts-ignore
				if (!target[key]) Object.assign(target, { [key]: {} });
				// @ts-ignore
				mergeDeep(target[key], source[key]);
			} else {
				// @ts-ignore
				Object.assign(target, { [key]: source[key] });
			}
		}
	}

	return mergeDeep(target, ...sources);
};

const loadAndStoreAddonData = (addonToBeLoaded: string) => {
	const addonInformation = modInformations[addonToBeLoaded];
	if (addonInformation) {
		fetch(getAddonURL(addonInformation.repositoryId, addonInformation.repositoryBranch))
			.then(prepareZip)
			.then(async function (zip) {
				return Promise.all([
					getTextureFiles(addonInformation.texturePredicate, zip, addonToBeLoaded),
					getMatchingJSONFiles(addonInformation.modonomiconCategoryPredicate, zip),
					getMatchingJSONFiles(addonInformation.modonomiconEntryPredicate, zip),
					getMatchingJSONFiles(addonInformation.languagePredicate, zip),
					getMatchingJSONFiles(
						addonInformation.recipePredicate,
						zip,
						'',
					),
					addonInformation.advancementPredicate
						? getMatchingJSONFiles(addonInformation.advancementPredicate, zip, addonToBeLoaded)
						: Promise.resolve()
				]).then(
					([
						loadedTextures,
						loadedModonomiconCategories,
						loadedModonomiconEntries,
						loadedLanguages,
						loadedRecipes,
						loadedAdvancements
					]) => {
						texturesStore.set({ ...get(texturesStore), ...loadedTextures });
						modonomiconStore.set(
							prepareModonomicon(
								{ ...get(modonomiconStore), ...loadedModonomiconCategories },
								loadedModonomiconEntries,
								addonToBeLoaded
							)
						);
						languagesStore.set(
							mergeDeep(get(languagesStore), loadedLanguages) as App.LanguageDictionary
						);
						recipesStore.set({ ...get(recipesStore), ...loadedRecipes });
						advancementStore.set({ ...get(advancementStore), ...loadedAdvancements });
						updateSearch();
						loadedAddonStore.set([...get(loadedAddonStore), addonToBeLoaded]);
					}
				);
			});
	}
};

export const subscribeToAddonStore = () => {
	return selectedAddonStore.subscribe((selectedAddons) => {
		const currentlyLoaded = get(loadedAddonStore);
		const needToLoad = selectedAddons.filter((addon) => !currentlyLoaded.includes(addon));
		const needToUnload = currentlyLoaded.filter((addon) => !selectedAddons.includes(addon));

		needToUnload.forEach((addonToRemove) => {
			let modonomiconData = get(modonomiconStore);
			// @ts-ignore
			modonomiconData = Object.entries(modonomiconData)
				.filter(([_, category]) => category.source !== addonToRemove)
				.map(([key, value]) => {
					value.entries = Object.entries(value.entries)
						.filter(([key, entry]) => entry.source !== addonToRemove)
						.reduce((previousValue, [key, entry]) => {
							return { ...previousValue, [key]: entry };
						}, {});
					return { [key]: value };
				})
				.reduce((previousValue, currentValue) => {
					return { ...previousValue, ...currentValue };
				}, {});
			modonomiconStore.set(modonomiconData);
			loadedAddonStore.set(
				get(loadedAddonStore).filter((loadedAddon) => loadedAddon !== addonToRemove)
			);
		});
		needToLoad.forEach(loadAndStoreAddonData);
	});
};
