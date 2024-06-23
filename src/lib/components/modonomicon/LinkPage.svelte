<script lang="ts">
	import Label from '$lib/components/Label.svelte';

	export let text: string;
	export let link_text: string;
	export let url: string;
</script>

<p><Label label={text} /></p>
<a href={url} rel="noopener noreferrer" target="_blank"><Label label={link_text} /></a>
