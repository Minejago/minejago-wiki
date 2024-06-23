<script lang="ts">
	import FormattedLabel from '$lib/components/modonomicon/FormattedLabel.svelte';

	export let text: string;
	export let title: string;
</script>

{#if title}
	<h4 class="mb-3">
		<FormattedLabel label={title} />
	</h4>
{/if}
<p class="text-left max-w-fit textblock">
	<FormattedLabel label={text} />
</p>
