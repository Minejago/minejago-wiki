<script lang="ts">
	import type { ModalComponent, ModalSettings } from '@skeletonlabs/skeleton';
	import AddonSelectionModal from '$lib/components/addonMenu/AddonSelectionModal.svelte';
	import { modalStore } from '@skeletonlabs/skeleton';

	const triggerAddonModal = () => {
		const modalComponent: ModalComponent = {
			ref: AddonSelectionModal,
			slot: '<p>Selection</p>'
		};
		const modalSettings: ModalSettings = {
			type: 'component',
			component: modalComponent,
			title: 'Addon Selection'
		};
		modalStore.trigger(modalSettings);
	};
</script>

<button class="btn bg-surface-400 btn-base text-primary-500" on:click={triggerAddonModal}>
	Addon Selection
</button>
