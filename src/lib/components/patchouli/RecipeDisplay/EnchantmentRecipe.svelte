<script lang="ts">
	import Ingredient from '$lib/components/patchouli/RecipeDisplay/Ingredient.svelte';
	import { getLabelWithCurrentValues } from '$lib/languages.js';
	import { getIdFromResourceLocation } from '$lib/utils/idResolver.js';
	import Plus from '$lib/components/icons/Plus.svelte';
	import Arrow from '$lib/components/icons/Arrow.svelte';

	export let recipeData: App.EnchantmentRecipe;

	const getEnchantmentLabel = (label: string) => {
		if (label === 'ars_nouveau:reactive') {
			return getLabelWithCurrentValues(
				`enchantment.ars_nouveau.${getIdFromResourceLocation(label)}`
			);
		}
		if (label === 'arsomega:proactive') {
			return getLabelWithCurrentValues(`enchantment.arsomega.${getIdFromResourceLocation(label)}`);
		}
		return getLabelWithCurrentValues(`enchantment.minecraft.${getIdFromResourceLocation(label)}`);
	};

	$: console.log(recipeData);

	$: mappedInputItems = recipeData.pedestalItems.map(
		(ingredient) => ingredient.item || ingredient.tag
	);
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
	<div class="card card-body flex flex-col items-center justify-center craftingGridItem">
		Item to be enchanted
		{#if recipeData.level > 1}
			*
		{/if}
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
		{`The Enchantment ${getEnchantmentLabel(recipeData.enchantment)} at level ${
			recipeData.level
		} will be applied to your item`}
	</div>
</div>

{#if recipeData.level > 1}
	<p class="text-center">*The item needs to have the previous level of the enchantment</p>
{/if}
