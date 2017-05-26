<template>
    <span class="label label-info">{{typeText}}</span>
</template>
<script>
    export default{
        props: {
            type: {type: Number}
        },
        computed: {
            typeText()
            {
                let text;
                switch (this.type)
                {
                    case 0:
                        text = 'Menu';
                        break;
                    case 1:
                        text = 'Events';
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
