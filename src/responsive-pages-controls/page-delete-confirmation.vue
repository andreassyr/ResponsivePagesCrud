<template>
    <div class="page-delete-confirmation modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 v-if="!loading" class="modal-title">Delete page?</h4>
                    <h4 v-else class="modal-title">Deleting page</h4>
                </div>
                <div class="modal-body">
                    <p v-if="!loading">Are you sure you want to delete the page <strong>{{page.title}}</strong> ?</p>
                    <loader v-else size="small" type="spinner"></loader>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" :disabled="loading" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger" :disabled="loading" @click="handlePageDelete">
                        <span class="glyphicon glyphicon-trash"></span> Delete
                    </button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
</template>
<script>
    import {mapActions} from 'vuex';
    import loader from '../loader/loader.vue';
    export default{
        components: {
            loader
        },
        data() {
            return {
                page: {},
                loading: false
            }
        },
        methods: {
            ...mapActions(['deletePage']),
            handlePageDelete()
            {
                this.loading = true;
                this.deletePage(this.page.id).then((page) => {
                    this.$emit('success', page);
                }, () => {
                    this.$emit('error', this.page);
                }).done(() => {
                    this.hide();
                });
            },
            show(page)
            {
                this.page = page;
                $('.page-delete-confirmation').modal({
                    backdrop: 'static',
                    show: true
                });
            },
            hide()
            {
                this.loading = false;
                $('.page-delete-confirmation').modal('hide');
            }
        }
    }
</script>