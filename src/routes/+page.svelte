<script lang="ts">
	import { applyAction, enhance } from '$app/forms';

    let input: HTMLInputElement;
    let input2: HTMLInputElement;
</script>



<h1>Submitting the form should focus the input and open the virtual keyboard</h1>


<h2>form 1 (not working)</h2>
<form method="POST" use:enhance={() => {
    // input.focus();
    return async ({ result }) => {
        input.focus();
        await applyAction(result);
    };
}}>
    <label for="input"><i>Submitting this only shows the focus outline</i></label>
    <input id="input" bind:this={input} type="text" name="name" />
    <button>Submit!</button>
</form>

<br />

<h2>form 2 (working)</h2>
<form method="POST" use:enhance={() => {
    input2.focus();
    return async ({ result }) => {
        //input2.focus();
        await applyAction(result);
    };
}}>
    <label for="input-2"><i>Submitting this opens the virtual keyboard</i></label>
    <input id="input-2" bind:this={input2} type="text" name="name" />
    <button>Submit!</button>
</form>

<style>
    label,input,button {
        display: block;
        font-size: 16px;
    }
</style>
