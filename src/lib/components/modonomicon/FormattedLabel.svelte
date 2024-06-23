<script lang="ts">
	import { labelStore } from '$lib/stores/languageStore';
	import { formatModonomiconText } from '$lib/components/modonomicon/modonomiconFormatter.js';
	import snarkdown from 'snarkdown';

	export let label: string;
</script>

{@html snarkdown(formatModonomiconText($labelStore(label)))}
