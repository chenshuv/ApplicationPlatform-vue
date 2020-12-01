<template>
    <div id="sign">
        <svg class="circle" height="300" width="300">
            <circle cx="150" cy="150" r="150" fill="#fbd348" />
        </svg>
        <svg class="triangle" height="400" width="400">
            <polygon points="200,0 000,400 400,400" fill="#e35e6a" />
        </svg>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Form"
    }
</script>

<style scoped>
    .triangle {
        position: absolute;
        right: -180px;
        top: -160px;
        z-index: -2;
        transform-origin: 200px;
        animation: example 24s infinite;
    }

    .circle {
        position: absolute;
        left: -180px;
        bottom: -160px;
        z-index: -2;
        transform-origin: center;
        animation: examplex 55s infinite;
    }

    #sign {
        background: var(--bg-main);
        width: 900px;
        height: 600px;
        margin: auto;
        border-radius: 10px;
        box-shadow: 0 25px 50px -12px rgb(0, 0, 0);
        z-index: initial;
        position: relative;
    }
</style>