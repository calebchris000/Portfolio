<script lang="ts">
    import { onMount } from "svelte";
    import Navbar from "../components/navbar.svelte";
    import Form from "./form.svelte";
    import { circleToShow } from "../components/hider";

    function handleContact(medium: string) {
        switch (medium) {
            case "twitter":
                window.open("https://twitter.com/calebchris000", "_blank");
                break;
            case "whatsapp":
                window.open("https://wa.me/+2348130078112", "_blank");
                break;
            case "phone":
                window.open("tel:+2347039820933", "_blank");
                break;
            case "telegram":
                window.open("https://t.me/calebchris000", "_blank");
                break;
            default:
                console.log("Invalid medium");
        }
    }

    onMount(() => {
        const current = localStorage.getItem("currentPath");

        if (current !== "/contact") {
            circleToShow();
            localStorage.setItem("currentPath", "/contact");
        }
    });
</script>

<main class="relative z-10 home">
    <Navbar />

    <section
        class="content gap-[4vh] pb-10 xl:pb-0 xl:gap-[30vw] flex xl:flex-row flex-col px-8 xl:px-[7vh] text-secondary"
    >
        <div class="flex flex-col gap-[3vh] text-lg">
            <span
                class="greet text-wrap text-4xl uppercase xl:text-[12.26vh] font-semibold leading-tight"
                >CONTACT ME</span
            >
            <span class="uppercase text-[3vh]"
                >Get in touch via email by completing the form below.</span
            >

            <Form />
        </div>
        <div
            class="border h-[40vh] flex flex-col border-accent-2 w-full xl:w-[16vw]"
        >
            <button
                on:click={() => handleContact("twitter")}
                class="bg-accent-1 h-full border-b border-accent-2 transition-all contact text-secondary font-medium ps-[3vh] w-full flex justify-start items-center gap-4"
            >
                <i class="text-[2.5vh] fab fa-twitter"></i>
                <span class="text-[2.1vh]">Twitter </span>
            </button>
            <button
                on:click={() => handleContact("whatsapp")}
                class="bg-accent-1 h-full border-b border-accent-2 transition-all contact text-secondary font-medium ps-[3vh] w-full flex justify-start items-center gap-4"
            >
                <i class="text-[2.5vh] fab fa-whatsapp"></i>
                <span class="text-[2.1vh]">WhatsApp </span>
            </button>
            <button
                on:click={() => handleContact("phone")}
                class="bg-accent-1 h-full border-b border-accent-2 transition-all contact text-secondary font-medium ps-[3vh] w-full flex justify-start items-center gap-4"
            >
                <i class="text-[2.5vh] fas fa-phone"></i>
                <span class="text-[2.1vh]">Phone </span>
            </button>
            <button
                on:click={() => handleContact("telegram")}
                class="bg-accent-1 h-full border-accent-2 transition-all contact text-secondary font-medium ps-[3vh] w-full flex justify-start items-center gap-4"
            >
                <i class="text-[2.5vh] fab fa-telegram"></i>
                <span class="text-[2.1vh]">Telegram </span>
            </button>
        </div>
    </section>
</main>

<style>
    .home {
        font-family: "Poppins", sans-serif;
    }
    .content {
        margin-top: 3.7vh;
        color: var(--secondary-color);
        display: flex;
        justify-content: space-between;
    }

    .content:hover {
        @apply opacity-100;
    }

    .contact:hover {
        @apply bg-accent-2;
    }
</style>
