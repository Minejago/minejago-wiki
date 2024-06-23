export const modInformations: { [x: string]: App.ModInformation } = {
	minejago: {
		texturePredicate: (filename: string) => {
			return (
				filename.includes('textures/item') ||
				filename.includes('textures/modonomicon')
			);
		},
		modonomiconCategoryPredicate: (filename: string) => {
			return filename.includes('modonomicon/books/wiki/categories/');
		},
		modonomiconEntryPredicate: (filename: string) => {
			return filename.includes('modonomicon/books/wiki/entries/');
		},
		recipePredicate: (filename: string) => {
			return filename.includes('recipe');
		},
		languagePredicate: (filename: string) => {
			return filename.includes('lang');
		},
		repositoryId: 'thomasglasser/Minejago',
		name: 'Minejago'
	},
	immersion: {
		texturePredicate: (filename: string) => {
			return filename.includes('textures/item');
		},
		modonomiconCategoryPredicate: (filename: string) => {
			return filename.includes('modonomicon/books/immersion_wiki/categories/');
		},
		modonomiconEntryPredicate: (filename: string) => {
			return filename.includes('modonomicon/books/immersion_wiki/entries/');
		},
		recipePredicate: (filename: string) => {
			return filename.includes('recipe');
		},
		languagePredicate: (filename: string) => {
			return filename.includes('lang');
		},
		repositoryId: 'thomasglasser/Minejago',
		name: 'Immersion Pack',
		icon: '/immersion.png'
	},
	potion_pot: {
		texturePredicate: (filename: string) => {
			return filename.includes('textures/item');
		},
		modonomiconCategoryPredicate: (filename: string) => {
			return filename.includes('modonomicon/books/potion_pot_wiki/categories/');
		},
		modonomiconEntryPredicate: (filename: string) => {
			return filename.includes('modonomicon/books/potion_pot_wiki/entries/');
		},
		recipePredicate: (filename: string) => {
			return filename.includes('recipe');
		},
		languagePredicate: (filename: string) => {
			return filename.includes('lang');
		},
		repositoryId: 'thomasglasser/Minejago',
		name: 'Potion Pot Pack',
		icon: '/potion_pot.png'
	},
	// ars_caelum: {
	// 	texturePredicate: (filename: string) => {
	// 		return filename.includes('assets/ars_caelum/textures/item/');
	// 	},
	// 	modonomiconCategoryPredicate: (filename: string) => {
	// 		return filename.includes('modonomicon/caelum_notes/en_us/categories');
	// 	},
	// 	modonomiconEntryPredicate: (filename: string) => {
	// 		return filename.includes('modonomicon/caelum_notes/en_us/entries');
	// 	},
	// 	recipePredicate: (filename: string) => {
	// 		return filename.includes('data/ars_caelum/recipes/');
	// 	},
	// 	languagePredicate: (filename: string) => {
	// 		return filename.includes('ars_caelum/lang/');
	// 	},
	// 	repositoryId: 'baileyholl/ars-caelum',
	// 	name: 'Ars Caelum',
	// 	icon: '/caelum.png'
	// },
	//
	// ars_elemental: {
	// 	texturePredicate: (filename: string) => {
	// 		return (
	// 			(filename.includes('src/main/resources/assets/ars_arsenal/textures/item/') ||
	// 				filename.includes('src/main/resources/assets/ars_nouveau/textures/items/') ||
	// 				filename.includes('src/main/resources/assets/ars_elemental/textures/item/')) &&
	// 			!(filename.includes('watery_grave.png') || filename.includes('conjure_terrain.png'))
	// 		);
	// 	},
	// 	modonomiconCategoryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/generated/resources/assets/ars_nouveau/modonomicon/books/wiki/categories/'
	// 		);
	// 	},
	// 	modonomiconEntryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/generated/resources/assets/ars_nouveau/modonomicon/books/wiki/entries/'
	// 		);
	// 	},
	// 	recipePredicate: (filename: string) => {
	// 		return (
	// 			filename.includes('src/generated/resources/data/ars_elemental/recipes/') ||
	// 			filename.includes('src/main/resources/data/ars_elemental/recipes/')
	// 		);
	// 	},
	// 	languagePredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/assets/ars_elemental/lang/');
	// 	},
	// 	repositoryId: 'Alexthw46/Ars-Elemental',
	// 	name: 'Ars Elemental',
	// 	icon: '/ars_elemental_logo.png'
	// },
	// ars_gears: {
	// 	texturePredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/assets/ars_gears/textures');
	// 	},
	// 	modonomiconCategoryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/main/resources/data/ars_gears/modonomicon/books/wiki/categories/'
	// 		);
	// 	},
	// 	modonomiconEntryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/main/resources/data/ars_gears/modonomicon/books/wiki/entries/'
	// 		);
	// 	},
	// 	recipePredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/data/ars_gears/recipes/');
	// 	},
	// 	languagePredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/assets/ars_gears/lang');
	// 	},
	// 	repositoryId: 'Cycro54/Ars_GEARs',
	// 	name: 'Ars G.E.A.R.S',
	// 	icon: '/arcane_combat_gear.png'
	// },
	// ars_instrumentum: {
	// 	texturePredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/assets/ars_instrumentum/textures/items/');
	// 	},
	// 	modonomiconCategoryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/main/resources/data/ars_instrumentum/modonomicon/wizards_scratchpad/en_us/categories/'
	// 		);
	// 	},
	// 	modonomiconEntryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/main/resources/data/ars_instrumentum/modonomicon/wizards_scratchpad/en_us/entries/'
	// 		);
	// 	},
	// 	recipePredicate: (filename: string) => {
	// 		return (
	// 			filename.includes('src/main/resources/data/ars_instrumentum/recipes/') ||
	// 			filename.includes('src/generated/resources/data/ars_instrumentum/recipes') ||
	// 			filename.includes('src/generated/resources/data/ars_instrumentum/recipes/apparatus') ||
	// 			filename.includes('src/generated/resources/data/ars_instrumentum/recipes/imbuement')
	// 		);
	// 	},
	// 	languagePredicate: (filename: string) => {
	// 		return (
	// 			filename.includes('src/main/resources/assets/ars_instrumentum/lang') ||
	// 			filename.includes('src/generated/resources/assets/ars_instrumentum/lang')
	// 		);
	// 	},
	// 	repositoryId: 'Sarenor/Ars-Instrumentum',
	// 	repositoryBranch: 'documentation',
	// 	name: 'Ars Instrumentum',
	// 	icon: '/wizards_armarium.png'
	// },
	// ars_mage_fight: {
	// 	texturePredicate: (filename: string) => {
	// 		return (
	// 			filename.includes('src/main/resources/assets/ars_mage_fight/textures') ||
	// 			filename.includes('src/main/resources/assets/ars_nouveau/textures/items/')
	// 		);
	// 	},
	// 	modonomiconCategoryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/main/resources/data/ars_mage_fight/modonomicon/books/wiki/categories/'
	// 		);
	// 	},
	// 	modonomiconEntryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/main/resources/data/ars_mage_fight/modonomicon/books/wiki/entries/'
	// 		);
	// 	},
	// 	recipePredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/data/ars_mage_fight/recipes/');
	// 	},
	// 	languagePredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/assets/ars_mage_fight/lang');
	// 	},
	// 	repositoryId: 'Cycro54/Ars_Mage_Fight',
	// 	name: 'Ars Mage Fight',
	// 	icon: '/black_hole.png'
	// },
	// arsocultas: {
	// 	texturePredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/assets/ars_ocultas/textures/item');
	// 	},
	// 	modonomiconCategoryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/main/resources/assets/ars_nouveau/modonomicon/books/wiki/categories/'
	// 		);
	// 	},
	// 	modonomiconEntryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/main/resources/assets/ars_nouveau/modonomicon/books/wiki/entries/'
	// 		);
	// 	},
	// 	recipePredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/data/ars_ocultas/recipes/');
	// 	},
	// 	languagePredicate: () => {
	// 		return false;
	// 	},
	// 	repositoryId: 'mystchonky/Ars-Ocultas',
	// 	name: 'Ars Ocultas',
	// 	icon: '/ocultas.png'
	// },
	// arsomega: {
	// 	texturePredicate: (filename: string) => {
	// 		return (
	// 			filename.includes('src/main/resources/assets/arsomega/textures/items/') ||
	// 			// Images in Modonomicon Book
	// 			filename.includes('src/main/resources/assets/ars_nouveau/textures/items/')
	// 		);
	// 	},
	// 	modonomiconCategoryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/main/resources/data/arsomega/modonomicon/tornnotes/en_us/categories/'
	// 		);
	// 	},
	// 	modonomiconEntryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/main/resources/data/arsomega/modonomicon/tornnotes/en_us/entries/'
	// 		);
	// 	},
	// 	recipePredicate: (filename: string) => {
	// 		return (
	// 			filename.includes('src/main/resources/data/ars_nouveau/recipes/') ||
	// 			filename.includes('src/main/resources/data/arsomega/recipes/')
	// 		);
	// 	},
	// 	languagePredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/assets/arsomega/lang');
	// 	},
	// 	advancementPredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/data/arsomega/advancements');
	// 	},
	// 	repositoryId: 'dkmk100/ArsOmega',
	// 	name: 'Ars Omega',
	// 	icon: '/demonic_crystal.png'
	// },
	// ars_scalaes: {
	// 	texturePredicate: (filename: string) => {
	// 		return (
	// 			filename.includes('src/main/resources/assets/ars_scalaes/textures/item/') &&
	// 			!(
	// 				filename.includes('expand.png') ||
	// 				filename.includes('resize.png') ||
	// 				filename.includes('shrink.png') ||
	// 				filename.includes('morph.png')
	// 			)
	// 		);
	// 	},
	// 	modonomiconCategoryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/main/resources/data/ars_scalaes/modonomicon/scalaes/en_us/categories/'
	// 		);
	// 	},
	// 	modonomiconEntryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/main/resources/data/ars_scalaes/modonomicon/scalaes/en_us/entries/'
	// 		);
	// 	},
	// 	recipePredicate: (filename: string) => {
	// 		return (
	// 			filename.includes('src/generated/resources/data/ars_scalaes/recipes') ||
	// 			filename.includes('src/main/resources/data/ars_scalaes/recipes/')
	// 		);
	// 	},
	// 	languagePredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/assets/ars_scalaes/lang');
	// 	},
	// 	repositoryId: 'Alexthw46/Ars-Scalaes',
	// 	name: 'Ars Scalaes',
	// 	icon: '/scalaes.png'
	// },
	// starbunclemania: {
	// 	texturePredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/assets/starbunclemania/textures/item/');
	// 	},
	// 	modonomiconCategoryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'/src/generated/resources/data/starbunclemania/modonomicon/starbunclemania/en_us/categories/'
	// 		);
	// 	},
	// 	modonomiconEntryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'/src/generated/resources/data/starbunclemania/modonomicon/starbunclemania/en_us/entries/'
	// 		);
	// 	},
	// 	recipePredicate: (filename: string) => {
	// 		return (
	// 			filename.includes('src/generated/resources/data/starbunclemania/recipes/') ||
	// 			filename.includes('src/main/resources/data/starbunclemania/recipes/')
	// 		);
	// 	},
	// 	languagePredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/assets/starbunclemania/lang/');
	// 	},
	// 	repositoryId: 'Alexthw46/StarbuncleMania',
	// 	name: 'Starbuncle Mania',
	// 	icon: '/starbuncle_charm.png'
	// },
	// tome_of_blood: {
	// 	texturePredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/assets/tomeofblood/textures/');
	// 	},
	// 	modonomiconCategoryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/main/resources/assets/ars_nouveau/modonomicon/books/wiki/categories/'
	// 		);
	// 	},
	// 	modonomiconEntryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/main/resources/assets/ars_nouveau/modonomicon/books/wiki/entries/'
	// 		);
	// 	},
	// 	recipePredicate: (filename: string) => {
	// 		return (
	// 			filename.includes('src/generated/resources/data/ars_nouveau/recipes/') ||
	// 			filename.includes('src/generated/resources/data/tomeofblood/recipes/')
	// 		);
	// 	},
	// 	languagePredicate: (filename: string) => {
	// 		return filename.includes('src/generated/resources/assets/tomeofblood/lang');
	// 	},
	// 	repositoryId: 'mystchonky/Tome-of-Blood',
	// 	name: 'Tome of Blood',
	// 	icon: '/tomeofblood.png'
	// },
	// too_many_glyphs: {
	// 	texturePredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/assets/toomanyglyphs/textures/items/');
	// 	},
	// 	modonomiconCategoryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/main/resources/data/ars_nouveau/modonomicon/books/wiki/categories/'
	// 		);
	// 	},
	// 	modonomiconEntryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/main/resources/data/ars_nouveau/modonomicon/books/wiki/entries/'
	// 		);
	// 	},
	// 	recipePredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/data/ars_nouveau/recipes');
	// 	},
	// 	languagePredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/assets/ars_nouveau/lang');
	// 	},
	// 	repositoryId: 'DerringersMods/TooManyGlyphs',
	// 	name: 'Too Many Glyphs',
	// 	icon: '/chaining.png'
	// }
};

export const addonList = [
	"immersion",
	"potion_pot"
];

export const modlist = ['ars_nouveau'].concat(addonList);
