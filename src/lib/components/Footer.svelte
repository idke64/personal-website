<script>
	import '../../app.css';
	import Fa from 'svelte-fa';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
</script>

<footer class="w-full">
	<div
		class="flex gap-y-5 my-4 justify-end items-center px-2 max-md:items-center max-md:px-0 relative"
	>
		<div class="flex gap-x-4 bg-bg-1 px-4">
			<a href={'https://github.com/idke64/'} target="_blank" rel="noopener noreferrer">
				<Fa
					class="text-text-3 hover:text-text-1 hover:animate-wiggle duration-200"
					icon={faGithub}
					size="lg"
				/>
			</a>
			<a href={'https://www.linkedin.com/in/andy9999/'} target="_blank" rel="noopener noreferrer">
				<Fa
					class=" text-text-3 hover:text-text-1 hover:animate-wiggle duration-200"
					icon={faLinkedin}
					size="lg"
				/>
			</a>
			<a href={'mailto:andyye9999@gmail.com'} target="_blank" rel="noopener noreferrer">
				<Fa
					class=" text-text-3 hover:text-text-1 hover:animate-wiggle duration-200"
					icon={faEnvelope}
					size="lg"
				/>
			</a>
		</div>
	</div>
</footer>
