import { getIdFromResourceLocation } from '$lib/utils/idResolver';

export const prepareModonomicon = (
	categories: { [x: string]: App.ModonomiconCategory } | undefined,
	entries: { [x: string]: App.ModonomiconEntry } | undefined,
	source: string
) => {
	if (categories && entries) {
		Object.entries(categories).forEach(([key, category]) => {
			category.id = key;
			if (!category.source) {
				category.source = source;
			}
		});
		Object.entries(entries).forEach(([key, value]) => {
			const category = getIdFromResourceLocation(value.category) || '';
			value.category = category;
			value.source = source;
			// If we can't find the category, it's ok if the entry vanishes
			categories[category].entries = { ...categories[category].entries, [key]: value };
		});
	}
	return categories;
};
