<script lang="ts">
    import { onMount } from "svelte";
    import animated from "@src/assets/animated_arrow.gif";
    import fancy_arrow from "@src/assets/arrow.webp";

    import { circleToShow } from "../components/hider";
    import Navbar from "../components/navbar.svelte";
    import Timeline from "./timeline.svelte";
    $: show_tip = false;
    $: hide_arrow = false;
    onMount(() => {
        const current = localStorage.getItem("currentPath");

        if (current !== "/projects") {
            circleToShow();
            localStorage.setItem("currentPath", "/projects");
        }
        const handleScroll = () => {
            if (window.scrollY > 100) {
                hide_arrow = true;
            } else {
                hide_arrow = false;
            }
        };
        window.addEventListener("scroll", handleScroll);

        const tip = localStorage.getItem("showTip");

        if (!tip) {
            localStorage.setItem("showTip", JSON.stringify(false));
        } else {
            const parsed = JSON.parse(tip);
            show_tip = parsed;
        }

        setTimeout(() => {
            show_tip = true;
            localStorage.setItem("showTip", JSON.stringify(true));
        }, 10000);
    });
</script>

<main
    class="relative overflow-hidden flex flex-col space-y-32 text-secondary z-10 projects"
>
    <Navbar />
    <section
        style="margin-top: 3.7vh;"
        class="xl:px-[7vh] px-4 flex justify-between items-start gap-32"
    >
        <div class="w-full xl:max-w-[60vw] flex flex-col gap-[4vh]">
            <span
                class="uppercase leading-tight text-4xl xl:text-[12.26vh] font-semibold text-secondary"
                >MY PROJECTS TIMELINE</span
            >
            <span
                class="leading-loose xl:max-w-[50vw] xl:text-[3.5vh] xl:uppercase xl:leading-[7vh] my-[3.7vh]"
            >
                Explore my project journey through the years. This timeline
                showcases my work in reverse chronological order, with the most
                recent projects appearing first. Scroll through to see how my
                skills and interests have evolved over time.
            </span>
        </div>
        <div class="xl:block hidden" style="position: relative;">
            <div class="shortcuts">
                <div>
                    <span style="font-weight: bold; color: var(--accent-color);"
                        >H</span
                    >
                    <span style="text-wrap: nowrap;">Home</span>
                </div>

                <div>
                    <span style="font-weight: bold; color: var(--accent-color);"
                        >W</span
                    >
                    <span style="text-wrap: nowrap;">My Works</span>
                </div>

                <div>
                    <span style="font-weight: bold; color: var(--accent-color);"
                        >R</span
                    >
                    <span style="text-wrap: nowrap;">Download Resume</span>
                </div>
            </div>
            {#if !show_tip}
                <div class="animated_arrow">
                    <img
                        class="arrow"
                        style="width: 100%"
                        src={animated}
                        alt=""
                    />
                    <span style="text-wrap: nowrap; font-size: 1.2vw;"
                        >Use keyboard shortcuts</span
                    >
                </div>
            {/if}
        </div>
        <button
            type="button"
            on:click={() => {
                window.scrollTo({
                    top: window.scrollY + 1000,
                    behavior: "smooth",
                });
            }}
            class:opacity-0={hide_arrow}
            class="fixed select-none transition-all bottom-0 left-[50%] w-20 -translate-x-[50%]"
        >
            <img class="w-full" src={fancy_arrow} alt="" />
        </button>
    </section>
    <div class="">
        <Timeline />
    </div>
</main>

<style>
    :root {
        overflow: auto !important;
    }
    .projects {
        font-family: "Poppins", sans-serif;
    }

    .shortcuts {
        display: flex;
        flex-direction: column;
        border: 0.1vh solid var(--accent-color-2);
        height: fit-content;
        background-color: var(--accent-color-1);
        opacity: 0.5;
        transition: all 300ms ease;
        user-select: none;
    }

    .animated_arrow {
        width: 10vw;
        position: absolute;
        top: 40vh;
        display: flex;
        gap: 2vw;
        flex-direction: column;
        border: none !important;
        opacity: 1;
    }

    .arrow {
        transform: rotate(120deg);
    }
    .shortcuts:hover {
        opacity: 1;
    }
    .shortcuts div {
        display: flex;
        font-size: 2vh;
        font-weight: 500;
        border-bottom: 0.1vh solid var(--accent-color-2);
        gap: 2vh;
        padding: 2.5vh;
    }

    .shortcuts div:last-child {
        border: none;
    }
</style>
