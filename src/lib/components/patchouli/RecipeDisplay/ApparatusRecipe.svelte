<script lang="ts">
	import Ingredient from '$lib/components/patchouli/RecipeDisplay/Ingredient.svelte';
	import Item from '$lib/components/patchouli/RecipeDisplay/Item.svelte';
	import Plus from '$lib/components/icons/Plus.svelte';
	import Arrow from '$lib/components/icons/Arrow.svelte';

	export let recipeData: App.EnchantingApparatusRecipe;
	$: mappedInputItems = recipeData.pedestalItems.map((ingredient) => {
		if (ingredient.item?.item || ingredient.item?.tag) {
			return ingredient.item;
		} else {
			return ingredient;
		}
	});
</script>

<h4 class="mb-3">Enchanting Apparatus Recipe</h4>
<div class="craftingRecipe">
	<div class="card card-body flex flex-col items-center">
		<span>Pedestal Items:</span>
		<div class="craftingGrid">
			{#each mappedInputItems as ingredient}
				<Ingredient {ingredient} />
			{/each}
		</div>
	</div>
	<Plus />
	<div class="card card-body">
		<div class="flex flex-col items-center justify-center craftingGridItem">
			Reagent:
			<Ingredient ingredient={recipeData.reagent[0]} />
		</div>
	</div>
	{#if recipeData.sourceCost}
		<Plus />
		<div class="card card-body flex flex-col items-center justify-center craftingGridItem">
			<span>Source: </span>
			<span>{recipeData.sourceCost}</span>
		</div>
	{/if}
	<Arrow />
	<div class="card card-body">
		<Item item={recipeData.output.item} />
	</div>
</div>
