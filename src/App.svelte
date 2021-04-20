<script lang="ts">
    import { Router, Route } from "svelte-routing";
    import Sidebar from "./components/Sidebar.svelte";
    import About from "./pages/About.svelte";
    import Home from "./pages/Home.svelte";
    import Login from "./pages/Login.svelte";
    export let name: string;
    let user = {
        loggedIn: false,
    };
    function onSuccess() {
        user.loggedIn = true;
    }
</script>

<div class="app">
    <div class="header">{name}</div>
    <div>
        {#if user.loggedIn}
            <div class="container-fluid">
                <!-- Content here -->
                <Sidebar />
            </div>
            <div class="container-fluid content">
                <Router url="/">
                    <Route path="home" component={Home} />
                    <Route path="about" component={About} />
                    <Route path="/" component={Home} />
                </Router>
            </div>
        {:else}
            <Login {onSuccess} />
        {/if}
    </div>
</div>

<style>
    .app {
        height: 100vh;
    }
    .header {
        height: 70px;
        color: black;
        text-align: center;
        font-size: 50px;
        font-weight: bolder;
        text-decoration: underline;
    }
    .content {
        height: calc(100vh - 150px);
        overflow: auto;
    }
</style>
