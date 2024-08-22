<script lang="ts">
    import { onMount } from "svelte";
    import download from "@src/assets/download.svg";
    import animated from "@src/assets/animated_arrow.gif";
    import Navbar from "./components/navbar.svelte";
    import { circleToHide, circleToShow } from "./components/hider";
    import { navigate } from "svelte-routing";

    let home: HTMLElement;
    $: show_tip = false;

    function handleDownloadResume() {
        const link = document.createElement("a");
        link.href =
            "https://raw.githubusercontent.com/calebchris000/Portfolio/main/src/lib/resume.pdf";
        link.download = "Resume - Caleb Nwaizu.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function handleKeyPress(e: KeyboardEvent) {
        e.preventDefault();
        const { key } = e;
        if (key.toUpperCase() === "R") {
            handleDownloadResume();
        } else if (key.toUpperCase() === "W") {
            circleToHide();
        } else if (key.toUpperCase() === "M") {
            circleToHide();
            setTimeout(() => {
                navigate("/about");
            }, 500);
        }
    }

    onMount(() => {
        const current = localStorage.getItem("currentPath");

        if (current !== "/home") {
            circleToShow();
            localStorage.setItem("currentPath", "/home");
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

    // window.addEventListener("keypress", handleKeyPress);
</script>

<main bind:this={home} class="home">
    <Navbar />
    <section class="content px-8 xl:px-[7vh]">
        <div class="text flex flex-col gap-[4vh] items-start text-start">
            <span
                class="greet text-wrap text-4xl uppercase xl:text-[12.26vh] font-semibold leading-tight"
                >Hey, I'm CALEB NWAIZU</span
            >
            <span
                class="leading-loose xl:max-w-[50vw] xl:text-[3.5vh] xl:uppercase xl:leading-[7vh] my-[3.7vh]"
                >A professional Frontend and Backend Web Developer with 2+ years
                of experience. Developing services ranging from simple websites
                to functional and sophisticated system.</span
            >
            <div class="w-full flex flex-col md:flex-row gap-[2vh]" style="">
                <button
                    on:click={() => {
                        circleToHide();

                        setTimeout(() => {
                            navigate("/projects");
                        }, 500);
                    }}
                    class="button relative w-full flex justify-between px-[6vh] items-center text-[2.4vh] border p-[3vh]"
                    type="button"
                >
                    <span>See My Works!</span>
                    <i class="fa-solid fa-folder"></i>
                </button>
                <button
                    on:click={handleDownloadResume}
                    class="button relative w-full flex justify-between px-[6vh] items-center text-[2.4vh] p-[3vh]"
                    type="button"
                >
                    <figure>Download My Resume</figure>
                    <i class="fa-solid fa-download"></i>
                </button>
            </div>
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
    .home {
        position: relative;
        user-select: none;
        z-index: 10;
    }

    .content {
        margin-top: 3.7vh;
        color: var(--secondary-color);
        display: flex;
        justify-content: space-between;
        gap: 30vw;

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

    .greet {
        font-family: "Manrope", "Poppins", sans-serif;
    }

    .text button {
        color: var(--secondary-color);
        font-family: "Poppins", sans-serif;
    }

    .text button::before {
        content: "";
        position: absolute;
        inset: 0;
        height: 100%;
        width: 0;
        mix-blend-mode: difference;
        background-color: var(--secondary-color);
        animation: shrink 0.3s ease-out forwards;
    }

    @keyframes shrink {
        from {
            width: 100%;
        }
        to {
            width: 0;
        }
    }

    .text button:hover::before {
        animation: expand 0.3s ease-out forwards;
        width: 0;
    }

    @keyframes expand {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }

    .text button:last-child {
        background-color: var(--secondary-color);
        color: var(--primary-color);
    }
</style>
