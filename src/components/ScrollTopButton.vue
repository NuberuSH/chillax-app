<template>
    <div>
        <button @click="scrollToTop" id="scroll-top-button" class="fixed right-0.5 bottom-3 hover:-translate-y-2 hover:scale-110 duration-300 z-5 w-12 h-12" :class="{
            'hidden': scrolledY < 700,
            'block' : scrolledY > 700
        }">
        <img src="/images/icons/scroll.svg" alt="scroll button">
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

<style>

</style>

