<script>
    import { Router, Link, navigate } from "svelte-routing";

    export let url = "/";
</script>

<Router {url}>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href={`javascript:function() { return false; }`} on:click={() => navigate("/")}>Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href={`javascript:function() { return false; }`} on:click={() => navigate("/about")}>About</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit">Search</button
                >
            </form>
        </div>
    </nav>
</Router>
