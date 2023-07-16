<script lang="ts">
    import {getRecipe} from '$lib/recipes';
    import {recipesStore} from "$lib/stores/fileStore";
    import BrewingRecipe from "$lib/components/patchouli/RecipeDisplay/TeapotBrewingRecipe.svelte";


    const getRecipeDisplay = (type: string) => {
        switch (type) {
            case 'minejago:teapot_brewing':
                return BrewingRecipe
            default:
                return undefined;
        }
    }

    export let recipe: string;
    $: recipeData = getRecipe(recipe, $recipesStore);
    $: displayedComponent = getRecipeDisplay(recipeData.type)
</script>

<svelte:component recipeData={recipeData} this={displayedComponent}/>
