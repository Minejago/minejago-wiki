<script lang="ts">
	import { getRecipe } from '$lib/recipes';
	import { recipesStore } from '$lib/stores/fileStore';
	// import TeapotBrewingRecipe from '$lib/components/modonomicon/RecipeDisplay/TeapotBrewingRecipe.svelte';

	const getRecipeDisplay = (type: string) => {
		switch (type) {
			// TODO: Make teapot brewing recipe display
			// case 'minejago:teapot_brewing':
			// 	return TeapotBrewingRecipe;
			default:
				return undefined;
		}
	};

	export let recipe: string;
	$: recipeData = getRecipe(recipe, $recipesStore);
	$: displayedComponent = getRecipeDisplay(recipeData.type);
</script>

<svelte:component this={displayedComponent} {recipeData} />
