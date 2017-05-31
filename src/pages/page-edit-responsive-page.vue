<template>
    <page-layout>
        <div class="page-edit-responsive-page">
            <h2>Edit page</h2>
            <hr/>
            <loader v-if="loading"></loader>
            <template v-else>
                <alert></alert>
                <page-details-form :page="page" ref="form" @submit="submit" @back="onBack"></page-details-form>
            </template>
        </div>
    </page-layout>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex';
    import alert from '../commons/alert.vue';
    import loader from '../loader/loader.vue';
    import PageLayout from './page-layout.vue';
    import PageDetailsForm from '../responsive-pages-controls/page-details-form.vue';

    export default{
        components: {
            'page-details-form': PageDetailsForm,
            'page-layout': PageLayout,
            alert,
            loader
        },
        data() {
            return{
                loading: true,
                page: {}
            }
        },
        computed: {
            ...mapGetters(['getPageById', 'getPages'])
        },
        methods: {
            ...mapActions(['getPage', 'updatePage']),
            navigateToPagesList()
            {
                this.$router.push({path: '/'})
            },
            onBack() {
                this.navigateToPagesList();
            },
            submit(page)
            {
                var success = false;
                this.loading = true;
                page.publishedOn = page.publishedOn.utc();

                this.updatePage(page).then(() => {
                    success = true;
                    this.navigateToPagesList();
                }, () => {

                }).always(() => {
                    this.loading = false;

                    if (success)
                        return;

                    page.publishedOn = page.publishedOn.local();
                    this.$nextTick(() => {
                        this.$refs.form.page = page;
                    });
                });
            }
        },
        mounted()
        {
            this.getPage(this.$route.params.id).then((page) => {
                page.publishedOn.local();
                this.page = page;
            }, () => {

            }).always(() => {
                this.loading = false;
            });
        }
    }
</script>