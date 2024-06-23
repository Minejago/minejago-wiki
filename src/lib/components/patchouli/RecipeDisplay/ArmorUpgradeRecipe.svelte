<script lang="ts">
	import Ingredient from '$lib/components/patchouli/RecipeDisplay/Ingredient.svelte';
	import Arrow from '$lib/components/icons/Arrow.svelte';
	import Plus from '$lib/components/icons/Plus.svelte';

	export let recipeData: App.ArmorUpgradeRecipe;
	$: mappedInputItems = recipeData.pedestalItems.map(
		(ingredient) => ingredient.item || ingredient.tag
	);
</script>

<h4 class="mb-3">Enchanting Apparatus Recipe</h4>
<div class="craftingRecipe">
	<div class="card card-body flex flex-col items-center">
		Pedestal Items:
		<div class="craftingGrid">
			{#each mappedInputItems as ingredient}
				<Ingredient {ingredient} />
			{/each}
		</div>
	</div>
	<Plus />
	<div class="card card-body">
		<div class="flex flex-col items-center">
			Reagent:
			<span>The Armor Piece you want to upgrade</span>
		</div>
	</div>
	{#if recipeData.sourceCost}
		+
		<div class="card card-body">Source: {recipeData.sourceCost}</div>
	{/if}
	<Arrow />
	<div class="card card-body">
		{`The Tier of your Armor Piece will have increased to ${recipeData.tier + 1}`}
	</div>
</div>
