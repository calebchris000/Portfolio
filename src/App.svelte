<script lang="ts">
    import { Router, Link, Route } from "svelte-routing";
    import svelteLogo from "./assets/svelte.svg";
    import viteLogo from "/vite.svg";
    import Counter from "./lib/Counter.svelte";
    import Greeting from "./pages/greeting.svelte";
    import Home from "./pages/home.svelte";
    import { onMount } from "svelte";

    export let url = "";
</script>

<Router {url}>
    <main>
        <Route path="/" component={Greeting} />
        <Route path="/home" component={Home} />
    </main>
</Router>

<style>
</style>
