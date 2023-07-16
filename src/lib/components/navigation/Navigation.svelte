<script lang="ts" context="module">
    import {getItemSrc} from "$lib/textures.js";
    import {notDisplayableItems} from "$lib/components/patchouli/RecipeDisplay/notDisplayableItems";
</script>

<script lang="ts">
    import {currentExpandedCategory, storeCurrentUrl} from '$lib/stores/uiState.js';
    import {patchouliStore} from '$lib/stores/fileStore';
    import {Accordion, AccordionItem, drawerStore} from '@skeletonlabs/skeleton';
    import {afterNavigate} from '$app/navigation';
    import {scrollSelectionIntoView} from "$lib/components/navigation/scrollHelper";
    import Label from "$lib/components/Label.svelte";
    import {texturesStore} from "$lib/stores/fileStore.js";
    import {modInformations} from "$lib/utils/modInformations.js";
    import AddonInformation from "$lib/components/AddonInformation.svelte";

    export let embedded: boolean = false;

    // ListItem Click Handler
    function onListItemClick(): void {
        if (!embedded) return;
        drawerStore.close();
    }

    $: sortedCategories = Object.values($patchouliStore)
        .filter(category => !!category.entries)
        .sort((categoryA, categoryB) => categoryA.sortnum - categoryB.sortnum);
    afterNavigate(() => {
        scrollSelectionIntoView();
    })
</script>

<style>
    .navIcon {
        width: 50px;
        height: 50px;
        image-rendering: pixelated;
    }
</style>

<div class="mb-8 {$$props.class || ''}">
    <Accordion>
    {#each sortedCategories as category, i}
        <AccordionItem open={$currentExpandedCategory === category.id}>
            <svelte:fragment slot="lead">
                {@const iconSrc = getItemSrc(category.icon, $texturesStore)}
                {#if iconSrc}
                    <img alt={`Icon for category ${category.name}`} src={iconSrc} class="navIcon"/>
                {:else }
                    <div class="navIcon"/>
                {/if}
            </svelte:fragment>
            <svelte:fragment slot="summary">
                <div class="text-primary-500 font-bold uppercase flex items-center">
                    <a href={`/category/${category.id}`} class="no-underline text-primary-500">
                        <Label label={category.name}/>
                    </a>
                    <AddonInformation addonName={category?.source}/>
                </div>
            </svelte:fragment>
            <svelte:fragment slot="content">
                <nav class="list-nav">
                    <ul>
                        {#each Object.entries(category.entries) as [id, entry]}
                            {@const href=`/category/${entry.category}/entry/${id}`}
                            <li class="flex items-center">
                                <a {href} on:click={onListItemClick} class:navSelected={$storeCurrentUrl === href}>
                                    <span class="flex-auto">
                                        <Label label={entry.name}/>
                                    </span>
                                </a>
                                <AddonInformation addonName={entry?.source}/>
                            </li>
                        {/each}
                    </ul>
                </nav>
            </svelte:fragment>
        </AccordionItem>
    {/each}
    </Accordion>
</div>
