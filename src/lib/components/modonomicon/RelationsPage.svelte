<script lang="ts">
	import { getLabelWithCurrentValues } from '$lib/languages.js';
	import { formatModonomiconText } from '$lib/components/modonomicon/modonomiconFormatter';
	import { modonomiconStore } from '$lib/stores/fileStore';
	import Label from '$lib/components/Label.svelte';

	export let title: string;
	export let entries: Array<string>;
	export let text: string;

	//Example Entry: ars_nouveau:machines/enchanting_apparatus
	const getHref = (entry: string) => {
		const pathParts = entry.split(':').pop().split('/');
		return `/category/${pathParts[0]}/entry/${pathParts[1]}`;
	};
	const getName = (entry: string) => {
		const pathParts = entry.split(':').pop().split('/');
		if (
			$modonomiconStore[pathParts[0]] &&
			$modonomiconStore[pathParts[0]].entries &&
			getLabelWithCurrentValues($modonomiconStore[pathParts[0]].entries[pathParts[1]]?.name)
		) {
			return $modonomiconStore[pathParts[0]].entries[pathParts[1]]?.name;
		} else {
			return 'none because the mod Author put an invalid link here';
		}
	};
</script>

<h3>
	{#if title}
		<Label label={title} />
	{:else}
		Related Pages:
	{/if}
</h3>
<ul class="list">
	{#each entries as entry}
		{#if getName(entry)}
			<li><a href={getHref(entry)}><Label label={getName(entry)} /></a></li>
		{/if}
	{/each}
</ul>

{#if text}
	<p>{formatModonomiconText(getLabelWithCurrentValues(text))}</p>
{/if}
