import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'My Svelte App'
	}
});

export default app;