<style>
    html,body,#app
    {
        height: 100%;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s ease;
    }
    .fade-enter, .fade-leave-to
    /* .component-fade-leave-active for <2.1.8 */ {
        opacity: 0;
    }
</style>
<template>
    <div id="app">
        <transition  name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    export default {

    }
</script>