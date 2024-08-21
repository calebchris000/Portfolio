<script lang="ts">
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import { circleToHide } from "./components/hider";

    let parent: HTMLElement;

    onMount(() => {
        localStorage.setItem("currentPath", "/");
        setTimeout(() => {
            // circleToHide();
        }, 3000);

        setTimeout(() => {
            // navigate("/home");
        }, 5000);
    });
</script>

<section
    bind:this={parent}
    class="parent w-full h-full fixed z-10 transition-all delay-[2s] ease-linear justify-center inset-0 gap-[2vh] text-secondary bg-primary"
>
    <div
        class="z-10 flex items-center justify-center absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] gap-4"
    >
        <span class="text-xl lg:text-[15vh] leading-none">Hello There!</span>
        <span class="wave text-lg xl:text-[10vh]">👋</span>
    </div>
</section>

<style>
    .parent {
        font-family: "Poppins", cursive;
    }

    .parent::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            135deg,
            transparent 0% 20%,
            var(--accent-color-1) 20% 60%,
            transparent 60% 100%
        );
        background-size: 1200%;
        transition: all 3s ease;
        background-position: 0% 0%;
        inset: 0;
        animation: swipe 2s ease-in-out forwards;
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
        font-weight: 600;
        user-select: none;
        z-index: 10;
    }

    .wave {
        animation: wave 1.5s ease-in-out infinite;
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
