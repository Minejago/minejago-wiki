<script lang="ts">
	import { AppBar, drawerStore, LightSwitch } from '@skeletonlabs/skeleton';
	import MenuIcon from '$lib/components/icons/MenuIcon.svelte';
	import { scrollSelectionIntoView } from '$lib/components/navigation/scrollHelper';
	import SmartSearch from '$lib/components/search/SmartSearch.svelte';
	import LanguageSelection from '$lib/components/LanguageSelection.svelte';
	import AddonMenu from '$lib/components/addonMenu/AddonMenu.svelte';
	import StarbuncleRun from '$lib/components/header/StarbuncleRun.svelte';

	// Drawer Handler
	function drawerOpen(): void {
		drawerStore.open();
		scrollSelectionIntoView();
	}
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<!-- Drawer Menu -->
		<div class="lg:hidden mr-2 p-1 cursor-pointer" on:click={drawerOpen} on:keypress={drawerOpen}>
			<MenuIcon style="width: 20px; height: 20px; fill: rgb(var(--color-primary-500))" />
		</div>
		<LightSwitch origin="tr" />
	</svelte:fragment>
	<div class="flex flex-row">
		<a
			class="hidden sm:block text-sm sm:text-lg md:text-3xl font-bold uppercase mr-4"
			href="/static"
			id="ars_nouveau_wiki"
			title="Return to main page">Ars Nouveau Wiki</a
		>
		<StarbuncleRun />
	</div>
	<svelte:fragment slot="trail">
		<div class="hidden lg:block">
			<AddonMenu />
		</div>
		<div class="hidden lg:block">
			<LanguageSelection />
		</div>
		<div class="hidden lg:block">
			{#await Promise.resolve()}
				<div class="placeholder animate-pulse w-52" style="height: 2.5rem" />
			{:then irrelevant}
				<SmartSearch />
			{/await}
		</div>
	</svelte:fragment>
</AppBar>
