<script lang="ts">
    let email: string = "";
    let password: string = "";

    function handleSubmit() {
        // Handle form submission
        console.log("Email:", email);
        console.log("Password:", password);
    }
</script>

<form class="flex flex-col gap-4" on:submit|preventDefault={handleSubmit}>
    <input
        class="w-full p-4 text-primary placeholder:text-primary outline-none px-4 bg-accent-3"
        placeholder="Email Address"
        type="email"
        id="email"
        bind:value={email}
        required
    />
    <textarea
        placeholder="Type your message here :)"
        class="w-full text-primary placeholder:text-primary outline-none bg-accent-3 p-4 resize-none h-[30vh]"
        name=""
        id=""
    ></textarea>
    <button
        class="bg-secondary relative submit text-primary p-4 font-medium"
        type="submit">Submit</button
    >
</form>

<style>
    .submit::before {
        content: "";
        mix-blend-mode: difference;
        @apply absolute inset-0 w-0 transition-all bg-white;
    }

    .submit:hover::before {
        @apply w-full;
    }
</style>
