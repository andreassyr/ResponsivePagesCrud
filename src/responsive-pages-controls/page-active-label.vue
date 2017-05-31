<template>
    <div class="page-type-label">
        <span :class="[isActiveIconClass]"></span>
        <div class="caption">{{isActiveLabelText}}</div>
    </div>
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
            isActiveIconClass() {
                return this.isActive ? 'glyphicon glyphicon-eye-open' : 'glyphicon glyphicon-eye-close';
            },
            isActiveLabelText()
            {
                return this.isActive ? 'Visible' : 'Hidden';
            },
        }
    }
</script>

