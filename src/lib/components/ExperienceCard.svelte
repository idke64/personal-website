<script>
	export let images;
	export let name;
	export let from;
	export let to;
	export let description;
	export let title;
</script>

<div class="w-full bg-bg-2 rounded shadow hover:scale-105 duration-300">
	<div class="flex gap-x-6 h-36 py-3.5 pl-3.5 pr-5">
		<div class="h-full aspect-square flex items-center justify-center p-2 rounded">
			<img src={images[0]} alt="" class="object-contain w-full h-full" />
		</div>
		<div class="flex flex-col gap-y-3.5 text-text-3 w-full">
			<div class="flex justify-between w-full">
				<div class="flex flex-col">
					<h5 class="font-extrabold">
						{name}
					</h5>
					<p class="font-medium">
						{title}
					</p>
				</div>
				<div>
					<span class="text-sm text-text-2">
						{from} – {to}
					</span>
				</div>
			</div>

			<p class="text-text-3 text-sm">
				{description}
			</p>
		</div>
	</div>
</div>
