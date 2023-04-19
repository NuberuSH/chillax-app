<template>
    <div>
        <button @click="scrollToTop" id="scroll-top-button" class="fixed right-2 bottom-11 px-3 py-1 hover:px-4 hover:py-2 bg-web-boton rounded-md z-5 transition duration-75" :class="{
            'hidden': scrolledY < 700,
            'block' : scrolledY > 700
        }">
        ⬆
    </button>
    </div>
</template>

<script>
import { reactive, toRefs, onMounted, onUnmounted } from 'vue';

export default {
    setup() {
        const state = reactive({
            scrolledY: 0,
        });

        const handleScroll = () => {
            state.scrolledY = window.scrollY;
        };

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            ...toRefs(state),
            scrollToTop
        };
    }
}
</script>

<style lang="scss" scoped>

</style>