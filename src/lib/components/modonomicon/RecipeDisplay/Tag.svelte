<script lang="ts">
	import { resolveTag } from '$lib/components/modonomicon/RecipeDisplay/tagResolver';
	import { getTexture } from '$lib/textures';
	import { texturesStore } from '$lib/stores/fileStore';
	import Item from '$lib/components/modonomicon/RecipeDisplay/Item.svelte';
	import Label from '$lib/components/Label.svelte';

	export let tag: string;

	$: resolvedTag = resolveTag(tag);
	$: displayAsText = resolvedTag?.includes('block') || resolvedTag?.includes('Any');
	$: resolvedTexture = getTexture(resolvedTag, $texturesStore);
	$: src =
		!displayAsText && resolvedTexture !== 'Unknown Texture'
			? resolvedTexture
			: `/minecraft/textures/item/${resolvedTag}.png`;
</script>

{#if resolvedTag}
	{#if displayAsText}
		<div class="self-center flex flex-col items-center justify-center craftingGridItem">
			<span class="break-words w-full">
				<Label label={resolvedTag} />
			</span>
		</div>
	{:else}
		<Item item={resolvedTag} />
	{/if}
{/if}
