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
        <div class="field">
            <span>Username :</span>
            <input type="text" on:change={setUsername} />
        </div>
        <div class="field">
            <span>Password  :</span>
            <input type="password" on:change={setPassword} />
        </div>
        <div class="field-center">
            <button on:click={login}>Login</button>
        </div>
        
    </div>
</div>

<style>
    .wrapper {
        margin: auto;
        font-size: 20px;
    }
    .content{
        /* display: flex;
        flex-direction: column; */
    }
    .field{
        display: flex;
        justify-content: space-between;
        width: 400px;
        padding: 5px 0px;
    }
    .field input {
            width: 200px;
        }
    .field-center{
        display: flex;
        justify-content: flex-end;
    }
</style>
