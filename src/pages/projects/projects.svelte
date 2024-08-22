<script lang="ts">
    import { onMount } from "svelte";
    import animated from "@src/assets/animated_arrow.gif";

    import { circleToShow } from "../components/hider";
    import Navbar from "../components/navbar.svelte";
    $: show_tip = false;
    onMount(() => {
        const current = localStorage.getItem("currentPath");
        if (current !== "/projects") {
            circleToShow();
            localStorage.setItem("currentPath", "/projects");
        }
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

<main class="fixed text-secondary z-10 left-0 right-0 projects">
    <Navbar />
    <section
        style="margin-top: 3.7vh;"
        class="px-[7vh] flex justify-between items-start gap-32"
    >
        <div class="w-full max-w-[60vw] flex flex-col gap-[4vh]">
            <span
                class="uppercase leading-tight text-[12.26vh] font-semibold text-secondary"
                >MY PROJECTS TIMELINE</span
            >
            <span
                class="eading-loose xl:max-w-[50vw] xl:text-[3.5vh] xl:uppercase xl:leading-[7vh] my-[3.7vh]"
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
    </section>
</main>

<style>
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
