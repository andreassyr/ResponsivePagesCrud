<!--
    It can take 2 properties 
1) the size of the loader (medium, small, large)
2) the type of the loader (cube-grid or spinner)
-->
<style>
    .loader
    {
        margin:0px auto;
    }

    .loader.small,
    .loader .small
    {
        width:50px;
        height:50px;
    }

    .loader.medium,
    .loader .medium
    {
        width:100px;
        height:100px;
    }

    .loader.large,
    .loader .large
    {
        width:150px;
        height:150px;
    }
</style>
<template>
    <div class="loader" :class="[size]">
        <component :is="type" :class="[size]"></component>
    </div>
</template>
<script>
    import CubeGrid from './cube-grid.vue';
    import Circle from './spinner.vue';

    export default {
        props: {
            size: {
                type: String,
                'default': 'medium'
            },
            type: {
                type: String,
                'default': 'cube-grid'
            }
        },
        components: {
            'cube-grid': CubeGrid,
            'spinner': Circle
        }
    }
</script>
