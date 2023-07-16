<script lang="ts">
    import TextPage from '$lib/components/patchouli/TextPage.svelte';
    import CraftingPage from '$lib/components/patchouli/CraftingPage.svelte';
    import LinkPage from '$lib/components/patchouli/LinkPage.svelte';
    import RelationsPage from "$lib/components/patchouli/RelationsPage.svelte";
    import ArsPage from "$lib/components/patchouli/MinejagoPage.svelte";
    import ImagePage from "$lib/components/patchouli/ImagePage.svelte";

    export let patchouliPage: App.PatchouliPage;

    const getDisplayedComponent = (type: string) => {
        switch (type) {
            case 'modonomicon:text':
            case 'text':
                return TextPage;
            case 'modonomicon:crafting':
            case 'crafting':
                return CraftingPage;
            case 'modonomicon:link':
            case 'link':
                return LinkPage;
            case 'modonomicon:relations':
            case 'relations':
                return RelationsPage;
            case 'modonomicon:image':
            case 'image':
                return ImagePage;
            default:
                return undefined;
        }
    };

    $: displayedComponent = getDisplayedComponent(patchouliPage?.type);
</script>

<div class="mb-2">
    <svelte:component {...patchouliPage} this={displayedComponent}/>
</div>
