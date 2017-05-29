<template>
    <div class="page-create-responsive-page container">
        <h2>Create new page</h2>
        <hr/>
        <loader v-if="loading"></loader>
        <template v-else>
            <alert></alert>
            <page-details-form ref="form" @submit="submit" @back="onBack"></page-details-form>
        </template>
    </div>
</template>
<script>
    import {mapActions} from 'vuex';
    import alert from '../commons/alert.vue';
    import loader from '../loader/loader.vue';
    import PageDetailsForm from '../responsive-pages-controls/page-details-form.vue';

    export default{
        components: {
            'page-details-form': PageDetailsForm,
            alert,
            loader
        },
        data() {
            return {
                loading: false
            }
        },
        methods: {
            ...mapActions([
                    'createNewPage'
            ]),
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

                this.createNewPage(page).then(() => {
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
        }
    }
</script>

