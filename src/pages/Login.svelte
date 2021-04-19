<script>
    import { navigate } from "svelte-routing";

    let username = "";
    let password = "";

    export let onSuccess;

    function login() {
        if (username === "admin" && password === "admin") {
            // navigate("/home", { replace: true });
            onSuccess();
        }
    }

    function setUsername(e) {
        username = e.target.value;
    }
    function setPassword(e) {
        password = e.target.value;
    }
</script>

<div class="wrapper">
    <div class="content">
        <form on:submit={login}>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="username" class="form-control" on:change={setUsername} placeholder="Enter username" required>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" on:change={setPassword} placeholder="Password" required>
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
