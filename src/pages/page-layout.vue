<style>
    .page-layout
    {
        margin-top: 50px;
    }

    .page-layout h2:first-child
    {
        background: #46c7c3;
        color: #fff;
        /* text-align: center; */
        font-weight: bold;
        letter-spacing: 0.1em;
        text-transform: lowercase;
    }
    
    .page-layout .btn-link
    {
        color:#46c7c3;
    }
    
</style>
<template>
    <div class="page-layout">
        <div class="container">
            <slot></slot>
        </div>
    </div>
</template>
