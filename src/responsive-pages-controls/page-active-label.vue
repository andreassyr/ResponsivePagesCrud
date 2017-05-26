<template>
    <span class="label" :class="[isActiveLabelClass]">{{isActiveLabelText}}</span>
</template>
<script>
    export default{
        props: {
            isActive: {
                type: Boolean,
                'default': true
            }
        },
        computed: {
            isActiveLabelClass() {
                return this.isActive ? 'label-success' : 'label-default';
            },
            isActiveLabelText()
            {
                return this.isActive ? 'Visible' : 'Hidden';
            },
        }
    }
</script>

