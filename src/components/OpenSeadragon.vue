<template>
    <div style="height: 100%">
        <div id="contentDiv" style="height: 100%">

        </div>
    </div>
</template>

<script>
    export default {
        name: "OpenSeadragon",
        data() {
            return {
                viewer: null,
                options: {
                    id: "contentDiv",
                    prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
                    constrainDuringPan: true,
                    showNavigator: true,
                },// openseadragon 参数配置
            }
        },
        methods: {
            pressHandler(event) {

            },
            dragHandler(event) {

            },
            dragEndHandler(event) {
            },
        },
        created() {
        },
        mounted() {
            this.viewer = OpenSeadragon(this.options);
            this.viewer.addTiledImage({
                tileSource: "http://openseadragon.github.io/example-images/highsmith/highsmith.dzi",
            });

            var overlay = this.viewer.paperjsOverlay();
            new OpenSeadragon.MouseTracker({
                element: this.viewer.canvas,
                pressHandler: this.pressHandler,
                dragHandler: this.dragHandler,
                dragEndHandler: this.dragEndHandler
            }).setTracking(true);

            window.onresize = () => {
                overlay.resize();
                overlay.resizecanvas();
            }
        }
    }
</script>

<style scoped>

</style>