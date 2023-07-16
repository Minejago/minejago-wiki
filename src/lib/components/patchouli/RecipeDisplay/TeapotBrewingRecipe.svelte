<script lang="ts">
    import Ingredient from "$lib/components/patchouli/RecipeDisplay/Ingredient.svelte";
    import {getLabelWithCurrentValues} from "$lib/languages.js";
    import {getIdFromResourceLocation} from "$lib/utils/idResolver.js";
    import Plus from "$lib/components/icons/Plus.svelte";
    import Arrow from "$lib/components/icons/Arrow.svelte";
    import Item from "$lib/components/patchouli/RecipeDisplay/Item.svelte";

    export let recipeData: App.TeapotBrewingRecipe;
</script>

<h4 class="mb-3">Teapot Brewing Recipe</h4>
<div class="craftingRecipe">
    <div class="card card-body">
        <div class="craftingGrid">
            {#each recipeData.ingredient as ingredient}
                <Ingredient {ingredient}/>
            {/each}
        </div>
    </div>
    <Arrow/>
    <div class="card card-body">
        <Item item={recipeData.result.item}/>
    </div>
</div>