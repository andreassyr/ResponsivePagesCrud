<style>
    .loader-cube-grid{
        transform: rotate(45deg);
    }
    
    .loader-cube-grid .loader-cube {
        width: 33%;
        height: 33%;
        background-color: #333;
        float: left;
        -webkit-animation: loader-cubeGridScaleDelay 1.3s infinite ease-in-out;
        animation: loader-cubeGridScaleDelay 1.3s infinite ease-in-out; 
    }
    .loader-cube-grid .loader-cube1 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s; }
    .loader-cube-grid .loader-cube2 {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s; }
    .loader-cube-grid .loader-cube3 {
        -webkit-animation-delay: 0.4s;
        animation-delay: 0.4s; }
    .loader-cube-grid .loader-cube4 {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s; }
    .loader-cube-grid .loader-cube5 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s; }
    .loader-cube-grid .loader-cube6 {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s; }
    .loader-cube-grid .loader-cube7 {
        -webkit-animation-delay: 0s;
        animation-delay: 0s; }
    .loader-cube-grid .loader-cube8 {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s; }
    .loader-cube-grid .loader-cube9 {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s; }

    @-webkit-keyframes loader-cubeGridScaleDelay {
        0%, 70%, 100% {
            -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
        } 35% {
            -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1); 
        }
    }

    @keyframes loader-cubeGridScaleDelay {
        0%, 70%, 100% {
            -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
        } 35% {
            -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1);
        } 
    }
</style>
<template>
    <div class="loader-cube-grid">
        <div class="loader-cube loader-cube1"></div>
        <div class="loader-cube loader-cube2"></div>
        <div class="loader-cube loader-cube3"></div>
        <div class="loader-cube loader-cube4"></div>
        <div class="loader-cube loader-cube5"></div>
        <div class="loader-cube loader-cube6"></div>
        <div class="loader-cube loader-cube7"></div>
        <div class="loader-cube loader-cube8"></div>
        <div class="loader-cube loader-cube9"></div>
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