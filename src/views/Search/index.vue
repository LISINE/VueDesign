<template>
    <div>
             <nav class="navbar navbar-default" role="navigation">
     <Header title="search vue"/>
     <Tabbar/>
     </nav>
        hello search
    </div>
</template>
<script >
import Header from '@/components/Header';
import Tabbar from '@/components/TabBar';
export default{
name:"search",
components:{
    Header,
    Tabbar
}
}
</script>
<style>

</style>