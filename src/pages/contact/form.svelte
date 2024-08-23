<script lang="ts">
    import axios from "axios";

    let email: string = "";
    let message: string = "";
    $: status = "inactive" as "inactive" | "pending" | "success" | "failure";

    async function handleSubmit() {
        status = "pending";
        const baseurl = "https://portfolio-xetf.onrender.com";
        const response = await axios.post(`${baseurl}/sendEmail`, {
            email,
            message,
        });
        if (response.status !== 200) {
            status = "failure";
        } else {
            status = "success";
            email = "";
            message = "";
        }
    }

    $: {
        if (status !== "pending") {
            setTimeout(() => {
                status = "inactive";
            }, 2000);
        }
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
        bind:value={message}
        id=""
    ></textarea>
    <button
        class="bg-secondary relative submit text-primary p-4 font-medium"
        type="submit"
        disabled={status === "pending"}
    >
        {#if status === "pending"}
            Sending...
        {:else if status === "success"}
            Sent!
        {:else if status === "failure"}
            Failed. Try Again?
        {:else}
            Submit
        {/if}
    </button>
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
