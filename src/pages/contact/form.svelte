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

<form class="flex flex-col gap-[2vh]" on:submit|preventDefault={handleSubmit}>
    <input
        class="w-full p-[3vh] text-[3vh] text-primary placeholder:text-primary outline-none px-[3vh] bg-accent-3"
        placeholder="Email Address"
        type="email"
        id="email"
        bind:value={email}
        required
    />
    <textarea
        placeholder="Type your message here :)"
        class="w-full text-primary placeholder:text-primary outline-none bg-accent-3 text-[3vh] p-[3vh] resize-none h-[30vh]"
        name=""
        bind:value={message}
        id=""
    ></textarea>
    <button
        class="bg-secondary relative text-[3vh] submit text-primary p-[3vh] font-medium"
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
