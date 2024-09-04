<script>
	import '../../app.css';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	export let images;
	export let name;
	export let description;
	export let github;
	export let link;

	let currPos = 0;

	let info;
	let height = 0;

	import { onMount } from 'svelte';

	onMount(() => {
		height = info.offsetHeight;
		info.style.setProperty('--dynamic-top', `calc(100% - ${height}px)`);
	});
</script>

<div class="rounded w-full shadow overflow-hidden">
	<div class="flex flex-col items-center relative h-72">
		<div class={`w-full h-full bg-bg-3 flex justify-start`}>
			{#if images}
				{#each images as image, index}
					<img
						src={image}
						alt=""
						class={`w-full h-full object-cover object-top duration-500`}
						style="transform: translateX(calc(-100% * {currPos}));"
					/>
				{/each}
			{:else}
				<div class="w-full h-full bg-gray-100" />
			{/if}
		</div>

		<div
			class="opacity-100 flex flex-col gap-y-3.5 absolute md:top-[calc(100%-56px)] max-md:bottom-0 h-auto justify-end px-6 py-3.5 duration-[400ms] bg-bg-2 w-full ease-in-out transition-all info"
			bind:this={info}
		>
			<div class="text-text-3 relative flex justify-between items-center">
				<h5 class="font-extrabold">
					{name}
				</h5>
				<div class="flex gap-x-[6px] mb-0.5">
					{#if images && images.length > 1}
						{#each images as image, index}
							{#if index === currPos}
								<button
									class="rounded-[50%] w-[6px] h-[6px] aspect-square bg-palette-cyan-dark bg-clip-padding border-none"
								/>
							{:else}
								<button
									on:click={() => (currPos = index)}
									class="rounded-[50%] w-[6px] h-[6px] aspect-square bg-gray-300/50 bg-clip-padding border-none"
								/>
							{/if}
						{/each}
					{/if}
				</div>
			</div>
			<p class="text-text-3 relative opacity-100 text-sm">
				{description}
			</p>
			<div class="flex gap-x-3 font-normal">
				{#if github}
					<a
						href={github}
						class=" text-text-3 flex item-center justify-center"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Fa class=" h-[18px] text-text-3" icon={faGithub} />
					</a>
				{/if}

				{#if link}
					<a
						href={link}
						class="text-text-3 flex item-end justify-center"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Fa class="h-4 text-text-3" icon={faArrowUpRightFromSquare} />
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.info:hover {
		top: var(--dynamic-top);
	}
</style>
