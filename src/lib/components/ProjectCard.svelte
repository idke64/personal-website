<script>
	import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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

<div class="rounded w-full shadow overflow-hidden hover:scale-105 duration-300">
	<div class="flex flex-col items-center relative h-72">
		<div class="w-full h-full bg-bg-3 flex justify-start relative">
			{#if images}
				{#each images as image, index}
					<img
						src={image}
						alt=""
						class={`w-full absolute h-[99%] object-cover object-top duration-500 rounded-b`}
						style="left: calc(100% * {index - currPos});"
					/>
				{/each}
			{:else}
				<div class="w-full h-full bg-gray-100" />
			{/if}
		</div>
		{#if images && images.length > 1}
			<div
				class="absolute top-2 bg-bg-1 hover:opacity-100 opacity-40 duration-200 right-2 flex rounded p-1"
			>
				<button
					on:click={() =>
						(currPos = (currPos - (1 % images.length) + images.length) % images.length)}
					class="h-6 hover:bg-text-2/10 aspect-square duration-100 flex items-center justify-center text-text-1 rounded-sm"
					><Fa size="sm" icon={faChevronLeft} /></button
				>
				<button
					on:click={() => (currPos = (currPos + 1) % images.length)}
					class="h-6 hover:bg-text-2/10 aspect-square duration-100 flex items-center justify-center text-text-1 rounded-sm"
					><Fa size="sm" icon={faChevronRight} /></button
				>
			</div>
		{/if}
		<div
			class="opacity-100 flex flex-col gap-y-3.5 absolute sm:top-[calc(100%-60px)] max-sm:bottom-0 h-auto justify-end px-6 py-3.5 duration-[400ms] bg-bg-2 w-full ease-in-out transition-all info"
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
					<a href={github} class="link" target="_blank" rel="noopener noreferrer"> Github </a>
				{/if}

				{#if link}
					<a href={link} class="link" target="_blank" rel="noopener noreferrer">Link</a>
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
