<script lang="ts">
    import { Router, Route } from "svelte-routing";
    import Sidebar from "./components/sidebar.svelte";
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
    <div class="wrapper">
        {#if user.loggedIn}
            <div class="sidebar">
                <Sidebar />
            </div>
            <div class="content">
                <Router url="/">
                    <div>
                        <Route path="home" component={Home} />
                        <Route path="about" component={About} />
                        <Route path="/" component={Home} />
                    </div>
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
    }
    .wrapper {
        height: calc(100vh - 60px);
        display: flex;
    }
    .sidebar {
        width: 20%;
        min-width: 300px;
        background-color: black;
    }
    .content {
        width: 80%;
        display: flex;
        justify-content: space-evenly;
        padding-top: 20px;
        flex-wrap: wrap;
    }
</style>
