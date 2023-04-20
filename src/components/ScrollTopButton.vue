<template>
    <div>
        <button @click="scrollToTop" id="scroll-top-button" class="fixed right-0.5 bottom-2  focus:animate-bounce z-5 w-14 h-14" :class="{
            'hidden': scrolledY < 700,
            'block' : scrolledY > 700
        }">
        <img src="/images/icons/scroll.svg" class="">
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

