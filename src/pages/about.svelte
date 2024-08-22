<script lang="ts">
    import { onMount } from "svelte";
    import { circleToShow } from "./components/hider";
    import Navbar from "./components/navbar.svelte";

    onMount(() => {
        const current = localStorage.getItem("currentPath");
        if (current !== "/about") {
            circleToShow();
            localStorage.setItem("currentPath", "/about");
        }
    });
</script>

<main class="fixed z-10 left-0 right-0">
    <Navbar />
    <section class="px-[7vh]">
        <span class="uppercase text-[12.26vh] font-semibold text-secondary"
            >About Me</span
        >
    </section>
</main>
