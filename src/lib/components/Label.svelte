<script lang="ts">
	import { labelStore } from '$lib/stores/languageStore';

	export let label: string;
</script>

{$labelStore(label)}
