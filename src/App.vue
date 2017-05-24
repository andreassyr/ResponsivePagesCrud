<template>
    <div id="app">
        <h1>Hello project 2</h1>
    </div>
</template>
<script>
    import {getPagesList, getSinglePage, updatePage, deletePage, createPage} from './Api.js';

    export default {
        created()
        {
            getPagesList().then((data) => {
                console.log(data);
            }, () => {

                console.log(arguments);
            });
        }
    }
</script>