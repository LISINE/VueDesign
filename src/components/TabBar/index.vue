<template>
<nav   id="tabbar">
    <div class="container-fluid">
     <div>
        <ul class="nav navbar-nav">
            <router-link tag="li" to="/" class="active"><a href="#">主页</a></router-link>
            <router-link tag="li" to="/mine"><a href="#">SVN</a></router-link>
            <router-link tag="li"  to="/search" class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    Java
                    <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                    <li><a href="#">jmeter</a></li>
                    <li><a href="#">EJB</a></li>
                    <li><a href="#">Jasper Report</a></li>
                    <li class="divider"></li>
                    <li><a href="#">分离的链接</a></li>
                    <li class="divider"></li>
                    <li><a href="#">另一个分离的链接</a></li>
                </ul>
            </router-link>
        </ul>
    </div>
    </div>
</nav>
</template>

<script>
export default {
name:"tabbar"
}
</script>

<style>

</style>