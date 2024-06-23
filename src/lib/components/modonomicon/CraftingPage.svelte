<script lang="ts">
	import { getRecipe } from '$lib/recipes';
	import ShapedRecipe from '$lib/components/modonomicon/RecipeDisplay/ShapedRecipe.svelte';
	import ShapelessRecipe from '$lib/components/modonomicon/RecipeDisplay/ShapelessRecipe.svelte';
	import RecipeWarning from '$lib/components/modonomicon/RecipeDisplay/RecipeWarning.svelte';
	import { recipesStore } from '$lib/stores/fileStore';
	import FormattedLabel from '$lib/components/modonomicon/FormattedLabel.svelte';

	export let recipe: string;
	export let recipe2: string;
	export let title: string;

	$: recipeData = getRecipe(recipe, $recipesStore) as App.Recipe;
	$: recipeData2 = getRecipe(recipe2, $recipesStore) as App.Recipe;
	$: displayedComponent =
		recipeData.type === 'minecraft:crafting_shaped' ? ShapedRecipe : ShapelessRecipe;
	$: displayedComponent2 =
		recipeData2?.type === 'minecraft:crafting_shaped' ? ShapedRecipe : ShapelessRecipe;
</script>

{#if title}
	<h4 class="mb-3">
		<FormattedLabel label={title} />
	</h4>
{/if}
{#if recipeData.type !== 'Unknown Recipe'}
	<svelte:component this={displayedComponent} {recipeData} />
{/if}
{#if recipe2 && recipeData2.type !== 'Unknown Recipe'}
	<svelte:component this={displayedComponent2} recipeData={recipeData2} />
{/if}
<RecipeWarning />
