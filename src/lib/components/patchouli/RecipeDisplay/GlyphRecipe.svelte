<script lang="ts">
	import Ingredient from '$lib/components/patchouli/RecipeDisplay/Ingredient.svelte';
	import Item from '$lib/components/patchouli/RecipeDisplay/Item.svelte';
	import Arrow from '$lib/components/icons/Arrow.svelte';
	import Plus from '$lib/components/icons/Plus.svelte';

	export let recipeData: App.GlyphRecipe;

	$: mappedInputItems = recipeData.inputItems.map(
		(ingredient) => ingredient.item || ingredient.tag
	);
</script>

<h4 class="mb-3">Glyph Recipe</h4>
<div class="craftingRecipe">
	<div class="card card-body">
		<div class="craftingGrid">
			{#each mappedInputItems as ingredient}
				<Ingredient {ingredient} />
			{/each}
		</div>
	</div>
	<Plus />
	<div class="card card-body flex flex-col items-center justify-center craftingGridItem">
		<span>EXP-Cost:</span>
		<span>{recipeData.exp}</span>
	</div>

	<Arrow />
	<div class="card card-body">
		<Item item={recipeData.output.replace('glyph_', '')} />
	</div>
</div>
