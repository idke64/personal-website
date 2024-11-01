<script>
	import '../../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import Fa from 'svelte-fa';
	import { faMoon, faSmile } from '@fortawesome/free-regular-svg-icons';
	import { faSun } from '@fortawesome/free-regular-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';

	let theme = 'light';

	let scrollPosition = 0;

	let scrollMaxY = 0;

	let width = 0;

	$: {
		width = `${100 - (scrollPosition / scrollMaxY) * 100}%`;
		console.log(scrollPosition + ' ' + scrollMaxY);
	}

	onMount(() => {
		scrollMaxY = document.documentElement.scrollHeight - window.innerHeight;

		window.addEventListener('scroll', () => {
			scrollPosition = window.scrollY;
		});
		if (localStorage.getItem('theme') === null) {
			const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
			localStorage.setItem('theme', prefersDarkMode ? 'dark' : 'light');
		}
		theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
			document.documentElement.classList.remove('light');
		} else {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
		}
	});

	let firstSpin = false;
	let secondSpin = false;

	const handleSpinTransition = () => {
		if (firstSpin) {
			firstSpin = false;
			if (theme === 'dark') {
				theme = 'light';
				document.documentElement.classList.add('light');
				document.documentElement.classList.remove('dark');
				localStorage.setItem('theme', 'light');
			} else {
				theme = 'dark';
				document.documentElement.classList.add('dark');
				document.documentElement.classList.remove('light');
				localStorage.setItem('theme', 'dark');
			}

			secondSpin = true;
		} else {
			secondSpin = false;
		}
	};

	let route = $page.url.pathname;

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	const scrollToProjects = () => {
		window.scrollTo({
			top: document.getElementById('projects').offsetTop - 60,
			behavior: 'smooth'
		});
	};
</script>

<nav class="w-full h-[70px] sticky bg-bg-2/75 backdrop-blur-sm top-0 z-50">
	<hr
		class={`absolute bottom-0 duration-300 w-full  ${
			scrollPosition > 0 ? 'scale-x-100 origin-center' : 'scale-x-0'
		}`}
	/>
	<div class="gradient-bg-r h-[3px] w-full right-0 top-0 absolute">
		<div style="width: {width}" class="bg-bg-2 h-[3px] w-full right-0 top-0 z-50 absolute" />
	</div>
	<div class="h-full flex nav-margins items-center">
		<div class="flex justify-between w-full">
			<div class="flex gap-x-1">
				{#if route != '/'}
					<a
						href={'/'}
						class="text-text-3 flex items-center justify-center rounded duration-200 h-11 w-11 relative group cursor-pointer"
					>
						<div
							class="rounded-md text-3xl text-text-3 ease-in-out duration-500 hover:-rotate-180"
							type="button"
						>
							<Fa class="hover:-rotate-180" icon={faSmile} />
						</div>
					</a>
				{:else}
					<button
						on:click={scrollToTop}
						class="text-text-3 flex items-center justify-center rounded duration-200 h-11 w-11 relative group cursor-pointer"
					>
						<div
							class="rounded-md text-3xl text-text-3 hover:-rotate-180 ease-in-out duration-500"
							type="button"
						>
							<Fa icon={faSmile} />
						</div>
					</button>
				{/if}
			</div>

			<div class="flex gap-x-4 items-center">
				<button
					on:click={scrollToProjects}
					class={`navlink hover:after:opacity-100 after:duration-200 hover:after:rotate-0 after:opacity-0 after:absolute after:-bottom-3 after:left-[calc(50%-4.5px)] after:w-0 after:h-0 after:border-l-[6px] after:border-l-transparent after:border-b-[9px] after:border-b-palette-cyan after:border-r-[6px] after:border-r-transparent after:rotate-180 ${
						route === '/projects' && 'after:opacity-100 after:rotate-180 bg-[#f1f1f1]'
					}`}
				>
					Projects
				</button>

				<a
					href="/resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class={`navlink hover:after:opacity-100 after:duration-200 hover:after:rotate-0 after:opacity-0 after:absolute after:-bottom-3 after:left-[calc(50%-4.5px)] after:w-0 after:h-0 after:border-l-[6px] after:border-l-transparent after:border-b-[9px] after:border-b-palette-magenta after:border-r-[6px] after:border-r-transparent after:rotate-180 ${
						route === '/contact' && 'after:opacity-100 after:rotate-180 bg-[#f1f1f1]'
					}`}
				>
					Resume
				</a>
				<button
					on:click={() => {
						if (!firstSpin && !secondSpin) {
							firstSpin = true;
						}
						console.log(firstSpin);
					}}
					on:animationend={handleSpinTransition}
					class="p-2 flex justify-center rounded hover:bg-text-3/10 duration-200"
				>
					<Fa
						icon={theme === 'dark' ? faSun : faMoon}
						class={`text-text-3 aspect-square ${
							(firstSpin && 'animate-spin-slow-1') || (secondSpin && 'animate-spin-slow-2')
						} text-themeicon duration-200 `}
						size="1.2x"
					/>
				</button>
				<a
					href="https://github.com/idke64/personal-website"
					target="_blank"
					rel="noopener noreferrer"
					class="ml-2 btn-primary h-9 gap-x-1.5"><Fa icon={faGithub} />View on Github</a
				>
			</div>
		</div>
	</div>
</nav>
