<script>
	import { Stage } from "svelte-stage";
	import Button from "$lib/components/Button.svelte";

	const text = `lorem ipsum`;
</script>

<Stage component="Button">
	<Button>{ text }</Button>
</Stage>
