export const resolveTag = (tag: string): string | undefined => {
	const tagParts = tag.split(':').pop()?.split('/');
	if (tagParts && tagParts.length > 0) {
		switch (tagParts[0]) {
			case 'ingots':
				switch (tagParts[1]) {
					case 'gold':
						return 'minecraft:gold_ingot';
					case 'iron':
						return 'minecraft:iron_ingot';
					case 'copper':
						return 'minecraft:copper_ingot';
					case 'netherite':
						return 'minecraft:netherite_ingot';
					default:
						return undefined;
				}
			case 'gems':
				switch (tagParts[1]) {
					case 'diamond':
						return 'minecraft:diamond';
					case 'quartz':
						return 'minecraft:quartz';
					case 'lapis':
						return 'minecraft:lapis_lazuli';
					case 'emerald':
						return 'minecraft:emerald';
					default:
						return undefined;
				}
			case 'storage_blocks':
				switch (tagParts[1]) {
					case 'diamond':
						return 'block.minecraft.diamond_block';
					case 'gold':
						return 'block.minecraft.gold_block';
					case 'iron':
						return 'block.minecraft.iron_block';
					case 'copper':
						return 'block.minecraft.copper_block';
					case 'netherite':
						return 'block.minecraft.netherite_block';
					case 'lapis':
						return 'block.minecraft.lapis_block';
					case 'emerald':
						return 'block.minecraft.emerald_block';
					case 'quartz':
						return 'block.minecraft.quartz_block';
					default:
						return undefined;
				}
			case 'rods':
				switch (tagParts[1]) {
					case 'blaze':
						return 'minecraft:blaze_rod';
					default:
						return undefined;
				}
			case 'nuggets':
				switch (tagParts[1]) {
					case 'gold':
						return 'minecraft:gold_nugget';
					case 'iron':
						return 'minecraft:iron_nugget';
					default:
						return undefined;
				}
			case 'fishes':
				return 'Any fish';
			case 'stone':
				return 'Any stone';
			case 'glass':
				return 'Any glass';
			case 'buttons':
				return 'Any button';
			case 'chests':
				return 'Any chest';
			case 'summon_bed':
				return 'Any bed';
			case 'seeds':
				return 'minecraft:wheat_seeds';
			case 'saplings':
				return 'Any sapling';
			case 'dirt':
				return 'Any block of Dirt'
			case 'dyes':
				switch (tagParts[1]) {
					case 'blue':
						return 'minecraft:blue_dye';
					case 'red':
						return 'minecraft:red_dye';
					case 'yellow':
						return 'minecraft:yellow_dye';
					case 'orange':
						return 'minecraft:orange_dye';
					case 'purple':
						return 'minecraft:purple_dye';
					case 'white':
						return 'minecraft:white_dye';
					case 'black':
						return 'minecraft:black_dye';
					case 'light_blue':
						return 'minecraft:light_blue_dye';
					case 'lime':
						return 'minecraft:lime_dye';
					case 'cyan':
						return 'minecraft:cyan_dye';
					case 'gray':
						return 'minecraft:gray_dye';
					case 'light_gray':
						return 'minecraft:light_gray_dye';
					case 'brown':
						return 'minecraft:brown_dye';
					case 'green':
						return 'minecraft:green_dye';
					case 'magenta':
						return 'minecraft:magenta_dye';
					case 'pink':
						return 'minecraft:pink_dye';
					default:
						return 'unknown color';
				}
			case 'ender_pearls':
				return 'minecraft:ender_pearl';
			case 'crops': {
				switch (tagParts[1]) {
					case 'nether_wart':
						return 'minecraft:nether_wart';
					default:
						return 'unknown crop';
				}
			}
			case 'dusts': {
				switch (tagParts[1]) {
					case 'redstone':
						return 'minecraft:redstone';
					case 'glowstone':
						return 'minecraft:glowstone_dust';
					default:
						return 'unknown dust';
				}
			}
			case 'logs': {
				return 'Any log';
			}
			case 'wooden_pressure_plates': {
				return 'Any wooden pressure plate';
			}
			case 'obsidian': {
				return 'Any Obsidian';
			}
		}
	}
	console.log(`Tag not found: ${tag}`);
	return undefined;
};
