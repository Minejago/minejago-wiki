<script lang="ts">
	import { labelStore } from '$lib/stores/languageStore';
	import { formatModonomiconText } from '$lib/components/modonomicon/modonomiconFormatter.js';

	export let label: string;
</script>

{@html formatModonomiconText($labelStore(label))}
