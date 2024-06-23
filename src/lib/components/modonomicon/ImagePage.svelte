<script lang="ts">
	import FormattedLabel from '$lib/components/modonomicon/FormattedLabel.svelte';
	import { getTexture } from '$lib/textures';
	import { getFileName } from '$lib/utils/fileName';
	import { texturesStore } from '$lib/stores/fileStore';

	export let text: string;
	export let title: string;
	export let images: Array<string>;

	$: mappedImages = images
		? images.map((image) => getTexture(`minejago:${getFileName(image)}`, $texturesStore))
		: [];
</script>

{#if title}
	<h4 class="mb-3">
		<FormattedLabel label={title} />
	</h4>
{/if}
<p class="text-left max-w-fit textblock">
	<FormattedLabel label={text} />
</p>
{#each mappedImages as image, key}
	<img src={image} alt={images[key]} />
{/each}
