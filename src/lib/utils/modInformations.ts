export const modInformations: { [x: string]: App.ModInformation } = {
	ars_nouveau: {
		texturePredicate: (filename: string) => {
			return (
				filename.includes('textures/item') ||
				// Images in Patchouli Book
				filename.includes('textures/gui/entries')
			);
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes('patchouli_books/worn_notebook/en_us/categories/');
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes('patchouli_books/worn_notebook/en_us/entries/');
		},
		recipePredicate: (filename: string) => {
			return filename.includes('recipes');
		},
		languagePredicate: (filename: string) => {
			return filename.includes('lang');
		},
		repositoryId: 'baileyholl/Ars-Nouveau',
		name: 'Ars Nouveau'
	},
	ars_creo: {
		texturePredicate: (filename: string) => {
			return filename.includes('textures/items');
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes('patchouli_books/artificers_notes/en_us/categories/');
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes('patchouli_books/artificers_notes/en_us/entries/');
		},
		recipePredicate: (filename: string) => {
			return filename.includes('recipes');
		},
		languagePredicate: (filename: string) => {
			return filename.includes('lang');
		},
		repositoryId: 'baileyholl/Ars-Creo',
		name: 'Ars Creo',
		icon: '/creo.png'
	},
	ars_caelum: {
		texturePredicate: (filename: string) => {
			return filename.includes('assets/ars_caelum/textures/item/');
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes('patchouli_books/caelum_notes/en_us/categories');
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes('patchouli_books/caelum_notes/en_us/entries');
		},
		recipePredicate: (filename: string) => {
			return filename.includes('data/ars_caelum/recipes/');
		},
		languagePredicate: (filename: string) => {
			return filename.includes('ars_caelum/lang/');
		},
		repositoryId: 'baileyholl/ars-caelum',
		name: 'Ars Caelum',
		icon: '/caelum.png'
	},

	ars_elemental: {
		texturePredicate: (filename: string) => {
			return (
				(filename.includes('src/main/resources/assets/ars_arsenal/textures/item/') ||
					filename.includes('src/main/resources/assets/ars_nouveau/textures/items/') ||
					filename.includes('src/main/resources/assets/ars_elemental/textures/item/')) &&
				!(filename.includes('watery_grave.png') || filename.includes('conjure_terrain.png'))
			);
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes(
				'src/generated/resources/assets/ars_nouveau/patchouli_books/worn_notebook/en_us/categories/'
			);
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes(
				'src/generated/resources/assets/ars_nouveau/patchouli_books/worn_notebook/en_us/entries/'
			);
		},
		recipePredicate: (filename: string) => {
			return (
				filename.includes('src/generated/resources/data/ars_elemental/recipes/') ||
				filename.includes('src/main/resources/data/ars_elemental/recipes/')
			);
		},
		languagePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/ars_elemental/lang/');
		},
		repositoryId: 'Alexthw46/Ars-Elemental',
		name: 'Ars Elemental',
		icon: '/ars_elemental_logo.png'
	},
	ars_gears: {
		texturePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/ars_gears/textures');
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_gears/patchouli_books/worn_notebook/en_us/categories/'
			);
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_gears/patchouli_books/worn_notebook/en_us/entries/'
			);
		},
		recipePredicate: (filename: string) => {
			return filename.includes('src/main/resources/data/ars_gears/recipes/');
		},
		languagePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/ars_gears/lang');
		},
		repositoryId: 'Cycro54/Ars_GEARs',
		name: 'Ars G.E.A.R.S',
		icon: '/arcane_combat_gear.png'
	},
	ars_instrumentum: {
		texturePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/ars_instrumentum/textures/items/');
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_instrumentum/patchouli_books/wizards_scratchpad/en_us/categories/'
			);
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_instrumentum/patchouli_books/wizards_scratchpad/en_us/entries/'
			);
		},
		recipePredicate: (filename: string) => {
			return (
				filename.includes('src/main/resources/data/ars_instrumentum/recipes/') ||
				filename.includes('src/generated/resources/data/ars_instrumentum/recipes') ||
				filename.includes('src/generated/resources/data/ars_instrumentum/recipes/apparatus') ||
				filename.includes('src/generated/resources/data/ars_instrumentum/recipes/imbuement')
			);
		},
		languagePredicate: (filename: string) => {
			return (
				filename.includes('src/main/resources/assets/ars_instrumentum/lang') ||
				filename.includes('src/generated/resources/assets/ars_instrumentum/lang')
			);
		},
		repositoryId: 'Sarenor/Ars-Instrumentum',
		repositoryBranch: 'documentation',
		name: 'Ars Instrumentum',
		icon: '/wizards_armarium.png'
	},
	ars_mage_fight: {
		texturePredicate: (filename: string) => {
			return (
				filename.includes('src/main/resources/assets/ars_mage_fight/textures') ||
				filename.includes('src/main/resources/assets/ars_nouveau/textures/items/')
			);
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_mage_fight/patchouli_books/worn_notebook/en_us/categories/'
			);
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_mage_fight/patchouli_books/worn_notebook/en_us/entries/'
			);
		},
		recipePredicate: (filename: string) => {
			return filename.includes('src/main/resources/data/ars_mage_fight/recipes/');
		},
		languagePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/ars_mage_fight/lang');
		},
		repositoryId: 'Cycro54/Ars_Mage_Fight',
		name: 'Ars Mage Fight',
		icon: '/black_hole.png'
	},
	arsocultas: {
		texturePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/ars_ocultas/textures/item');
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/assets/ars_nouveau/patchouli_books/worn_notebook/en_us/categories/'
			);
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/assets/ars_nouveau/patchouli_books/worn_notebook/en_us/entries/'
			);
		},
		recipePredicate: (filename: string) => {
			return filename.includes('src/main/resources/data/ars_ocultas/recipes/');
		},
		languagePredicate: () => {
			return false;
		},
		repositoryId: 'mystchonky/Ars-Ocultas',
		name: 'Ars Ocultas',
		icon: '/ocultas.png'
	},
	arsomega: {
		texturePredicate: (filename: string) => {
			return (
				filename.includes('src/main/resources/assets/arsomega/textures/items/') ||
				// Images in Patchouli Book
				filename.includes('src/main/resources/assets/ars_nouveau/textures/items/')
			);
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/arsomega/patchouli_books/tornnotes/en_us/categories/'
			);
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/arsomega/patchouli_books/tornnotes/en_us/entries/'
			);
		},
		recipePredicate: (filename: string) => {
			return (
				filename.includes('src/main/resources/data/ars_nouveau/recipes/') ||
				filename.includes('src/main/resources/data/arsomega/recipes/')
			);
		},
		languagePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/arsomega/lang');
		},
		advancementPredicate: (filename: string) => {
			return filename.includes('src/main/resources/data/arsomega/advancements');
		},
		repositoryId: 'dkmk100/ArsOmega',
		name: 'Ars Omega',
		icon: '/demonic_crystal.png'
	},
	ars_scalaes: {
		texturePredicate: (filename: string) => {
			return (
				filename.includes('src/main/resources/assets/ars_scalaes/textures/item/') &&
				!(
					filename.includes('expand.png') ||
					filename.includes('resize.png') ||
					filename.includes('shrink.png') ||
					filename.includes('morph.png')
				)
			);
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_scalaes/patchouli_books/scalaes/en_us/categories/'
			);
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_scalaes/patchouli_books/scalaes/en_us/entries/'
			);
		},
		recipePredicate: (filename: string) => {
			return (
				filename.includes('src/generated/resources/data/ars_scalaes/recipes') ||
				filename.includes('src/main/resources/data/ars_scalaes/recipes/')
			);
		},
		languagePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/ars_scalaes/lang');
		},
		repositoryId: 'Alexthw46/Ars-Scalaes',
		name: 'Ars Scalaes',
		icon: '/scalaes.png'
	},
	starbunclemania: {
		texturePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/starbunclemania/textures/item/');
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes(
				'/src/generated/resources/data/starbunclemania/patchouli_books/starbunclemania/en_us/categories/'
			);
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes(
				'/src/generated/resources/data/starbunclemania/patchouli_books/starbunclemania/en_us/entries/'
			);
		},
		recipePredicate: (filename: string) => {
			return (
				filename.includes('src/generated/resources/data/starbunclemania/recipes/') ||
				filename.includes('src/main/resources/data/starbunclemania/recipes/')
			);
		},
		languagePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/starbunclemania/lang/');
		},
		repositoryId: 'Alexthw46/StarbuncleMania',
		name: 'Starbuncle Mania',
		icon: '/starbuncle_charm.png'
	},
	tome_of_blood: {
		texturePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/tomeofblood/textures/');
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/assets/ars_nouveau/patchouli_books/worn_notebook/en_us/categories/'
			);
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/assets/ars_nouveau/patchouli_books/worn_notebook/en_us/entries/'
			);
		},
		recipePredicate: (filename: string) => {
			return (
				filename.includes('src/generated/resources/data/ars_nouveau/recipes/') ||
				filename.includes('src/generated/resources/data/tomeofblood/recipes/')
			);
		},
		languagePredicate: (filename: string) => {
			return filename.includes('src/generated/resources/assets/tomeofblood/lang');
		},
		repositoryId: 'mystchonky/Tome-of-Blood',
		name: 'Tome of Blood',
		icon: '/tomeofblood.png'
	},
	too_many_glyphs: {
		texturePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/toomanyglyphs/textures/items/');
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_nouveau/patchouli_books/worn_notebook/en_us/categories/'
			);
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes(
				'src/main/resources/data/ars_nouveau/patchouli_books/worn_notebook/en_us/entries/'
			);
		},
		recipePredicate: (filename: string) => {
			return filename.includes('src/main/resources/data/ars_nouveau/recipes');
		},
		languagePredicate: (filename: string) => {
			return filename.includes('src/main/resources/assets/ars_nouveau/lang');
		},
		repositoryId: 'DerringersMods/TooManyGlyphs',
		name: 'Too Many Glyphs',
		icon: '/chaining.png'
	}
};

export const addonList = [
	'ars_creo',
	'ars_caelum',
	'ars_elemental',
	'ars_gears',
	'ars_instrumentum',
	'ars_mage_fight',
	'arsocultas',
	'arsomega',
	'ars_scalaes',
	'starbunclemania',
	'tome_of_blood',
	'too_many_glyphs'
];

export const modlist = ['ars_nouveau'].concat(addonList);
