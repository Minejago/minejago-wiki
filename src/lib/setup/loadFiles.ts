import type { JSZipObject } from 'jszip';
import { getFileName } from '$lib/utils/fileName';

export const getTextureFiles = (
	matcher: (filename: string) => boolean,
	zippedFiles: Array<JSZipObject>,
	modId: string
) => {
	return Promise.all(
		zippedFiles
			.filter((zippedFile) => matcher(zippedFile.name))
			.map((file) =>
				file.async('base64').then((value) => {
					return { [`${modId}:${getFileName(file.name)}`]: value };
				})
			)
	).then((resultingArray) => {
		return resultingArray.reduce((previousValue, currentValue) => {
			return { ...previousValue, ...currentValue };
		}, {});
	});
};

export const getMatchingJSONFiles = (
	matcher: (filename: string) => boolean,
	zippedFiles: Array<JSZipObject>,
	originId: string = '',
	additionalTransformation?: (objectToTransform: object) => object
) => {
	return Promise.all(
		zippedFiles
			.filter((zippedFile) => matcher(zippedFile.name))
			.map((file) =>
				file.async('string').then((value) => {
					const json = JSON.parse(value);
					return {
						[originId ? originId + ':' + getFileName(file.name) : getFileName(file.name)]:
							additionalTransformation ? additionalTransformation(json) : json
					};
				})
			)
	).then((resultingArray) => {
		if (additionalTransformation) {
			resultingArray = resultingArray.map(additionalTransformation);
		}
		return resultingArray.reduce((previousValue, currentValue) => {
			return { ...previousValue, ...currentValue };
		}, {});
	});
};
