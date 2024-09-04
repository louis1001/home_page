<script lang=ts>
    import { load } from "./graphics";
    $effect(() => {
        const data = load()
        data.init()
    })
</script>

<section id='canvas-container'></section>

<style lang=sass>
#canvas-container
    position: fixed
    top: 0
    left: 0
    z-index: -99999
    pointer-events: none
    opacity: 1
    mix-blend-mode: multiply

    canvas
        animation: fade-in 1.5s ease-in .2 forwards

@keyframes fade-in
    0%
        opacity: 0
    
    100%
        opacity: 1
</style>