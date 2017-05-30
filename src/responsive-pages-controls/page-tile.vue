<style>
    .page-tile
    {
        cursor: pointer;
        padding-top:15px;
        padding-bottom:15px;

    }

    .page-tile:hover .wrapper
    {
        -webkit-box-shadow: 0px 1px 30px 0px rgba(207,207,207,1);
        -moz-box-shadow: 0px 1px 30px 0px rgba(207,207,207,1);
        box-shadow: 0px 1px 30px 0px rgba(207,207,207,1);
    }

    .page-tile .btn-link
    {
        webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;	
    }

    .page-tile .btn-link:hover
    {
        text-decoration: none;
        font-weight: bold;
    }

    .page-tile .truncate
    {
        width:100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    }

    .page-tile .wrapper
    {
        background: #fff;
        position: relative;
        padding:20px;
        -webkit-box-shadow: 0px 1px 10px 0px rgba(207,207,207,1);
        -moz-box-shadow: 0px 1px 10px 0px rgba(207,207,207,1);
        box-shadow: 0px 1px 10px 0px rgba(207,207,207,1);

        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;	
    }

    .page-tile .header
    {
        margin-bottom: 25px;
    }

    .page-tile .header h4
    {
        margin: 0px;
    }

    .page-tile .row.footer
    {
    }

    .page-tile .row.footer > div:first-child
    {
        border-right: 2px #ddd solid;
    }

</style>
<template>
    <div class="page-tile col-xs-12 col-sm-6 col-md-6">
        <div class="wrapper">
            <div class="header">
                <div class="row">
                    <div class="col-xs-12">
                        <h4 class="truncate">{{page.title}}</h4>
                    </div>
                    <div class="col-xs-12">
                        {{publishedOn}}
                    </div>
                    <div class="col-xs-12 labels">
                        <page-type-label :type="page.type"></page-type-label>
                        <page-active-label :is-active="page.isActive"></page-active-label>
                    </div>

                </div>
            </div>
            <div class="content">
                <p class="truncate">{{page.description}}</p>
            </div>
            <hr/>
            <div class="row footer text-center">
                <div class="col-xs-6">
                    <button class="btn btn-link" @click="deleteClicked">
                        delete
                    </button>
                </div>
                <div class="col-xs-6">
                    <router-link :to="{path:'edit-page/'+page.id}" tag="button" class="btn btn-link">
                        edit
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    import moment from 'moment';
    import PageActiveLabel from './page-active-label.vue';
    import PageTypeLabel from './page-type-label.vue';
    export default {
        components: {
            'page-active-label': PageActiveLabel,
            'page-type-label': PageTypeLabel
        },
        props: {
            page: {
                type: Object
            }
        },
        methods: {
            deleteClicked()
            {
                this.$emit('delete', this.page);
            }
        },
        computed: {
            publishedOn() {
                var publishDate = this.page.publishedOn.local().format('HH:mm DD-MM-YYYY');
                return publishDate;
            }
        }
    }
</script>