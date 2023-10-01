<script>
	import { Stage } from "svelte-stage";
	import MyButton from "../lib/MyButton.svelte";

	const text = `It's Works`;
</script>

<Stage component="MyButton" props={{ text }} events={{ click: undefined }}>
	<MyButton { text } />
</Stage>
