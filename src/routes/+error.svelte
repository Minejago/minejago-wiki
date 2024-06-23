<script lang="ts">
	import { storeCurrentUrl } from '$lib/stores/uiState.js';
</script>

<p>You have tried to access a page that could not be found or loaded.</p>
<p>
	If it was an addon page, make sure that you have selected the correct addons and <a
		href={$storeCurrentUrl}>try again.</a
	>
</p>
<p>You can find the addon selection either in the top right or in the menu on mobile</p>
