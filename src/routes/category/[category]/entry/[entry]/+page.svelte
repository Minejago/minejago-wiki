<script lang="ts">
	import { advancementStore, patchouliStore } from '$lib/stores/fileStore';
	import PatchouliPage from '$lib/components/patchouli/PatchouliPage.svelte';
	import Label from '$lib/components/Label.svelte';
	import { labelStore } from '$lib/stores/languageStore';
	import { currentExpandedCategory, currentPageSource } from '$lib/stores/uiState';
	import AddonInformation from '$lib/components/AddonInformation.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import FormattedLabel from '$lib/components/patchouli/FormattedLabel.svelte';

	/** @type {import('./$types').PageData} */
	export let data: App.PageData;

	$: containingCategory = $patchouliStore[data?.category];
	$: displayedEntry = containingCategory.entries[data?.entry];
	$: entryName = $labelStore(displayedEntry?.name);
	$: $currentExpandedCategory = data?.category ? data.category : $currentExpandedCategory;
	$: $currentPageSource = displayedEntry ? displayedEntry?.source : $currentPageSource;
	$: advancementTitle = displayedEntry.advancement
		? $advancementStore
			? $advancementStore[displayedEntry.advancement]?.display?.title?.translate ||
			  'unknown Advancement'
			: 'unkown Advancement'
		: undefined;
</script>

<svelte:head><title>{entryName}</title></svelte:head>

<h2 class="text-center flex items-center justify-center">
	<Label label={displayedEntry?.name} />
	<AddonInformation addonName={displayedEntry.source} position="bottom" />
</h2>

{#if advancementTitle}
	{#key data?.entry}
		<Accordion>
			<AccordionItem>
				<svelte:fragment slot="summary"
					>Potential spoilers locked behind advancement <strong class="text-primary-500"
						><FormattedLabel label={advancementTitle} /></strong
					></svelte:fragment
				>
				<svelte:fragment slot="content">
					<div class="flex justify-center">
						<div class="flex flex-col justify-start items-start max-w-prose h-full m-4">
							<div class="flex flex-col">
								{#each displayedEntry?.pages as page}
									<PatchouliPage patchouliPage={page} />
								{/each}
							</div>
						</div>
					</div>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	{/key}
{:else}
	<div class="flex justify-center">
		<div class="flex flex-col justify-start items-start max-w-prose h-full m-4">
			<div class="flex flex-col">
				{#each displayedEntry?.pages as page}
					<PatchouliPage patchouliPage={page} />
				{/each}
			</div>
		</div>
	</div>
{/if}
