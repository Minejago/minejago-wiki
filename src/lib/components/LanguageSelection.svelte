<script lang="ts">
	import { chosenLanguageStore, updateMinecraftLanguageStore } from '$lib/stores/languageStore.js';
	import { updateSearch } from '$lib/setup/initializeSearch';

	let chosenLanguage: string;
	const onChange = () => {
		$chosenLanguageStore = chosenLanguage;
		updateMinecraftLanguageStore(chosenLanguage);
		updateSearch();
	};
</script>

<select
	class="select"
	bind:value={chosenLanguage}
	id="language"
	name="language"
	on:change={onChange}
>
	<option value="en_us">English</option>
	<option value="en_pt">Pirate Speak</option>
	<option value="en_ud">Upside Down</option>
	<option value="en_ws">Shakespearean English</option>
	<option value="lol_us">LOLCAT</option>
	<option value="en_gb">British English</option>
	<option value="fi_fi">Finnish</option>
	<option value="pl_pl">Polish</option>
	<option value="de_de">German</option>
</select>
