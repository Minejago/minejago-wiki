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
	<option value="es_es">Spanish</option>
	<option value="ca_es">Spanish Catalan</option>
	<option value="ja_jp">Japanese</option>
	<option value="ko_kr">Korean</option>
	<option value="ru_ru">Russian</option>
	<option value="zh_cn">Chinese - Simplified</option>
	<option value="zh_tw">Chinese - Traditional</option>
	<option value="af_za">Afrikaans</option>
	<option value="ar-sa">Arabic</option>
	<option value="cs_cz">Czech</option>
	<option value="da_dk">Danish</option>
	<option value="de_de">German</option>
	<option value="el_gr">Greek</option>
	<option value="fi_fi">Finish</option>
	<option value="fr_fr">French</option>
	<option value="he_il">Hebrew</option>
	<option value="hu_hu">Hungarian</option>
	<option value="it_it">Italian</option>
	<option value="ko_kr">Korean</option>
	<option value="nl_nl">Dutch</option>
	<option value="no_no">Norwegiah</option>
	<option value="pl_pl">Polish</option>
	<option value="pt_br">Portuguese (Brazil)</option>
	<option value="pt_pt">Portuguese (Portugal)</option>
	<option value="ro_ro">Romanian</option>
	<option value="ru_ru">Russian</option>
	<option value="sr_sp">Serbian</option>
	<option value="sv_se">Swedish</option>
	<option value="tr_tr">Turkish</option>
	<option value="uk_ua">Ukrainian</option>
	<option value="vi_vn">Vietnamese</option>
</select>
