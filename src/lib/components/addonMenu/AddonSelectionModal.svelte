<script lang="ts">
	import { addonList, modInformations } from '$lib/utils/modInformations.js';
	import { selectedAddonStore } from '$lib/stores/addonStore.js';
	import { ListBox, ListBoxItem, modalStore } from '@skeletonlabs/skeleton';

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	function onFormSubmit(): void {
		modalStore.close();
	}

	// Base Classes
	const cBase: string = 'card p-4 w-modal shadow-xl space-y-4';
</script>

<div class="modal-example-form {cBase}">
	<ListBox multiple>
		{#each addonList as addon}
			<ListBoxItem value={addon} bind:group={$selectedAddonStore} name="addons">
				<img
					alt={`The ${modInformations[addon].name} Logo`}
					slot="lead"
					src={modInformations[addon].icon}
				/>
				{modInformations[addon].name}
			</ListBoxItem>
		{/each}
	</ListBox>
	<!-- prettier-ignore -->
	<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Select Addons</button>
    </footer>
</div>

<style>
	img {
		height: 30px;
		width: 30px;
		image-rendering: pixelated;
	}
</style>
