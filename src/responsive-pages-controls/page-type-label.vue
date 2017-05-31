<style>

    .page-type-label .glyphicon
    {
        font-size: 20px;
    }

    .page-type-label .caption
    {

    }
</style>
<template>
    <div class="page-type-label">
        <span :class="[iconClass]"></span>
        <div class="caption">{{typeText}}</div>
    </div>
</template>
<script>
    export default{
        props: {
            type: {type: Number}
        },
        computed: {
            iconClass()
            {
                let classText;
                switch (this.type)
                {
                    case 0:
                        classText = 'glyphicon glyphicon-link';
                        break;
                    case 1:
                        classText = 'glyphicon glyphicon-calendar';
                        break;
                    case 2:
                        classText = 'glyphicon glyphicon-align-justify';
                        break;
                }
                return classText;
            },
            typeText()
            {
                let text;
                switch (this.type)
                {
                    case 0:
                        text = 'Menu';
                        break;
                    case 1:
                        text = 'Event';
                        break;
                    case 2:
                        text = 'Content';
                        break;
                }
                return text;
            }
        }
    }
</script>
