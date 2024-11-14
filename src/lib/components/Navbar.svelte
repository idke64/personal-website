<script>
	import '../../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	import Fa from 'svelte-fa';
	import { faMoon, faSmile } from '@fortawesome/free-regular-svg-icons';
	import { faSun } from '@fortawesome/free-regular-svg-icons';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';

	let theme = 'light';

	let scrollPosition = 0;

	let scrollMaxY = 0;

	let width = 0;

	$: if (browser) {
		scrollMaxY = document.documentElement.scrollHeight - window.innerHeight;
		width = `${100 - (Math.min(Math.floor(scrollPosition), scrollMaxY) / scrollMaxY) * 100}%`;
	}

	onMount(() => {
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

<div class="flex justify-center w-full sticky top-0 z-50">
	<div class="gradient-bg-r h-[3px] w-full right-0 top-0 absolute z-50">
		<div style="width: {width}" class="bg-bg-2 h-[3px] w-full right-0 top-0 z-50 absolute" />
	</div>
	<nav
		class={`${scrollPosition > 16 ? 'nav-margins mt-4 rounded border' : 'w-full'} h-[62px] bg-bg-2/75 backdrop-blur-sm z-49 duration-200`}
	>
		<div class="h-full flex items-center px-6">
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
					<button on:click={scrollToProjects} class="navlink"> Projects </button>

					<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" class="navlink">
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
						class="ml-2 btn-primary h-9 gap-x-1.5 px-3"><Fa icon={faGithub} />View on Github</a
					>
				</div>
			</div>
		</div>
	</nav>
</div>
