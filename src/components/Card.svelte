<script>
    export let title = "Title";
    export let content = "Content";
</script>

<div class="wrapper">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{content}</p>
        </div>
    </div>
</div>

<style>
    .wrapper{
        margin-bottom: 10px;
    }
</style>
