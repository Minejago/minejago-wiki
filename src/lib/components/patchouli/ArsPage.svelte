<script lang="ts">
	import { getRecipe } from '$lib/recipes';
	import { recipesStore } from '$lib/stores/fileStore';
	import ApparatusRecipe from '$lib/components/patchouli/RecipeDisplay/ApparatusRecipe.svelte';
	import ImbuementRecipe from '$lib/components/patchouli/RecipeDisplay/ImbuementRecipe.svelte';
	import EnchantmentRecipe from '$lib/components/patchouli/RecipeDisplay/EnchantmentRecipe.svelte';
	import GlyphRecipe from '$lib/components/patchouli/RecipeDisplay/GlyphRecipe.svelte';
	import ArmorUpgradeRecipe from '$lib/components/patchouli/RecipeDisplay/ArmorUpgradeRecipe.svelte';
	import SpellWrite from '$lib/components/patchouli/RecipeDisplay/SpellWrite.svelte';
	import ReactiveEnchantment from '$lib/components/patchouli/RecipeDisplay/ReactiveEnchantment.svelte';

	const getRecipeDisplay = (type: string) => {
		switch (type) {
			case 'ars_nouveau:enchanting_apparatus':
				return ApparatusRecipe;
			case 'ars_nouveau:imbuement':
				return ImbuementRecipe;
			case 'ars_nouveau:enchantment':
				return EnchantmentRecipe;
			case 'ars_nouveau:glyph':
				return GlyphRecipe;
			case 'ars_nouveau:armor_upgrade':
				return ArmorUpgradeRecipe;
			case 'ars_nouveau:spell_write':
				return SpellWrite;
			case 'ars_nouveau:reactive_enchantment':
				return ReactiveEnchantment;
			default:
				return undefined;
		}
	};

	export let recipe: string;
	$: recipeData = getRecipe(recipe, $recipesStore);
	$: displayedComponent = getRecipeDisplay(recipeData.type);
</script>

<svelte:component this={displayedComponent} {recipeData} />
