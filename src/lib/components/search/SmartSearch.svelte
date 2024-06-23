<script lang="ts">
	import { searchStore } from '$lib/stores/searchStore';
	import Search from '$lib/components/search/Search.svelte';
	import Dropdown from '$lib/components/search/Dropdown.svelte';

	export let mobile = false;

	let value: string;
	let searchElement: HTMLElement;

	let focus = false;
	const onFocus = () => {
		focus = true;
	};
	const onBlur = () => {
		focus = false;
	};

	const getSearchResults = (value?: string) => {
		if ($searchStore && $searchStore.search && value && value.length > 2) {
			return $searchStore.search(value);
		} else {
			return [];
		}
	};

	$: results = getSearchResults(value)
		.slice(0, 5)
		.map((foundValue) => foundValue.item);
</script>

<div
	aria-controls="search-dropdown"
	aria-expanded={focus && results}
	aria-haspopup="listbox"
	aria-owns="listbox"
	bind:this={searchElement}
	class:dropdown={results.length > 0}
	data-svelte-typeahead
	role="combobox"
>
	<Search bind:value on:blur={onBlur} on:focus={onFocus} />
	<Dropdown
		id="search-dropdown"
		open={focus && !!results}
		openLeft={mobile}
		parentElement={searchElement}
	>
		<nav class="list-nav" slot="content">
			<ul>
				{#each results as result}
					<li>
						<a href={result.href}>
							<span class="flex-auto">
								{result.title}
							</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</Dropdown>
</div>
