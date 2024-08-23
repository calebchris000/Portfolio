<script lang="ts">
    import { onMount } from "svelte";
    import profile from "@src/assets/image.png";
    import { circleToHide } from "./hider";
    import { navigate } from "svelte-routing";

    let navbar: HTMLElement;
    $: scrollY = 0;

    function handleRoute(route: string) {
        circleToHide();

        setTimeout(() => {
            window.location.href = route;
        }, 500);
    }

    onMount(() => {
        function handleScroll() {
            scrollY = window.scrollY;
        }

        window.addEventListener("scroll", handleScroll);
    });
</script>

<nav
    bind:this={navbar}
    class:bg-accent-1={scrollY > 0}
    class="sticky z-10 flex transition-all font-medium md:justify-between text-[1.48vh] left-0 right-0 top-0 text-secondary px-8 xl:px-[7vh] py-[4vh] justify-end"
>
    <div class="md:flex hidden items-center gap-[2vh] text-[2vh]">
        <div class="w-[5vh] h-[5vh] rounded-full">
            <img src={profile} alt="" />
        </div>
        <span>Caleb Nwaizu</span>
    </div>
    <div class="text-[2vh] gap-[4vh] hidden md:flex items-center">
        <button on:click={() => handleRoute("/home")}>Home</button>
        <button on:click={() => handleRoute("/contact")}>Contact</button>
        <button on:click={() => handleRoute("/projects")}>Projects</button>
    </div>

    <button class="text-2xl md:hidden justify-self-end" type="button">
        <i class="fa-solid fa-bars"></i>
    </button>
</nav>

<style>
    nav {
        font-family: "Poppins", sans-serif;
    }
</style>
