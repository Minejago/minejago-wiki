<script lang="ts">
    import {chosenLanguageStore, updateMinecraftLanguageStore} from "$lib/stores/languageStore.js";
    import {updateSearch} from "$lib/setup/initializeSearch";

    let chosenLanguage: string;
    const onChange = () => {
        $chosenLanguageStore = chosenLanguage;
        updateMinecraftLanguageStore(chosenLanguage);
        updateSearch();
    }
</script>

<select class="select" bind:value={chosenLanguage} id="language" name="language" on:change={onChange}>
    <option value="en_us">English</option>
    <option value="de_de">German</option>
    <option value="en_gb">English, United Kingdom</option>
    <option value="en_pt">Pirate English</option>
    <option value="en_ud">English (Upside Down)</option>
    <option value="enws">Shakespearean English</option>
    <option value="fi_fi">Finnish</option>
    <option value="lol_us">LOLCAT</option>
    <option value="pl_pl">Polish</option>
</select>