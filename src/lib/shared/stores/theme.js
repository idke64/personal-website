import { browser } from '$app/environment';
import { writable } from 'svelte/store';
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

export const theme = writable(
	browser ? JSON.parse(localStorage.getItem('theme') || (prefersDarkMode ? 'dark' : 'light')) : []
);

theme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('theme', JSON.stringify(value));
	}
});

export { theme as default };
