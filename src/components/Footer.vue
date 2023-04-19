<template>
    <div class="flex flex-col justify-center items-center fixed bottom-0 left-0 w-full max-h-11 bg-gray-900 font-montserrat text-xs font-light text-white transition duration-300"
         :class="{
            'opacity-60': scrolledY > 0,
            'opacity-100': scrolledY === 0
            }">
        <hr class="w-full m-0 p-0">
          <p class="m-0 text-[0.6rem] ">© CHILLAX 2023</p>
          <p class="api-disclaimer text-[0.5rem] transition duration-300 " :class="{
            'hidden': scrolledY > 0 , 
            'inline': scrolledY === 0 
          }"> This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
          <img src="/images/logo/TMDB_long.svg" alt="Logo de TMDB" class="api-logo h-16 w-16 transition duration-300" :class="{
            'hidden': scrolledY > 0 , 
            'inline': scrolledY === 0 
          }">
    </div>
</template>

<script>
  import { reactive, toRefs, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const state = reactive({
      scrolledY: 0,
      isMenuOpen: false
    });

    const handleScroll = () => {
      state.scrolledY = window.scrollY;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      ...toRefs(state)
    };
  }
}
</script>

<style lang="scss" scoped>

</style>