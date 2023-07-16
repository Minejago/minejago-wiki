import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const texturesStore: Writable<App.TextureDictionary | undefined> = writable({});
export const patchouliStore: Writable<App.PatchouliStore | undefined> = writable({});
export const recipesStore: Writable<App.RecipeDictionary | undefined> = writable({});
export const storesLoaded: Writable<boolean> = writable(false);
