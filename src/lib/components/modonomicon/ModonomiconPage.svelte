<script lang="ts">
	import TextPage from '$lib/components/modonomicon/TextPage.svelte';
	import CraftingPage from '$lib/components/modonomicon/CraftingPage.svelte';
	import LinkPage from '$lib/components/modonomicon/LinkPage.svelte';
	import RelationsPage from '$lib/components/modonomicon/RelationsPage.svelte';
	import ArsPage from '$lib/components/modonomicon/ArsPage.svelte';
	import ImagePage from '$lib/components/modonomicon/ImagePage.svelte';

	export let modonomiconPage: App.ModonomiconPage;

	const getDisplayedComponent = (type: string) => {
		switch (type) {
			case 'modonomicon:text':
			case 'text':
				return TextPage;
			case 'modonomicon:crafting':
			case 'crafting':
				return CraftingPage;
			case 'modonomicon:link':
			case 'link':
				return LinkPage;
			case 'modonomicon:relations':
			case 'relations':
				return RelationsPage;
			case 'modonomicon:image':
			case 'image':
				return ImagePage;
			case 'minejago:teapot_brewing':
				return ArsPage;
			default:
				return undefined;
		}
	};

	$: displayedComponent = getDisplayedComponent(modonomiconPage?.type);
</script>

<div class="mb-2">
	<svelte:component this={displayedComponent} {...modonomiconPage} />
</div>
