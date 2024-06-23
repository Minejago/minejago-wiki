<script lang="ts">
	import { texturesStore } from '$lib/stores/fileStore';
	import { notDisplayableItems } from '$lib/components/modonomicon/RecipeDisplay/notDisplayableItems';
	import { getBlockOrItemLabel } from '$lib/languages';
	import { labelStore } from '$lib/stores/languageStore';
	import { modlist } from '$lib/utils/modInformations';
	import { getItemSrc } from '$lib/textures';

	export let item: string;

	const getDisplayText = (item: string) => {
		if (notDisplayableItems.includes(item)) {
			const splitItem = item.split(':');
			if (modlist.includes(splitItem[0])) {
				return getBlockOrItemLabel(splitItem[1]);
			} else {
				return $labelStore(`block.minecraft.${splitItem[1]}`);
			}
		} else {
			return getBlockOrItemLabel(item);
		}
	};

	$: src = item ? getItemSrc(item, $texturesStore) : 'missingitem';
	$: displayText = item ? getDisplayText(item) : 'missingitem';
	$: showImage = !notDisplayableItems.includes(item);
</script>

<div class="self-center flex flex-col items-center justify-center craftingGridItem">
	{#if showImage}
		<img alt={`picture of the ingredient ${item}`} {src} class="craftingGridPicture" />
	{/if}
	<span class="text-center break-words w-full">{displayText}</span>
</div>
