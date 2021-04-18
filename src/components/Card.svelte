<script>
    export let title = "Title";
    export let content = "Content";
</script>

<div class="card-container">
    <div class="title">{title}</div>
    <div class="content">{content}</div>
</div>

<style>
    .card-container {
        height: 300px;
        width: 300px;
        background-color: white;
        border: 1px solid black;
        padding: 5px;
        box-shadow: 5px 10px grey;
    }
    .title{
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        text-decoration: underline;
    }
    .content{
        font-size: 14px;
    }
</style>
