<script>
	import { Stage } from "svelte-stage";
	import Card from "$lib/components/Card.svelte";

	const title = `lorem ipsum`;
</script>

<Stage component="Card">
	<Card { title } />
</Stage>
