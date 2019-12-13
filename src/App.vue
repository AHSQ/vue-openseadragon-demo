<template>
    <div id="app">
        <OpenSeadragon/>
    </div>
</template>

<script>
    import OpenSeadragon from "@/components/OpenSeadragon";

    export default {
        name: 'app',
        components: {
            OpenSeadragon,
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    #app {
        height: 100%;
    }
</style>
