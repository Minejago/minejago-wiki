<script lang="ts">
	import Ingredient from '$lib/components/modonomicon/RecipeDisplay/Ingredient.svelte';
	import Item from '$lib/components/modonomicon/RecipeDisplay/Item.svelte';
	import Arrow from '$lib/components/icons/Arrow.svelte';

	export let recipeData: App.ShapelessRecipe;
</script>

<h4 class="mb-3">Shapeless Recipe</h4>
<div class="craftingRecipe">
	<div class="card card-body">
		<div class="craftingGrid">
			{#each recipeData.ingredients as ingredient}
				<Ingredient {ingredient} />
			{/each}
		</div>
	</div>
	<Arrow />
	<div class="card card-body">
		<Item item={recipeData.result.item} />
	</div>
</div>
