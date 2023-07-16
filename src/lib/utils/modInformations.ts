export const modInformations: { [x: string]: App.ModInformation } = {
	minejago: {
		texturePredicate: (filename: string) => {
			return (
				filename.includes('textures/item') ||
				// Images in Book
				filename.includes('textures/modonomicon/wiki/compat/visual')
			);
		},
		patchouliCategoryPredicate: (filename: string) => {
			return filename.includes('modonomicon/books/book.minejago.wiki/categories/');
		},
		patchouliEntryPredicate: (filename: string) => {
			return filename.includes('modonomicon/books/book.minejago.wiki/entries/');
		},
		recipePredicate: (filename: string) => {
			return filename.includes('recipes');
		},
		languagePredicate: (filename: string) => {
			return filename.includes('lang');
		},
		repositoryId: 'thomasglasser/Minejago',
		name: 'Minejago'
	}
	// Addons
	// too_many_glyphs: {
	// 	texturePredicate: (filename: string) => {
	// 		return filename.includes('src/main/resources/assets/toomanyglyphs/textures/items/');
	// 	},
	// 	patchouliCategoryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/main/resources/data/ars_nouveau/patchouli_books/worn_notebook/en_us/categories/'
	// 		);
	// 	},
	// 	patchouliEntryPredicate: (filename: string) => {
	// 		return filename.includes(
	// 			'src/main/resources/data/ars_nouveau/patchouli_books/worn_notebook/en_us/entries/'
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
	// 'ars_creo',
	// 'ars_caelum',
	// 'ars_elemental',
	// 'ars_gears',
	// 'ars_instrumentum',
	// 'ars_mage_fight',
	// 'arsomega',
	// 'ars_scalaes',
	// 'starbunclemania',
	// 'too_many_glyphs'
];

export const modlist = ['minejago'].concat(addonList);
