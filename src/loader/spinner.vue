<style>
    .loader-spinner {
        position: relative;
    }
    
    .loader-spinner .loader-child {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .loader-spinner .loader-child:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: #333;
        border-radius: 100%;
        -webkit-animation: loader-spinnerBounceDelay 1.2s infinite ease-in-out both;
        animation: loader-spinnerBounceDelay 1.2s infinite ease-in-out both;
    }
    .loader-spinner .loader-spinner2 {
        -webkit-transform: rotate(30deg);
        -ms-transform: rotate(30deg);
        transform: rotate(30deg); }
    .loader-spinner .loader-spinner3 {
        -webkit-transform: rotate(60deg);
        -ms-transform: rotate(60deg);
        transform: rotate(60deg); }
    .loader-spinner .loader-spinner4 {
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg); }
    .loader-spinner .loader-spinner5 {
        -webkit-transform: rotate(120deg);
        -ms-transform: rotate(120deg);
        transform: rotate(120deg); }
    .loader-spinner .loader-spinner6 {
        -webkit-transform: rotate(150deg);
        -ms-transform: rotate(150deg);
        transform: rotate(150deg); }
    .loader-spinner .loader-spinner7 {
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg); }
    .loader-spinner .loader-spinner8 {
        -webkit-transform: rotate(210deg);
        -ms-transform: rotate(210deg);
        transform: rotate(210deg); }
    .loader-spinner .loader-spinner9 {
        -webkit-transform: rotate(240deg);
        -ms-transform: rotate(240deg);
        transform: rotate(240deg); }
    .loader-spinner .loader-spinner10 {
        -webkit-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
        transform: rotate(270deg); }
    .loader-spinner .loader-spinner11 {
        -webkit-transform: rotate(300deg);
        -ms-transform: rotate(300deg);
        transform: rotate(300deg); }
    .loader-spinner .loader-spinner12 {
        -webkit-transform: rotate(330deg);
        -ms-transform: rotate(330deg);
        transform: rotate(330deg); }
    .loader-spinner .loader-spinner2:before {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s; }
    .loader-spinner .loader-spinner3:before {
        -webkit-animation-delay: -1s;
        animation-delay: -1s; }
    .loader-spinner .loader-spinner4:before {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s; }
    .loader-spinner .loader-spinner5:before {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s; }
    .loader-spinner .loader-spinner6:before {
        -webkit-animation-delay: -0.7s;
        animation-delay: -0.7s; }
    .loader-spinner .loader-spinner7:before {
        -webkit-animation-delay: -0.6s;
        animation-delay: -0.6s; }
    .loader-spinner .loader-spinner8:before {
        -webkit-animation-delay: -0.5s;
        animation-delay: -0.5s; }
    .loader-spinner .loader-spinner9:before {
        -webkit-animation-delay: -0.4s;
        animation-delay: -0.4s; }
    .loader-spinner .loader-spinner10:before {
        -webkit-animation-delay: -0.3s;
        animation-delay: -0.3s; }
    .loader-spinner .loader-spinner11:before {
        -webkit-animation-delay: -0.2s;
        animation-delay: -0.2s; }
    .loader-spinner .loader-spinner12:before {
        -webkit-animation-delay: -0.1s;
        animation-delay: -0.1s; }

    @-webkit-keyframes loader-spinnerBounceDelay {
        0%, 80%, 100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        } 40% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @keyframes loader-spinnerBounceDelay {
        0%, 80%, 100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        } 40% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
</style>
<template>
    <div class="loader-spinner">
        <div class="loader-spinner1 loader-child"></div>
        <div class="loader-spinner2 loader-child"></div>
        <div class="loader-spinner3 loader-child"></div>
        <div class="loader-spinner4 loader-child"></div>
        <div class="loader-spinner5 loader-child"></div>
        <div class="loader-spinner6 loader-child"></div>
        <div class="loader-spinner7 loader-child"></div>
        <div class="loader-spinner8 loader-child"></div>
        <div class="loader-spinner9 loader-child"></div>
        <div class="loader-spinner10 loader-child"></div>
        <div class="loader-spinner11 loader-child"></div>
        <div class="loader-spinner12 loader-child"></div>
    </div>
</template>
<script>
    export default{
        props: {
            size: {
                type: String,
                'default': 'medium'
            }
        }
    }
</script>