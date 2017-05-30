<template>
    <page-layout>
        <responsive-pages-list></responsive-pages-list>
    </page-layout>
</template>
<script>
    import ResponsivePagesList from '../responsive-pages-controls/responsive-pages-list.vue';
    import PageLayout from './page-layout.vue';
    export default{
        components: {
            'responsive-pages-list': ResponsivePagesList,
            'page-layout': PageLayout
        }
    }
</script>
