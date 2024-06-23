<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let select: boolean = false;
	export let open: boolean = false;
	export let duration: number = 100;
	export let parentElement: HTMLElement;
	export let id = 'dropdown' + Math.random().toString(36);
	export let openLeft = false;

	// Toggle Visibility
	// NOTE: 1ms delay required to avoid race condition for select mode
	function toggle(): void {
		setTimeout(() => {
			open = !open;
		}, 1);
	}

	// Handle click on <body> element
	// Source: https://svelte.dev/repl/0ace7a508bd843b798ae599940a91783?version=3.16.7
	function handleBodyClick(event: any): void {
		if (!open) return;
		// If click is outside menu, close menu
		if (parentElement && !parentElement.contains(event.target) && !event.defaultPrevented) {
			open = false;
			return;
		}
		// If select enabled and click is inside menu, close menu
		if (select === true) {
			open = false;
			return;
		}
	}

	// A11y Input Handler
	function onKeyDown(event: any): void {
		if (open && event.code === 'Escape') {
			toggle();
		}
	}

	// Lifecycle Events
	onMount(() => {
		// Event: Window Keydown (ESC)
		window.addEventListener('keydown', onKeyDown);
	});

	onDestroy(() => {
		// Close when navigating away
		open = false;
	});
</script>

<svelte:body on:click={handleBodyClick} />
{#if open}
	<div
		role="menu"
		class={`menu-content absolute z-10  mt-0.5 searchDropdown ${
			openLeft ? 'origin-top-left left-5' : 'origin-top-right right-5'
		}`}
		data-testid="menu-content"
		in:fade={{ duration }}
		out:fade={{ duration }}
		{id}
	>
		{#if $$slots.content}
			<slot name="content" />
		{/if}
	</div>
{/if}
