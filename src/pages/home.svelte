<script lang="ts">
    import { onMount } from "svelte";

    let home: HTMLElement;

    onMount(() => {
        setTimeout(() => {
            home.style.transform = "scale(1)";
        });
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
            <span><a href="#about">About</a></span>
            <span><a href="#projects">Projects</a></span>
            <span><a href="#contact">Contact</a></span>
        </div>
    </nav>
    <section class="content">
        <div class="text">
            <span>Hey, I'm CALEB NWAIZU</span>
            <span
                >A professional Frontend and Backend Web Developer with 2+ years
                of experience. From simple websites to functional and
                sophisticated system.</span
            >
            <button class="button" type="button">See My Works!</button>
        </div>
    </section>
</main>

<style>
    .home {
        position: relative;
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
        width: 129.63vh;
        font-family: "Poppins", sans-serif;
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
        margin: 0 auto;
        padding: 0 7.41vh;
        align-items: flex-start;
        text-align: start;
    }

    .text span:first-child {
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
