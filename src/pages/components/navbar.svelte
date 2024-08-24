<script lang="ts">
    import { onMount } from "svelte";
    import profile from "@src/assets/image.png";
    import { circleToHide } from "./hider";
    import { navigate } from "svelte-routing";
    import { derived } from "svelte/store";

    let navbar: HTMLElement;
    let modal: HTMLDivElement;
    $: scrollY = 0;
    $: open_modal = false;

    $: {
        if (modal) {
            if (open_modal) {
                modal.style.transform = `translateY(0)`;
            } else {
                modal.style.transform = `translateY(-${window.innerHeight + 100}px)`;
            }
        }
    }

    function handleRoute(route: string) {
        circleToHide();

        setTimeout(() => {
            window.location.href = route;
        }, 500);
    }

    onMount(() => {
        modal.style.transform = `translateY(-${window.innerHeight}px)`;
        modal.style.display = "block";

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

    <button
        on:click={() => {
            open_modal = true;
        }}
        class="text-2xl md:hidden justify-self-end"
        type="button"
    >
        <i class="fa-solid fa-bars"></i>
    </button>
    <div
        bind:this={modal}
        class:pointer-events-auto={open_modal}
        class="modal hidden pointer-events-none w-screen text-[3rem] pt-2 px-4 z-10 h-screen bg-accent-1"
    >
        <button
            on:click={() => {
                open_modal = false;
            }}
            type="button"
            class="flex justify-end p-4 w-full"
        >
            <i class="fa fa-x text-3xl"></i>
        </button>
        <div class="flex p-4 font-semibold flex-col gap-8">
            <a
                on:click={() => {
                    // open_modal = false;
                }}
                href="/home">Home</a
            >
            <a
                on:click={() => {
                    open_modal = false;
                }}
                href="/projects">Projects</a
            >
            <a
                on:click={() => {
                    open_modal = false;
                }}
                href="/contact">Contact</a
            >
        </div>
    </div>
</nav>

<style>
    nav {
        font-family: "Poppins", sans-serif;
    }

    .modal {
        position: fixed;
        inset: 0;
        transition: all 1s ease;
    }
</style>
