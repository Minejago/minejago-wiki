<script lang="ts">
	import Ingredient from '$lib/components/patchouli/RecipeDisplay/Ingredient.svelte';
	import Item from '$lib/components/patchouli/RecipeDisplay/Item.svelte';
	import Plus from '$lib/components/icons/Plus.svelte';
	import Arrow from '$lib/components/icons/Arrow.svelte';

	export let recipeData: App.ImbuementRecipe;

	$: mappedInputItems = recipeData.pedestalItems.map(
		(ingredient) => ingredient.item || ingredient.tag
	);
</script>

<h4 class="mb-3">Imbuement Chamber Recipe</h4>
<div class="craftingRecipe">
	<div class="card card-body flex flex-col items-center">
		<span>Pedestal Items (Will not be consumed):</span>
		{#if !mappedInputItems || mappedInputItems.length === 0}
			<span>No Pedestal Items are necessary</span>
		{:else}
			<div class="craftingGrid">
				{#each mappedInputItems as ingredient}
					<Ingredient {ingredient} />
				{/each}
			</div>
		{/if}
	</div>
	<Plus />
	<div class="card card-body flex flex-col items-center justify-center craftingGridItem">
		Reagent:
		<Ingredient ingredient={recipeData.input} />
	</div>
	<Plus />
	<div class="card card-body flex flex-col items-center justify-center craftingGridItem">
		<span>Source: </span>
		<span>{recipeData.source}*</span>
	</div>
	<Arrow />
	<div class="card card-body">
		<Item item={recipeData.output} />
	</div>
</div>
<p class="text-center">
	*Source slowly accumulates on it's own in the Imbuement Chamber. Provide a full Source Jar for
	quicker crafting
</p>
