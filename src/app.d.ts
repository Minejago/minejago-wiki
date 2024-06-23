// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	interface PageData {
		category?: string;
		entry?: string;
	}

	// interface Platform {}
	interface GithubObject {
		name: string;
		path: string;
		sha: string;
		size: number;
		url: string;
		html_url: string;
		git_url: string;
		download_url?: string;
		type: 'file' | 'dir';
	}

	interface LanguageDictionary {
		[x: string]: { [x: string]: string };
	}

	interface ModonomiconPage {
		type: 'modonomicon:text' | 'modonomicon:crafting' | 'modonomicon:image' | string;
		recipe?: string;
		text?: string;
		entries?: Array<string>; // Links in the Relations Page
		title?: string;
		images?: Array<string>;
	}

	interface ModonomiconCategory {
		name: string;
		id: string;
		description: string;
		icon: Ingredient;
		sortnum: number;
		entries: {
			[x: string]: ModonomiconEntry;
		};
		source: string;
	}

	interface ModonomiconEntry {
		category: string;
		icon: string;
		name: string;
		pages: Array<ModonomiconPage>;
		source: string;
	}

	interface Item {
		item: string;
	}

	interface Tag {
		tag: string;
	}

	type Ingredient = Tag & Item & {};

	interface Potion {
		potion: string;
	}

	interface IntProvider {
		type: string;
		min_inclusive: number;
		max_inclusive: number;
	}

	interface Recipe {
		type:
			| 'minecraft:crafting_shaped'
			| 'minecraft:crafting_shapeless'
			| 'minejago:teapot_brewing'
			| 'Unknown Recipe';
	}

	interface ShapedRecipe extends Recipe {
		type: 'minecraft:crafting_shaped';
		key: {
			[x: string]: Ingredient;
		};
		pattern: Array<string>;
		result: Item;
	}

	interface ShapelessRecipe extends Recipe {
		type: 'minecraft:crafting_shapeless' | 'ars_nouveau:book_upgrade';
		ingredients: Array<Ingredient>;
		result: Item;
	}

	interface TeapotBrewingRecipe extends Recipe {
		type: 'minejago:teapot_brewing';
		base: Potion;
		brewing_time: IntProvider;
		experience: number;
		ingredient: Ingredient;
		result: Potion;
	}

	interface Advancement {
		parent: string;
		display: {
			description: {
				translate: string;
			};
			title: {
				translate: string;
			};
		};
	}

	interface ModonomiconStore {
		[x: string]: ModonomiconCategory;
	}

	interface RecipeDictionary {
		[x: string]: Recipe;
	}

	export interface TextureDictionary {
		[x: string]: string;
	}

	export interface MinecraftLanguageDictionary {
		[x: string]: string;
	}

	interface AdvancementStore {
		[x: string]: Advancement;
	}

	export interface SearchCandidate {
		title: string;
		text: string;
		href: string;
	}

	export interface ModInformation {
		texturePredicate: (filename: string) => boolean;
		modonomiconCategoryPredicate: (filename: string) => boolean;
		modonomiconEntryPredicate: (filename: string) => boolean;
		recipePredicate: (filename: string) => boolean;
		languagePredicate: (filename: string) => boolean;
		advancementPredicate?: (filename: string) => boolean;
		repositoryId: string;
		repositoryBranch?: string;
		icon?: string;
		name: string;
	}
}
