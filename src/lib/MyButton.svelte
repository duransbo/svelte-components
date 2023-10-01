<svelte:options customElement="w-button" />

<script lang="ts">
	export let text: string = "";
</script>

<button on:click>{ text }</button>