<script lang="ts">
    import { Router, Link, Route } from "svelte-routing";
    import viteLogo from "/vite.svg";
    import Counter from "./lib/Counter.svelte";
    import Greeting from "./pages/greeting.svelte";
    import Home from "./pages/home.svelte";
    import { onMount } from "svelte";
    import About from "./pages/about.svelte";
    import Projects from "./pages/projects/projects.svelte";
    import Contact from "./pages/contact/contact.svelte";

    export let url = "";
</script>

<Router {url}>
    <main>
        <Route path="/" component={Greeting} />
        <Route path="/home" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
    </main>
</Router>

<style>
</style>
