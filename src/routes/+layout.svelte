<script lang="ts">
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppShell, Drawer, Modal, Toast, toastStore } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import { currentPageSource, storeCurrentUrl } from '$lib/stores/uiState';
	import Navigation from '$lib/components/navigation/Navigation.svelte';
	import HeaderBar from '$lib/components/header/HeaderBar.svelte';
	import { selectedAddonStore } from '$lib/stores/addonStore';
	import { browser } from '$app/environment';
	import { get } from 'svelte/store';
	import { subscribeToAddonStore } from '$lib/setup/loadAddonFiles';
	import { onMount } from 'svelte';
	import LanguageSelection from '$lib/components/LanguageSelection.svelte';
	import SmartSearch from '$lib/components/search/SmartSearch.svelte';
	import AddonMenu from '$lib/components/addonMenu/AddonMenu.svelte';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	onMount(() => {
		if (browser) {
			return subscribeToAddonStore();
		}
	});

	// Lifecycle Events
	afterNavigate(() => {
		// Store current page route URL
		storeCurrentUrl.set($page.url.pathname);
		// Scroll to top
		const elemPage = document.querySelector('#page');
		if (elemPage !== null) {
			elemPage.scrollTop = 0;
		}
	});
	selectedAddonStore.subscribe((newSelectedAddonStoreValue) => {
		// Redirect to main page to avoid current page being an addon page that is going to be unloaded
		setTimeout(() => {
			if (
				browser &&
				window.location.pathname !== '/' &&
				$currentPageSource !== 'ars_nouveau' &&
				!newSelectedAddonStoreValue.includes($currentPageSource)
			) {
				console.log($currentPageSource);
				console.log(get(currentPageSource));
				window.location.replace('/');
				toastStore.trigger({
					message: 'Loading/Unloading addons, redirecting to main page',
					// Optional:
					autohide: true,
					timeout: 3500
				});
			}
		});
	});
</script>

<svelte:head>
	<meta content="Ars Nouveau Wiki | An automatically generated Wiki for Ars Nouveau" name="title" />
	<meta
		content={`This is a wiki page generated automatically from the Patchouli Data in the Ars Noveau github repository. Therefore, it's pretty janky`}
		name="description"
	/>
	<meta content={$page.url.toString()} property="og:url" />
	<meta
		content="Ars Nouveau Wiki | An automatically generated Wiki for Ars Nouveau"
		property="og:title"
	/>
	<meta
		content={`This is a wiki page generated automatically from the Patchouli Data in the Ars Noveau github repository. Therefore, it's pretty janky`}
		property="og:description"
	/>
	<title>Ars Nouveau Wiki</title>
</svelte:head>

<Drawer>
	<div class="p-2">
		<LanguageSelection />
	</div>
	{#if browser}
		<div class="p-2">
			<SmartSearch mobile={true} />
		</div>
		<div class="p-2">
			<AddonMenu />
		</div>
	{/if}
	<Navigation embedded={true} />
</Drawer>
<Toast position="tr" />
<Modal />

<AppShell>
	<svelte:fragment slot="header">
		<HeaderBar />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<Navigation class="hidden lg:block w-[300px]" />
	</svelte:fragment>
	<svelte:fragment slot="pageFooter">
		<footer class="flex justify-end mb-1 mr-1"><p>Ars Nouveau Wiki</p></footer>
	</svelte:fragment>
	<div class="m-4">
		<slot />
	</div>
</AppShell>
