<template>
    <div>     
        <nav class="navbar navbar-default" role="navigation">
     <Header title="mine vue"/>
     <Tabbar/>
     </nav>
        hello mine
    </div>
</template>
<script >
import Header from '@/components/Header';
import Tabbar from '@/components/TabBar';
export default{
name:"mine",
components:{
    Header,
    Tabbar
}
}
</script>
<style>

</style>