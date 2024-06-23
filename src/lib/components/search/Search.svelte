<script lang="ts">
	/**
	 * Specify the input value
	 */
	export let value = '';

	/**
	 * Set to `true` to auto focus the input on mount
	 */
	export let autofocus = false;

	/**
	 * Specify the debounce value in milliseconds (ms)
	 */
	export let debounce = 150;

	/**
	 * Specify an `id` for the `input`
	 */
	export let id = 'search' + Math.random().toString(36);

	/**
	 * Obtain a reference to the `input` element
	 * @type {HTMLInputElement}
	 */
	export let ref = null;

	import { createEventDispatcher, onMount, afterUpdate } from 'svelte';

	const dispatch = createEventDispatcher();

	let prevValue = value;
	let timeout = undefined;
	let calling = false;

	/** @type {() => any;} */
	function debounceFn(fn) {
		if (calling) return;
		calling = true;
		timeout = setTimeout(() => {
			fn();
			calling = false;
		}, debounce);
	}

	onMount(() => {
		if (autofocus) window.requestAnimationFrame(() => ref.focus());
		return () => clearTimeout(timeout);
	});

	afterUpdate(() => {
		if (value.length > 0 && value !== prevValue) {
			if (debounce > 0) {
				debounceFn(() => dispatch('type', value));
			} else {
				dispatch('type', value);
			}
		}

		if (value.length === 0 && prevValue.length > 0) dispatch('clear');

		prevValue = value;
	});
</script>

<form on:submit|preventDefault role="search">
	<input
		class="input"
		autocomplete="off"
		bind:this={ref}
		bind:value
		{id}
		name="search"
		on:blur
		on:change
		on:focus
		on:input
		on:keydown
		placeholder="Search..."
		spellcheck="false"
		type="search"
	/>
</form>
