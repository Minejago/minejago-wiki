import { Searcher } from 'fast-fuzzy';
import { getLabelWithCurrentValues } from '$lib/languages';
import { searchStore } from '$lib/stores/searchStore';
import { patchouliStore } from '$lib/stores/fileStore';
import { get } from 'svelte/store';

const getEntryText = (entry: App.PatchouliEntry) => {
	let text = '';
	entry.pages.forEach((page: App.PatchouliPage) => {
		if (page.type === 'modonomicon:text' && page.text) {
			text += getLabelWithCurrentValues(page.text);
		}
	});
	return text;
};

export const updateSearch = () => {
	const patchouli = get(patchouliStore);
	if (patchouli) {
		const entries = Object.values(patchouli)
			.map((category) => category.entries)
			.reduce((previousValue, currentValue) => {
				return { ...previousValue, ...currentValue };
			}, {});
		initializeSearch(patchouli, entries);
	}
};

export const initializeSearch = (
	categories: { [x: string]: App.PatchouliCategory } | undefined,
	entries: { [x: string]: App.PatchouliEntry } | undefined
) => {
	const searchCandidates: Array<App.SearchCandidate> = [];
	if (categories) {
		Object.entries(categories).forEach(([key, category]) => {
			searchCandidates.push({
				title: getLabelWithCurrentValues(category.name) || '',
				text: "",
				href: `/category/${key}`
			});
		});
	}
	if (entries) {
		Object.entries(entries).forEach(([key, entry]) => {
			searchCandidates.push({
				title: getLabelWithCurrentValues(entry.name) || '',
				text: getEntryText(entry) || '',
				href: `/category/${entry.category}/entry/${key}`
			});
		});
	}

	searchStore.set(
		new Searcher(searchCandidates, {
			keySelector: (s: App.SearchCandidate) => {
				const items: Array<string> = [];
				if (s.title) {
					items.push(s.title);
				}
				if (s.text) {
					items.push(s.text);
				}
				return items;
			},
			returnMatchData: true
		})
	);
};
