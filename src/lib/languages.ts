import { get } from 'svelte/store';
import {
	chosenLanguageStore,
	languagesStore,
	minecraftLanguageStore
} from '$lib/stores/languageStore';
import { loadedAddonStore } from '$lib/stores/addonStore';

const getModLabel = (label: string): string | undefined => {
	const loadedMods = ['minejago', ...get(loadedAddonStore)];
	let labelToReturn = label;
	let foundLabel;
	for (let i = 0; i < loadedMods.length; i++) {
		foundLabel = getLabelWithCurrentValues(`item.${loadedMods[i]}.${label}`);
		if (foundLabel.startsWith(`item.${loadedMods[i]}`)) {
			foundLabel = getLabelWithCurrentValues(`block.${loadedMods[i]}.${label}`);
		} else {
			labelToReturn = foundLabel;
			break;
		}
		labelToReturn = foundLabel;
	}

	return labelToReturn;
};

const getMinecraftLabel = (label: string): string | undefined => {
	let foundLabel = getLabelWithCurrentValues(`item.minecraft.${label}`);
	if (foundLabel.startsWith('item.minecraft')) {
		foundLabel = getLabelWithCurrentValues(`block.minecraft.${label}`);
	}
	return foundLabel.startsWith('block.minecraft') ? undefined : foundLabel;
};

export const getBlockOrItemLabel = (label: string): string => {
	const splitLabel = label.split(':');
	if (splitLabel.length > 1) {
		if (splitLabel[0] !== 'minecraft') {
			return getModLabel(splitLabel[1].replace('/', '.')) || label;
		} else {
			return getMinecraftLabel(splitLabel[1]) || label;
		}
	}
	let foundLabel = getModLabel(label);
	if (!foundLabel) {
		foundLabel = getMinecraftLabel(label);
	}
	return foundLabel || label;
};

export const getLabelWithCurrentValues = (label: string): string => {
	const languages = get(languagesStore);
	const chosenLanguage = get(chosenLanguageStore);
	const minecraftLanguage = get(minecraftLanguageStore);

	if (languages && minecraftLanguage) {
		return languages[chosenLanguage][label] || minecraftLanguage[label] || label;
	} else {
		console.log('Languages not yet loaded');
		return 'unknown label';
	}
};
