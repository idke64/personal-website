<script>
	import '../app.css';
	import { Blob, ProjectCard } from '$lib';
	import { projects } from '$lib';
</script>

<section class="w-full h-[calc(100vh-100px)] pb-8" id="top">
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
						studying Computer Science and I like pretty websites.
					</div>
				</div>
			</div>
			<Blob />
		</div>
	</div>
</section>
<hr class="margins mb-4" />

<section class="py-8" id="projects">
	<div class="margins flex flex-col gap-y-6 items-center">
		<div class="w-full flex flex-col gap-y-2">
			<div class="relative w-full flex items-center justify-start gap-x-3">
				<h3>Projects</h3>
				<div
					class="w-0 h-0 border-l-[10px] border-l-transparent border-b-[15px] border-r-[10px] border-r-transparent border-b-palette-cyan max-sm:border-l-[8px] max-sm:border-b-[12px] max-sm:border-r-[8px] mb-0.5 rotate-90 mt-2"
				/>
			</div>
			<p>Some projects I did. Hover for more info.</p>
		</div>

		<div class="grid grid-cols-2 max-md:grid-cols-1 grid-rows-1 gap-8">
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
