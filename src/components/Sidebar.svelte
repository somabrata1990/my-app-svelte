<script>
    import { Router, Link } from "svelte-routing";

    export let url = "/";
</script>

<Router {url}>
    <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
    </nav>
</Router>

<style>
  
</style>