// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	interface PageData {
		category?: string;
		entry?: string;
		condition: string;
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

	interface PatchouliPage {
		type: 'modonomicon:text' | 'modonomicon:crafting' | 'modonomicon:image' | string;
		recipe?: string;
		text?: string;
		entries?: Array<string>; // Links in the Relations Page
		title?: string;
		images?: Array<string>;
	}

	interface PatchouliCategory {
		name: string;
		id: string;
		icon: string;
		sortnum: number;
		entries: {
			[x: string]: PatchouliEntry;
		};
	}

	interface PatchouliEntry {
		category: string;
		icon: string;
		name: string;
		pages: Array<PatchouliPage>;
		source: string;
	}

	interface Item {
		item: string;
	}

	interface Potion {
		potion: string;
	}

	interface Tag {
		tag: string;
	}

	type Ingredient = Tag & Item & NonNullable<unknown>;

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
		type: 'minecraft:crafting_shapeless';
		ingredients: Array<Ingredient>;
		result: Item;
	}

	interface TeapotBrewingRecipe extends Recipe {
		type: 'minejago:teapot_brewing';
		ingredient: Ingredient;
		result: Potion;
		experience: number;
		cookingTime: number;
	}

	interface PatchouliStore {
		[x: string]: PatchouliCategory;
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

	export interface SearchCandidate {
		title: string;
		text: string;
		href: string;
	}

	export interface ModInformation {
		texturePredicate: (filename: string) => boolean;
		patchouliCategoryPredicate: (filename: string) => boolean;
		patchouliEntryPredicate: (filename: string) => boolean;
		recipePredicate: (filename: string) => boolean;
		languagePredicate: (filename: string) => boolean;
		advancementPredicate?: (filename: string) => boolean;
		repositoryId: string;
		repositoryBranch?: string;
		icon?: string;
		name: string;
	}
}
