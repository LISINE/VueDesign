<template>
<nav  id="header">
    <div class="container-fluid">
    <div class="navbar-header">
        <a class="navbar-brand" href="#">{{title}}</a>
    </div>
    </div>
</nav>
</template>

<script>
export default {
name:"header",
props : {
        title : {
            type : String,
            default : 'header vue'
        }
    }
}
</script>

<style>

</style>