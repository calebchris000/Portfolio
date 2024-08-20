<script lang="ts">
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";

    let parent: HTMLElement;

    onMount(() => {
        setTimeout(() => {
            const { innerWidth } = window;
            parent.style.transform = `translateY(-${innerWidth}px)`;
        }, 4000);

        setTimeout(() => {
            navigate("/home");
        }, 5000);
    });
</script>

<section bind:this={parent} class="parent">
    <!-- <div class="splash"></div> -->
    <span>Hello There!</span>
    <span class="wave">👋</span>
</section>

<style>
    .parent {
        width: 100%;
        height: 100%;
        background-color: var(--primary-color);
        position: fixed;
        color: var(--secondary-color);
        z-index: 10;
        font-family: "Pacifico", cursive;
        display: flex;
        transition: all 2s ease;
        justify-content: center;
        inset: 0;
        display: flex;
        gap: 2rem;
    }

    .parent::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            135deg,
            transparent 0% 20%,
            var(--accent-color-1) 25% 60%,
            transparent 65% 100%
        );
        background-size: 1000%;
        transition: all 3s ease;
        background-position: 0% 0%;
        inset: 0;
        animation: swipe 3s ease-in-out forwards;
    }

    @keyframes swipe {
        0%,
        100% {
            background-position: 0% 0%;
        }
        50% {
            background-position: 100% 100%;
        }
    }

    .parent:hover::before {
        background-position: 100% 100%;
    }

    .parent span {
        font-size: 4rem;
        margin-top: 10rem;
        font-weight: 600;
        user-select: none;
        z-index: 10;
    }

    .wave {
        animation: wave 1.5s ease-in-out infinite;
        display: inline-block;
        width: fit-content;
        height: fit-content;
        transform-origin: 70% 70%;
    }

    @keyframes wave {
        0%,
        100% {
            transform: rotate(0deg);
        }
        10% {
            transform: rotate(20deg);
        }
        20% {
            transform: rotate(-12deg);
        }
        30% {
            transform: rotate(20deg);
        }
        40% {
            transform: rotate(-8deg);
        }
        50% {
            transform: rotate(15deg);
        }
        60% {
            transform: rotate(0deg);
        }
    }
</style>
