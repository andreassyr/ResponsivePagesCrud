<template>
    <input :value="dateText" @input="updateValue($event.target.value)" type="text"/>
</template>
<script>
    import 'bootstrap-daterangepicker';
    import 'bootstrap-daterangepicker/daterangepicker.css';

    export default{
        props: {
            value: {
                type: Object
            }
        },
        computed: {
            dateText()
            {
                if (!this.value)
                    return '';
                else
                    return this.value.format('HH:mm DD-MM-YYYY');
            }
        },
        methods: {
            updateValue(value)
            {
                console.log(value);
            }
        },
        mounted()
        {
            $(this.$el).daterangepicker({
                singleDatePicker: true,
                timePicker: true,
                timePicker24Hour: true,
                locale: {
                    format: 'HH:mm DD-MM-YYYY'
                }
            }, (start, end, label) => {
                this.$emit('input', start);
            });
        },
        beforeDestroy()
        {
            $(this.$el).data('daterangepicker').remove();
        }
    }

</script>