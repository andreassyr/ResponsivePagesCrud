<style>
    .page-tile
    {
        padding-top:30px
    }
    
    .page-tile .wrapper
    {
        padding: 5px;
        box-sizing: border-box;
        border-radius: 5px;
        border-width: 1px;
        border-style: solid;
        border-color: #888;
    }
    
    .page-tile .header
    {
        margin-bottom: 10px;
    }
    
    .page-tile .header h5
    {
        margin: 0px;
    }
    
</style>
<template>
    <div class="page-tile col-xs-6 col-md-4">
        <div class="wrapper">
            <div class="header">
                <h5>{{page.title}}</h5>
                <small>Published: {{publishedOn}}</small>
            </div>
            <div class="content">
                <p>{{page.description}}</p>
            </div>
            <hr/>
            <div class="row footer text-center">
                <div class="col-xs-6">
                    delete
                </div>
                <div class="col-xs-6">
                    edit
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import moment from 'moment';
    export default {
        props: {
            page: {
                type: Object
            }
        },
        computed:{
            publishedOn(){
                var publishDate = moment.utc(this.page.publishedOn).local().format('HH:mm DD-MM-YYYY');
                return publishDate;
            }
        }
    }
</script>