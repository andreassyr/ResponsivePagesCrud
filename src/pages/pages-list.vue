<style>
    .pages-list
    {
        min-height: 100%;
    }

    .pages-list .search
    {
        margin-top: 20px;
    }
</style>
<template>
    <div class="pages-list container">
        <div class="row">
            <div class="col-md-6">
                <h2>Available pages</h2>
                <button class="btn btn-success">New page</button>
            </div> 
            <div class="col-md-4">
                <input type="text" class="search form-control" placeholder="search" v-model="search"/>
            </div>
        </div>
        <template v-if="!loaded">
            <loader></loader>
        </template>
        <template v-else-if="!pagesCount">
            <p>No pages available create one now!</p>
        </template>
        <template v-else>
            <page-tile v-for="page in filteredPages" :key="page.id" :page="page"></page-tile>
        </template>
    </div>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex';
    import loader from '../loader/loader.vue';
    import PageTile from './page-tile.vue';

    export default{
        components: {
            loader,
            'page-tile': PageTile
        },
        data() {
            return {
                loaded: false,
                search: ''
            }
        },
        created()
        {
            this.fetchPagesList().then(() => {
                this.loaded = true;
            }, () => {
                console.log('error');
            });
        },
        computed: {
            ...mapGetters([
                    'getPages'
            ]),
            pagesCount()
            {
                return this.getPages.length;
            },
            filteredPages()
            {
                return this.getPages.filter((page) => {
                    return page.title.toLowerCase().indexOf(this.search) !== -1 ||
                            page.description.toLowerCase().indexOf(this.search) !== -1;
                });
            }
        },
        methods: {
            ...mapActions([
                    'fetchPagesList'
            ])
        }
    }

</script>
