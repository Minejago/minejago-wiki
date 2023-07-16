import { getIdFromResourceLocation } from '$lib/utils/idResolver';

const mapSpecialTextures = (texture: string) => {
	if (!texture) {
		return '';
	}
	return texture;
};

export const getTexture = (resourceLocation: string, textures: App.TextureDictionary): string => {
	if (textures) {
		const texture = textures[mapSpecialTextures(resourceLocation)] || 'Unknown Texture';
		if (texture === 'Unknown Texture') {
			return texture;
		}
		return `data:image/png;base64,${texture}`;
	}
	return `Unknown Texture: ${resourceLocation}`;
};

export const getItemSrc = (item: string, textures: App.TextureDictionary) => {
	let src = getTexture(item, textures);
	const itemId = getIdFromResourceLocation(item);
	if (src === 'Unknown Texture') {
		if (['clock', 'compass'].includes(itemId)) {
			src = `/minecraft/textures/item/${itemId}_12.png`;
		} else {
			src = `/minecraft/textures/item/${itemId}.png`;
		}
	}
	return src;
};
