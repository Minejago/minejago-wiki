const defaultMacros = {
	'$(obf)': '$(k)',
	'$(bold)': '$(l)',
	'$(strike)': '$(m)',
	'$(italic)': '$(o)',
	'$(italics)': '$(o)',
	'$(list': '$(li',
	'$(reset)': '$()',
	'$(clear)': '$()',
	'$(2br)': '$(br2)',
	'$(p)': '$(br2)',
	'/$': '$()',
	'<br>': '$(br)',
	'$(nocolor)': '$(0)',
	'$(item)': '$(#b0b)',
	'$(thing)': '$(#490)'
};

const formatFinderRegex = /\$\(([^)]*)\)/;

//very primitive and horrible parsing logic
const formatString = (
	stringParts: Array<string>,
	index: number
): {
	formatted: string;
	newIndex: number;
} => {
	if (stringParts[index] === 'br') {
		return {
			formatted: '<br/>',
			newIndex: index + 1
		};
	}
	if (stringParts[index] === 'br2') {
		return {
			formatted: '<br/><br/>',
			newIndex: index + 1
		};
	}
	if (stringParts[index] === 'k') {
		return {
			formatted: `<span >${stringParts[index + 1]}</span>`,
			newIndex: index + 3
		};
	}
	if (stringParts[index] === 'l') {
		return {
			formatted: `<span class="font-bold">${stringParts[index + 1]}</span>`,
			newIndex: index + 3
		};
	}
	if (stringParts[index] === 'm') {
		return {
			formatted: `<span class="line-through">${stringParts[index + 1]}</span>`,
			newIndex: index + 3
		};
	}
	if (stringParts[index] === 'o') {
		return {
			formatted: `<span class="italic">${stringParts[index + 1]}</span>`,
			newIndex: index + 3
		};
	}
	if (stringParts[index].startsWith('k:')) {
		return {
			formatted: '',
			newIndex: index + 2
		};
	}
	if (stringParts[index].startsWith('#')) {
		return {
			formatted: `<span style="color: ${stringParts[index]}">${stringParts[index + 1]}</span>`,
			newIndex: index + 2
		};
	}
	return { formatted: stringParts[index], newIndex: index + 1 };
};

export const formatModonomiconText = (text: string): string => {
	let preparedString = text;
	//resolve default macros
	Object.entries(defaultMacros).forEach(
		([key, value]) => (preparedString = preparedString.replaceAll(key, value))
	);
	const splitText = preparedString.split(formatFinderRegex);

	let formattedString = '';
	for (let i = 0; i < splitText.length; ) {
		const formatReturn = formatString(splitText, i);
		formattedString += formatReturn.formatted;
		i = formatReturn.newIndex;
	}

	return formattedString;
};
