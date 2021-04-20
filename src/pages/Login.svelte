<script>
    import Loader from "../components/Loader.svelte";
    let username = "";
    let password = "";

    export let onSuccess;
    let isLoading = false;

    function login(event) {
        event.preventDefault();
        if (username === "admin" && password === "admin") {
            isLoading = true;
            setTimeout(() => {
                onSuccess();
                isLoading = false;
            }, 5000);
        }
    }
</script>

<div class="wrapper">
    {#if isLoading}
        <Loader />
    {/if}
    <div class="content">
        <form on:submit={login}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                    type="username"
                    class="form-control"
                    bind:value={username}
                    placeholder="Enter username"
                    required
                />
                <small id="emailHelp" class="form-text text-muted"
                    >We'll never share your email with anyone else.</small
                >
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                    type="password"
                    class="form-control"
                    bind:value={password}
                    placeholder="Password"
                    required
                />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</div>

<style>
    .wrapper {
        margin: auto;
        width: 20%;
        min-width: 300px;
        padding-top: 5%;
        /* font-size: 20px; */
    }
</style>
