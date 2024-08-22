<script lang="ts">
    import { Router, Link, Route } from "svelte-routing";
    import viteLogo from "/vite.svg";
    import Counter from "./lib/Counter.svelte";
    import Greeting from "./pages/greeting.svelte";
    import Home from "./pages/home.svelte";
    import { onMount } from "svelte";
    import About from "./pages/about.svelte";
    import Projects from "./pages/projects/projects.svelte";

    export let url = "";
</script>

<Router {url}>
    <main>
        <Route path="/" component={Greeting} />
        <Route path="/home" component={Home} />
        <!-- <Route path="/about" component={About} /> -->
        <Route path="/projects" component={Projects} />
    </main>
</Router>

<style>
</style>
