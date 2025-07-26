<script>
	import '../app.css';
	import { Blob, ProjectCard, ExperienceCard } from '$lib';
	import { projects } from '$lib';
	import { experiences } from '$lib';

	const scrollToProjects = () => {
		window.scrollTo({
			top: document.getElementById('projects').offsetTop - 60,
			behavior: 'smooth'
		});
	};

	const scrollToExperiences = () => {
		window.scrollTo({
			top: document.getElementById('experiences').offsetTop - 60,
			behavior: 'smooth'
		});
	};
</script>

<section class="w-full h-[calc(100vh-100px+62px)] pb-8" id="top">
	<div
		class="absolute right-0 -z-10 h-full w-2/3 bg-[linear-gradient(to_right,_grey_1px,_transparent_1px),_linear-gradient(to_bottom,_grey_1px,_transparent_1px)] bg-[length:20px_20px] max-lg:w-full"
	>
		<div class="to-bg-1 from-bg-1 via-bg-1/50 absolute inset-0 bg-gradient-to-r"></div>
		<div class="to-bg-1 from-bg-1 via-bg-1/50 absolute inset-0 bg-gradient-to-b"></div>
	</div>
	<div class="margins h-full flex items-center">
		<div class="flex justify-between gap-x-20 items-center">
			<div class="flex flex-col gap-y-4 w-1/2 max-lg:w-full">
				<div class="flex justify-start gap-x-2">
					<h1 class="text-transparent bg-clip-text gradient-text animate-gradient-text">
						Hi, I&apos;m Andy
					</h1>
					<h1 class="hover:animate-wiggle cursor-default">👍</h1>
				</div>

				<div class="flex flex-col gap-y-2">
					<div class="text-text-3">
						I am currently a student at{' '}
						<a href="/" class="link">Georgia Tech</a>
						{' '}
						studying Computer Science and I like to build things.
					</div>
				</div>
			</div>
			<Blob />
		</div>
	</div>
</section>
<hr class="margins mb-4" />

<section class="py-8" id="experiences">
	<div class="margins flex flex-col gap-y-6 items-center">
		<div class="w-full flex flex-col gap-y-2">
			<div class="gap-y-3 flex flex-col">
				<button class="self-start" on:click={scrollToExperiences}
					><h3 class="hover:text-palette-green duration-300">Experiences</h3></button
				>
				<div class="w-8 h-1 bg-palette-green" />
			</div>
		</div>

		<div class="flex flex-col gap-8 w-full">
			{#each experiences as experience}
				<ExperienceCard
					images={experience.images}
					name={experience.name}
					title={experience.title}
					from={experience.from}
					to={experience.to}
					description={experience.description}
				/>
			{/each}
		</div>
	</div>
</section>

<section class="py-8" id="projects">
	<div class="margins flex flex-col gap-y-6 items-center">
		<div class="w-full flex flex-col gap-y-2">
			<div class="gap-y-3 flex flex-col">
				<button class="self-start" on:click={scrollToProjects}
					><h3 class="hover:text-palette-cyan duration-300">Projects</h3></button
				>
				<div class="w-8 h-1 bg-palette-cyan" />
			</div>
		</div>

		<div class="grid grid-cols-2 w-full max-sm:grid-cols-1 grid-rows-1 gap-8">
			{#each projects as project}
				<ProjectCard
					images={project.images}
					name={project.name}
					description={project.description}
					github={project.github}
					link={project.link}
				/>
			{/each}
		</div>
	</div>
</section>
