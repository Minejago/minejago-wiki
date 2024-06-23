import { prepareModonomicon } from '$lib/setup/prepareModonomicon';
import { modonomiconStore, recipesStore, storesLoaded, texturesStore } from '$lib/stores/fileStore';
import { languagesStore, minecraftLanguageStore } from '$lib/stores/languageStore';
import { getMatchingJSONFiles, getTextureFiles } from '$lib/setup/loadFiles';
import { browser } from '$app/environment';
import { initializeSearch } from '$lib/setup/initializeSearch';
import { modInformations } from '$lib/utils/modInformations';
import { prepareZip } from '$lib/setup/prepareZip';

const initalizeMinecraftLanguageStore = (
	fetch: (info: RequestInfo, init?: RequestInit) => Promise<Response>
) => {
	return fetch('/minecraft/lang/en_us.json')
		.then((response) => response.json())
		.then((languageFile) => minecraftLanguageStore.set(languageFile));
};

const initalizeDynamicallyLoadedStores = (
	fetch: (info: RequestInfo, init?: RequestInit) => Promise<Response>
) => {
	return fetch('/minejago.zip')
		.then(prepareZip)
		.then(async function (zip) {
			return Promise.all([
				getTextureFiles(modInformations.minejago.texturePredicate, zip, 'minejago'),
				getMatchingJSONFiles(modInformations.minejago.modonomiconCategoryPredicate, zip),
				getMatchingJSONFiles(modInformations.minejago.modonomiconEntryPredicate, zip),
				getMatchingJSONFiles(modInformations.minejago.languagePredicate, zip),
				getMatchingJSONFiles(modInformations.minejago.recipePredicate, zip)
			]).then(
				([
					loadedTextures,
					loadedModonomiconCategories,
					loadedModonomiconEntries,
					loadedLanguages,
					loadedRecipes
				]) => {
					texturesStore.set(loadedTextures);
					modonomiconStore.set(
						prepareModonomicon(loadedModonomiconCategories, loadedModonomiconEntries, 'ars_nouveau')
					);
					languagesStore.set(loadedLanguages);
					recipesStore.set(loadedRecipes);
					storesLoaded.set(true);
					setTimeout(() => {
						storesLoaded.set(false);
					}, 86400000 /* stores should be refreshed after 1 day if the server is on for so long */);
					if (browser) {
						initializeSearch(loadedModonomiconCategories, loadedModonomiconEntries);
					}
				}
			);
		});
};

export const initializeStores = (
	fetch: (info: RequestInfo, init?: RequestInit) => Promise<Response>
) => {
	return Promise.all([
		initalizeMinecraftLanguageStore(fetch),
		initalizeDynamicallyLoadedStores(fetch)
	]);
};
