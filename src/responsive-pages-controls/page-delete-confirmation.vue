<template>
    <div class="page-delete-confirmation modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Delete page?</h4>
                </div>
                <div class="modal-body">
                    <p>Are you sure you want to delete the page <strong>{{page.title}}</strong> ?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger" @click="handlePageDelete">
                        <span class="glyphicon glyphicon-trash"></span> Delete
                    </button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
</template>
<script>
    import {mapActions} from 'vuex';

    export default{
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
                this.deletePage(this.page.id).then((page) => {
                    this.$emit('page-delete-success', page);
                }, () => {
                    this.$emit('page-delete-error', this.page);
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
                $('.page-delete-confirmation').modal('hide');
            }
        }
    }
</script>