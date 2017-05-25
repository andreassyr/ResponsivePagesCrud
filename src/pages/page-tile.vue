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

        -webkit-box-shadow: 0px 1px 5px 0px rgba(207,207,207,1);
        -moz-box-shadow: 0px 1px 5px 0px rgba(207,207,207,1);
        box-shadow: 0px 1px 5px 0px rgba(207,207,207,1);

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

</style>
<template>
    <div class="page-tile col-xs-12 col-sm-6 col-md-4">
        <div class="wrapper">
            <div class="header">
                <h5>{{page.title}}</h5>
                <small><span class="glyphicon glyphicon-calendar"></span> {{publishedOn}}</small>
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
        computed: {
            publishedOn() {
                var publishDate = moment.utc(this.page.publishedOn).local().format('HH:mm DD-MM-YYYY');
                return publishDate;
            }
        }
    }
</script>