<script lang="ts">
	import { onMount } from 'svelte';
	import anime from 'animejs';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

	let popupSettings: PopupSettings = {
		event: 'hover',
		placement: 'bottom',
		target: 'bio-popup'
	};

	enum StateTypes {
		FORWARDS = 'FORWARDS',
		BACKWARDS = 'BACKWARDS',
		WAITING = 'WAITING'
	}

	function getType(newState: StateTypes) {
		switch (newState) {
			case 'FORWARDS':
			case 'BACKWARDS':
				return 'run';
			default:
				return 'sitting';
		}
	}

	let state = 'none';
	let starbuncles = [
		{
			name: 'Bailey',
			adopter: 'Ars Nouveau Team',
			bio: 'Ars Nouveau is a passion project brought to life by hundreds of contributions from the community. We hope you enjoy this Rainbow-buncle as much as we enjoy making this mod! Thanks for playing!"',
			color: 'rainbow'
		}
	];
	$: src = ``;
	let starbuncle = starbuncles[0];

	function setState(newState: StateTypes) {
		state = newState;
		const type = getType(newState);
		const color = starbuncle.color === 'rainbow' ? 'white' : starbuncle.color;
		src = `/runningbuncle/starbuncle_${type}_${color}.${type === 'run' ? 'gif' : 'png'}`;
	}

	setState(StateTypes.FORWARDS);

	function getRandomStarbuncleIndex() {
		return Math.floor(Math.random() * starbuncles.length);
	}

	onMount(() => {
		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			anime
				.timeline({
					targets: '.buncle-box',
					loop: true,
					easing: 'linear'
				})
				.add({
					translateX: '79%',
					duration: 3500,
					changeBegin(anim) {
						setState(StateTypes.FORWARDS);
					}
				})
				.add({
					duration: 5000,
					changeBegin(anim) {
						setState(StateTypes.WAITING);
					}
				})
				.add({
					translateX: '-25%',
					endDelay: 1000,
					duration: 3500,
					changeBegin(anim) {
						setState(StateTypes.BACKWARDS);
					},
					changeComplete(anim) {
						starbuncle = starbuncles[getRandomStarbuncleIndex()];
					}
				});
		}

		fetch('https://raw.githubusercontent.com/baileyholl/Ars-Nouveau/main/supporters.json')
			.then((response) => response.json())
			.then((data) => {
				starbuncles.push(...data.starbuncleAdoptions);
			});
	});
</script>

<div class="buncle-container" use:popup={popupSettings}>
	<div class="buncle-name flex flex-col items-center">
		<p>{starbuncle.name}</p>
		<p class="text-xs text-gray-500">{starbuncle.adopter}</p>
	</div>
	<div class="buncle-box bg-surface-100-800-token w-full">
		<img
			{src}
			alt="animated running Starbuncle"
			class="buncle"
			class:mirrored={state === 'BACKWARDS'}
			class:rainbow={starbuncle.color === 'rainbow'}
		/>
	</div>
</div>

<div data-popup="bio-popup" class="card variant-filled-primary p-4 max-w-lg">
	{starbuncle.bio}
	<div class="arrow variant-filled-secondary" />
</div>

<style>
	.buncle-container {
		position: relative;
		overflow: hidden;
		height: 50px;
		max-width: 800px;
		flex-grow: 1;
	}

	.buncle-box {
		position: absolute;
		height: 50px;
	}

	.buncle {
		height: 50px;
		margin-left: -3px;
	}

	.buncle-name {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.mirrored {
		transform: scaleX(-1);
		margin-left: -7px;
	}

	.rainbow {
		animation-name: rainbow;
		animation-duration: 15s;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}

	@keyframes rainbow {
		0% {
			filter: sepia() saturate(2.25) hue-rotate(0deg);
		}
		100% {
			filter: sepia() saturate(2.25) hue-rotate(360deg);
		}
	}
</style>
