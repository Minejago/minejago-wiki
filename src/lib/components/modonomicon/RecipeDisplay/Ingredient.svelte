<script context="module" lang="ts">
	const isItem = (ingredient: App.Ingredient): ingredient is App.Item => {
		return (<App.Item>ingredient).item !== undefined;
	};
</script>

<script lang="ts">
	import Tag from '$lib/components/modonomicon/RecipeDisplay/Tag.svelte';
	import Item from '$lib/components/modonomicon/RecipeDisplay/Item.svelte';

	export let ingredient: App.Ingredient;

	$: displayAsItem = isItem(ingredient);
</script>

{#if displayAsItem}
	<Item item={ingredient.item} />
{:else}
	<Tag tag={ingredient.tag} />
{/if}
