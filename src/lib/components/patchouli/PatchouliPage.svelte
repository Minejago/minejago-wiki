<script lang="ts">
	import TextPage from '$lib/components/patchouli/TextPage.svelte';
	import CraftingPage from '$lib/components/patchouli/CraftingPage.svelte';
	import LinkPage from '$lib/components/patchouli/LinkPage.svelte';
	import RelationsPage from '$lib/components/patchouli/RelationsPage.svelte';
	import ArsPage from '$lib/components/patchouli/ArsPage.svelte';
	import ImagePage from '$lib/components/patchouli/ImagePage.svelte';

	export let patchouliPage: App.PatchouliPage;

	const getDisplayedComponent = (type: string) => {
		switch (type) {
			case 'patchouli:text':
			case 'text':
				return TextPage;
			case 'patchouli:crafting':
			case 'crafting':
				return CraftingPage;
			case 'patchouli:link':
			case 'link':
				return LinkPage;
			case 'patchouli:relations':
			case 'relations':
				return RelationsPage;
			case 'patchouli:image':
			case 'image':
				return ImagePage;
			case 'ars_nouveau:apparatus_recipe':
			case 'apparatus_recipe':
			case 'ars_nouveau:imbuement_recipe':
			case 'imbuement_recipe':
			case 'ars_nouveau:enchanting_recipe':
			case 'enchanting_recipe':
			case 'ars_nouveau:glyph_recipe':
			case 'glyph_recipe':
			case 'ars_nouveau:no_output_apparatus_recipe':
			case 'no_output_apparatus_recipe':
				return ArsPage;
			default:
				return undefined;
		}
	};

	$: displayedComponent = getDisplayedComponent(patchouliPage?.type);
</script>

<div class="mb-2">
	<svelte:component this={displayedComponent} {...patchouliPage} />
</div>
