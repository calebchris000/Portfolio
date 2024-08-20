<script lang="ts">
    import { onMount } from "svelte";
    import download from "@src/assets/download.svg";
    import animated from "@src/assets/animated_arrow.gif";

    let home: HTMLElement;
    $: show_tip = false;

    onMount(() => {
        setTimeout(() => {
            home.style.transform = "scale(1)";
        });

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

<main bind:this={home} class="home">
    <nav class="navbar">
        <div class="identity">
            <span></span>
            <span>Caleb Nwaizu</span>
        </div>
        <div class="nav_links">
            <span><a href="#home">Home</a></span>
            <span><a href="#about">About Me</a></span>
            <span><a href="#projects">Projects</a></span>
        </div>
    </nav>
    <section class="content">
        <div class="text">
            <span class="greet">Hey, I'm CALEB NWAIZU</span>
            <span
                >A professional Frontend and Backend Web Developer with 2+ years
                of experience. From simple websites to functional and
                sophisticated system.</span
            >
            <div style="display: flex; gap: 1rem;">
                <button
                    style="display: flex; align-items: center;gap: 2rem;"
                    class="button"
                    type="button"
                >
                    <span>See My Works!</span>
                    <i class="fa-solid fa-folder"></i>
                </button>
                <button
                    style="display: flex; align-items: center;gap: 2rem;"
                    class="button"
                    type="button"
                >
                    <figure>Download My Resume</figure>
                    <i class="fa-solid fa-download"></i>
                </button>
            </div>
        </div>

        <div style="position: relative;">
            <div class="shortcuts">
                <div>
                    <span style="font-weight: bold; color: var(--accent-color);"
                        >W</span
                    >
                    <span style="text-wrap: nowrap;">My Works</span>
                </div>
                <div>
                    <span style="font-weight: bold; color: var(--accent-color);"
                        >T</span
                    >
                    <span style="text-wrap: nowrap;">Toggle Theme</span>
                </div>
                <div>
                    <span style="font-weight: bold; color: var(--accent-color);"
                        >H</span
                    >
                    <span style="text-wrap: nowrap;">Home</span>
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
                    <span style="text-wrap: nowrap;"
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
        transform: scale(0);
        transition: all 500ms cubic-bezier(1, 1.72, 0.78, 0.79);
    }

    .navbar {
        position: sticky;
        display: flex;
        justify-content: space-between;
        left: 0;
        right: 0;
        font-family: "Poppins", sans-serif;
        top: 0;
        font-size: 1.48vh;
        font-weight: 600;
        color: var(--secondary-color);
        padding: 4vh 7.41vh;
    }

    .content {
        margin-top: 3.7vh;
        color: var(--secondary-color);
        display: flex;
        justify-content: space-between;
        gap: 40vh;
        padding: 0 7.41vh;

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
        width: 8rem;
        position: absolute;
        top: 40vh;
        display: flex;
        gap: 1rem;
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

    .nav_links {
        display: flex;
        align-items: center;
        gap: 4vh;
        text-transform: uppercase;
    }
    .nav_links a,
    .identity {
        font-size: 2vh;
    }
    .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: start;
    }

    .greet {
        font-size: 12.26vh;
        font-weight: 600;
        font-family: "Manrope", "Poppins", sans-serif;
        line-height: 16.67vh;
        text-transform: uppercase;
    }

    .text span:nth-child(2) {
        max-width: 50vw;
        font-size: 3.5vh;
        line-height: 7vh;
        margin: 3.7vh 0;
    }

    .text button {
        outline: none;
        border: none;
        background: transparent;
        color: var(--secondary-color);
        font-size: 2.78vh;
        padding: 2.5vh 9.26vh;
        font-family: "Poppins", sans-serif;
        transform: translateY(3.7vh);
        transition: all 300ms ease;
        font-weight: 600;
        position: relative;
        border: 0.3vh solid var(--secondary-color);

        z-index: 5;
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

    .identity {
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 1.85vh;
    }

    .identity span:first-child {
        width: 3.7vh;
        height: 3.7vh;
        border-radius: 50%;
        background-color: var(--secondary-color);
    }

    @media (min-width: 768px) {
        .navbar {
            position: relative !important;
        }
    }
</style>
