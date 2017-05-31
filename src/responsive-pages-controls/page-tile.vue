<style>
    .page-tile
    {
        padding-top:15px;
        padding-bottom:15px;

    }

    .page-tile .btn-link
    {
        webkit-transition: all 0.1s ease;
        -moz-transition: all 0.1s ease;
        -ms-transition: all 0.1s ease;
        -o-transition: all 0.1s ease;
        transition: all 0.1s ease;	
    }

    .page-tile .btn-link:hover
    {
        text-decoration: none;
        transform: scale(1.1, 1.1);
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
        display: flex;
        flex-direction: row;

        padding: 0;
        background: #fff;
        -webkit-box-shadow: 0px 1px 10px 0px rgba(207,207,207,1);
        -moz-box-shadow: 0px 1px 10px 0px rgba(207,207,207,1);
        box-shadow: 0px 1px 10px 0px rgba(207,207,207,1);

        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        -o-transition: all 0.5s ease;
        transition: all 0.5s ease;	
    }


    .page-tile:hover .wrapper
    {
        -webkit-box-shadow: 0px 1px 30px 0px rgba(207,207,207,1);
        -moz-box-shadow: 0px 1px 30px 0px rgba(207,207,207,1);
        box-shadow: 0px 1px 30px 0px rgba(207,207,207,1);
    }


    .page-tile .wrapper .left-side,
    .page-tile .wrapper .right-side
    {
        align-self:stretch;
        padding-bottom: 15px;
        padding-top: 15px;

    }

    .page-tile .wrapper .left-side
    {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        text-align: center;
        color:white;
    }

    .page-tile .left-side.menu
    {
        background-image: url('../assets/menu.jpg');
    }

    .page-tile .left-side.content
    {
        background-image: url('../assets/content.jpg');
    }

    .page-tile .left-side.event
    {
        background-image: url('../assets/event.jpg');
    }

    .page-tile .wrapper .left-side hr
    {
        width:100%;
    }


    .page-tile .wrapper .right-side
    {
        padding-left: 30px;
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

    .page-tile .row.footer .btn-link
    {
        font-weight: bold;
    }
</style>
<template>
    <div class="page-tile col-xs-12 col-sm-6 col-md-4">
        <div class="col-xs-12 wrapper">
            <div class="col-xs-3 left-side" :class="[pageClass]">
                <page-type-label :type="page.type"></page-type-label>
                <hr/>
                <page-active-label :is-active="page.isActive"></page-active-label>
            </div>
            <div class="col-xs-9 right-side">
                <div class="header">
                    <div class="row">
                        <div class="col-xs-12">
                            <h4 class="truncate">{{page.title}}</h4>
                        </div>
                        <div class="col-xs-12">
                            {{publishedOn}}
                        </div>
                    </div>
                </div>
                <div class="content">
                    <p class="truncate">{{page.description}}</p>
                </div>
                <hr/>
                <div class="row footer text-center">
                    <div class="col-xs-6">
                        <button class="btn btn-block btn-link" @click="deleteClicked">
                            delete
                        </button>
                    </div>
                    <div class="col-xs-6">
                        <router-link :to="{path:'edit-page/'+page.id}" tag="button" class="btn btn-block btn-link">
                            edit
                    </router-link>
                </div>
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
            pageClass()
            {
                let text;
                switch (this.page.type)
                {
                    case 0:
                        text = 'menu';
                        break;
                    case 1:
                        text = 'event';
                        break;
                    case 2:
                        text = 'content';
                        break;
                }
                return text;
            },
            publishedOn() {
                var publishDate = this.page.publishedOn.local().format('HH:mm DD-MM-YYYY');
                return publishDate;
            }
        }
    }
</script>