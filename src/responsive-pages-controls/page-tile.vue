<style>
    .page-tile
    {
        padding-top:15px;
        padding-bottom:15px;

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
        margin-bottom: 10px;
    }

    .page-tile .header h5
    {
        margin: 0px;
    }

    .page-tile .row.footer
    {
    }

    .page-tile .row.footer > div:first-child
    {
        border-right: 1px #eee solid;
    }

</style>
<template>
    <div class="page-tile col-xs-12 col-sm-6 col-md-4">
        <div class="wrapper">
            <div class="header">
                <div class="row">
                    <div class="col-xs-12">
                        <h4>{{page.title}}</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-7">
                        <span class="glyphicon glyphicon-calendar"></span> {{publishedOn}}</small>
                    </div>
                    <div class="col-xs-5">
                        <span class="pull-right">
                            <page-active-label :is-active="page.isActive"></page-active-label>
                            <page-type-label :type="page.type"></page-type-label>
                        </span>
                    </div>
                </div>
            </div>
            <div class="content">
                <p>{{page.description}}</p>
            </div>
            <hr/>
            <div class="row footer text-center">
                <div class="col-xs-6">
                    <button class="btn btn-link" @click="deleteClicked">
                        <span class="glyphicon glyphicon-trash"></span> Delete
                    </button>
                </div>
                <div class="col-xs-6">
                    <router-link :to="{path:'edit-page/'+page.id}" tag="button" class="btn btn-link">
                        <span class="glyphicon glyphicon-edit"></span> Edit
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
                var publishDate =this.page.publishedOn.local().format('HH:mm DD-MM-YYYY');
                return publishDate;
            }
        }
    }
</script>