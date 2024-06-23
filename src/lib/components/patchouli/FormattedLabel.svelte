<script lang="ts">
	import { labelStore } from '$lib/stores/languageStore';
	import { formatPatchouliText } from '$lib/components/patchouli/patchouliFormatter.js';

	export let label: string;
</script>

{@html formatPatchouliText($labelStore(label))}
