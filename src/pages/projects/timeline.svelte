<script lang="ts">
    import { onMount } from "svelte";
    import "./style.css";
    import { createTimeline } from "./timeline";

    onMount(() => {
        createTimeline(".timeline_parent", [
            {
                title: "August 2024 - Portfolio Website",
                description:
                    "Designed and implemented a personal portfolio website using Svelte and Tailwind CSS",
                image: "https://example.com/images/portfolio-website.jpg",
                liveLink: "https://your-portfolio.com",
            },
            {
                title: "May 2024 - Naija Companies",
                description:
                    "Decide your next company. Research and compare options, read employee reviews, and write a list of pros and cons for each potential employer.",
                image: "https://example.com/images/ecommerce-website.jpg",
                liveLink: "https://naija-companies-frontend.onrender.com/",
            },
            {
                title: "December 2023 - Pomodoro Timer App",
                description:
                    "Track your valuable time with Pomodro Timer. Set custom time that fits.",
                image: "https://example.com/images/task-management-app.jpg",
                liveLink: "https://pomodoro-software.netlify.app/",
            },
            {
                title: "May 2023 - COVID 19 Reports",
                description:
                    "Get the latest statistics on the COVID 19 cases worldwide.",
                image: "https://example.com/images/weather-forecast-api.jpg",
                liveLink: "https://covid19-reports.netlify.app/",
            },
            {
                title: "April 2023 -  Bookstore Redefined",
                description:
                    "Create a book collection and share them online to your friends and family.",
                image: "https://example.com/images/weather-forecast-api.jpg",
                liveLink: "https://bookstore-redefined.vercel.app/",
            },
        ]);
    });
</script>

<section class="pt-56">
    <div class="timeline_parent h-full p-4"></div>
</section>
