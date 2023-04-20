<template>
  <nav class="fixed left-0 top-0 w-full z-50 transition duration-300" :class="{
    'bg-web-navbar opacity-95 py-1 px-4 border-b': scrolledY > 0,
    'py-1 px-6': scrolledY === 0
  }">
    <div class="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-7 lg:px-8 duration-300" :class="{
      'py-0': scrolledY > 0,
      'py-1': scrolledY === 0
    }">
      <div class="flex items-center">
        <a href="https://chillax.today" target="_self" rel="author">
        <img class="w-auto duration-300" src="/images/logo/chillaxSombras.svg" :class="{
          'md:h-[60px] h-[35px]': scrolledY > 0,
          'md:h-[70px] h-[50px]': scrolledY === 0
        }" alt="logo">
        </a>
      </div>
      <div class="hidden md:flex text-white text-shadow-0">
        <router-link to="/" class=" transition duration-200 ease-in-out hover:text-web-boton mx-4" >
          Tendencias
        </router-link>
        <router-link to="/movies" class=" transition duration-200 ease-in-out hover:text-web-boton mx-4">
          Películas
        </router-link>
        <router-link to="/shows" class=" transition duration-200 ease-in-out hover:text-web-boton mx-4">
            Series
          </router-link>
        <router-link to="/about" class=" transition duration-200 ease-in-out hover:text-web-boton mx-4">
          Nosotros
        </router-link>
      </div>
      <div class="flex md:hidden">
        <button @click="isMenuOpen = true" type="button"
          class="bg-gray-400 opacity-50 inline-flex items-center justify-center rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-300" :class="{
            'p-1.5': scrolledY > 0,
            'p-2': scrolledY === 0
          }" aria-label="open menu button">
          <img class="menu-button md:hidden cursor-pointer my-auto h-[30px] black" src="/images/icons/menu.svg"
            alt="menu icon">
        </button>
        <transition enter-active-class="transition ease-out duration-100 transform translate-x-full right-0" enter-class="opacity-0"
      enter-to-class="opacity-100 translate-x-0" leave-active-class="transition ease-in duration-100 transform translate-x-0"
      leave-class="opacity-100" leave-to-class="opacity-0 translate-x-full">
          <div v-if="isMenuOpen" class="fixed inset-0 z-40" @click.self="isMenuOpen = false">
            <div @click="isMenuOpen = false" type="button" class="absolute inset-0 bg-gray-600 opacity-75"></div>
            <div class="fixed top-0 right-0 h-full w-4/5 max-w-xs md:w-1/2 lg:w-1/3 bg-web-fondo z-50 shadow-lg overflow-y-auto">
              <div class="py-4 px-6 border-b border-gray-200 text-right">
                <button @click="isMenuOpen = false" type="button">
                  <img class='close-menu-button h-8 black self-end' src="/images/icons/cancel.svg"
                    alt="close menu button" />
                  </button>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <router-link to="/" @click="isMenuOpen = false" type="button" class="-m-3 p-3 flex items-center hover:bg-gray-100 transition ease-in-out duration-150">
                    <span class="ml-3 text-base font-bold text-gray-900">TENDENCIAS</span>
                  </router-link>
                  <router-link to="/movies" @click="isMenuOpen = false" type="button" class="-m-3 p-3 flex items-center hover:bg-gray-100 transition ease-in-out duration-150">
                    <span class="ml-3 text-base font-bold text-gray-900">PELÍCULAS</span>
                  </router-link>
                  <router-link to="/shows" @click="isMenuOpen = false" type="button" class="-m-3 p-3 flex items-center hover:bg-gray-100 transition ease-in-out duration-150">
                    <span class="ml-3 text-base font-bold text-gray-900">Series</span>
                  </router-link>
                  <router-link to="/about" @click="isMenuOpen = false" type="button" class="-m-3 p-3 flex items-center hover:bg-gray-100 transition ease-in-out duration-150">
                      <span class="ml-3 text-base font-bold text-gray-900">Nosotros</span>
                    </router-link>
                </nav>
              </div>
              <div class="flex gap-5 px-6 justify-center mt-10">
                      <a aria-label="Link to our instagram" href="https://www.instagram.com/chillax.today/" target="_blank">
                        <img class="social filter black h-6 cursor-pointer hover:scale-105 duration-500 ease-in-out"
                          src="/images/icons/instagram.svg" alt="" />
                      </a>
                      <a aria-label="Link to our twitter" href="https://twitter.com/chillax_today" target="_blank">
                        <img class="social filter black h-6 cursor-pointer hover:scale-105 duration-500 ease-in-out"
                          src="/images/icons/twitter.svg" alt="" />
                      </a>
                      <a aria-label="Link to our facebook" href="https://www.facebook.com/profile.php?id=100091128542122"
                        target="_blank">
                        <img class="social filter black h-6 cursor-pointer hover:scale-105 duration-500 ease-in-out"
                          src="/images/icons/facebook.svg" alt="" />
                      </a>
                  </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </nav>
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