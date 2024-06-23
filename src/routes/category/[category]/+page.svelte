<script lang="ts">
	import { modonomiconStore } from '$lib/stores/fileStore';
	import Label from '$lib/components/Label.svelte';
	import { labelStore } from '$lib/stores/languageStore';
	import { currentExpandedCategory, currentPageSource } from '$lib/stores/uiState';
	import AddonInformation from '$lib/components/AddonInformation.svelte';

	/** @type {import('./$types').PageData} */
	export let data: App.PageData;

	$: displayedCategory = $modonomiconStore[data?.category];
	$: categoryName = $labelStore(displayedCategory?.name);
	$: $currentExpandedCategory = data?.category ? data.category : $currentExpandedCategory;
	$: $currentPageSource = displayedCategory ? displayedCategory?.source : $currentPageSource;
</script>

<svelte:head><title>{categoryName}</title></svelte:head>

<h2 class="text-center flex items-center justify-center">
	<Label label={displayedCategory.name} />
	<AddonInformation addonName={displayedCategory.source} position="bottom" />
</h2>
<div class="flex flex-col justify-start items-center h-full m-4">
	<p><Label label={displayedCategory.description} /></p>
</div>
