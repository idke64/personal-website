<script>
	import '../../app.css';
	import Fa from 'svelte-fa';
	import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
</script>

<footer class="w-full">
	<div class="flex gap-y-5 mb-1 justify-end items-center px-2 max-md:items-center max-md:px-0">
		<div class="flex gap-x-4 pt-12">
			<a href={'https://github.com/idke64/'} target="_blank" rel="noopener noreferrer">
				<Fa class="text-text-3 hover:text-text-1 duration-200" icon={faGithubAlt} size="lg" />
			</a>
			<a
				href={'https://www.linkedin.com/in/andy-y-392713279/'}
				target="_blank"
				rel="noopener noreferrer"
			>
				<Fa class=" text-text-3 hover:text-text-1 duration-200" icon={faLinkedinIn} size="lg" />
			</a>
			<a href={'mailto:deliciousbrain42@gmail.com'} target="_blank" rel="noopener noreferrer">
				<Fa class=" text-text-3 hover:text-text-1 duration-200" icon={faEnvelope} size="lg" />
			</a>
		</div>
	</div>
</footer>
