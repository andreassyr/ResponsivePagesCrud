<style>
    .pages-list
    {
        min-height: 100%;
    }

    .pages-list .search
    {
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>
<template>
    <div class="pages-list container">
        <div class="row">
            <div class="col-md-12">
                <h2>Available pages 
                    <router-link to="/create-page" tag="button" class="btn btn-success pull-right">New page</router-link>
                </h2>
            </div> 
        </div>
        <div class="row">
            <div class="col-xs-6 col-md-4">
                <input type="text" class="search form-control" placeholder="search" v-model="search"/>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <div class="alert alert-success " role="alert">...</div>
            </div>
        </div>
        <template v-if="!loaded">
            <div class="row">
                <div class="col-md-12">
                    <loader></loader>
                </div>
            </div>
        </template>
        <template v-else-if="error">
            <div class="row">
                <div class="col-md-12">
                    <p class="lead">Error occurred please try again!</p>
                </div>
            </div>
        </template>
        <template v-else-if="!pagesCount">
            <div class="row">
                <div class="col-md-12">
                    <p class="lead">No pages available create one now!</p>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="row">
                <page-tile v-for="page in filteredPages" 
                           :key="page.id" 
                           :page="page"
                           v-on:delete="showDeleteConfirmation"></page-tile>
            </div>
        </template>
        <page-delete-confirmation ref="deleteConfirmation"></page-delete-confirmation>
    </div>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex';
    import loader from '../loader/loader.vue';
    import PageTile from './page-tile.vue';
    import PageDeleteConfirmation from './page-delete-confirmation.vue';

    export default{
        components: {
            loader,
            'page-tile': PageTile,
            'page-delete-confirmation': PageDeleteConfirmation
        },
        data() {
            return {
                loaded: false,
                error: false,
                search: ''
            }
        },
        created()
        {
            this.fetchPagesList().then(() => {
                this.loaded = true;
            }, () => {
                this.loaded = true;
                this.error = true;
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
            ]),
            showDeleteConfirmation(page)
            {
                this.$refs.deleteConfirmation.show(page);
            }
        }
    }

</script>
