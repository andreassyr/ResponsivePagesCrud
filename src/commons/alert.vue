<template>
    <ul class="alerts list-unstyled">
        <li v-for="event in events" class="alert fade in" :class="[event.success?'alert-success':'alert-danger']" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            {{event.message}}
        </li>
    </ul>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex';

    export default{
        data() {
            return{
                events: []
            }
        },
        mounted()
        {
            this.update();
        },
        methods: {
            ...mapActions([
                    'clearPageEvents'
            ]),
            update()
            {
                this.events = this.getPageEvents;
                this.clearPageEvents();
            }
        },
        computed: {
            ...mapGetters([
                    'getPageEvents'
            ])
        }
    }
</script>