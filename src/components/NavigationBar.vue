<template>
  <nav class="fixed left-0 top-0 w-full z-10 duration-300" :class="{
    'bg-gray-100 py-2 px-4 border-b': scrolledY > 0,
    'py-1 px-6': scrolledY === 0
  }">
    <div class="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-7 lg:px-8 duration-300" :class="{
      'py-2': scrolledY > 0,
      'py-4': scrolledY === 0
    }">
      <div class="flex items-center">
        <img class="h-[40px] w-auto duration-300" src="/images/logo/chillaxSombras.svg" :class="{
          'md:h-[30px]': scrolledY > 0,
          'md:h-[70px]': scrolledY === 0
        }" alt="logo">
      </div>
      <div class="hidden md:flex">
        <a href="#" class="text-gray-600 transition duration-150 ease-in-out hover:text-gray-800 mx-4">
          Home
        </a>
        <a href="#" class="text-gray-600 transition duration-150 ease-in-out hover:text-gray-800 mx-4">
          About
        </a>
        <a href="#" class="text-gray-600 transition duration-150 ease-in-out hover:text-gray-800 mx-4">
          Services
        </a>
      </div>
      <div class="flex md:hidden">
        <button @click="isMenuOpen = true" type="button"
          class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <transition enter-active-class="transition ease-out duration-100 transform" enter-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-75 transform"
          leave-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          <div v-if="isMenuOpen" class="fixed inset-0 z-40" @click.self="isMenuOpen = false">
            <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
            <div class="fixed top-0 right-0 h-full w-4/5 md:w-1/2 lg:w-1/3 bg-white z-50 shadow-lg overflow-y-auto">
              <div class="flex items-center justify-between py-4 px-6 border-b border-gray-200">
                <div>
                  <img class="h-8 w-auto" src="/images/logo.png" alt="My Logo">
                </div>
                <div class="-mr-2">
                  <button @click="isMenuOpen = false" type="button"
                    class="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 transition duration-150 ease-in-out">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-8">
                  <a href="#" class="-m-3 p-3 flex items-center hover:bg-gray-100 transition ease-in-out duration-150">
                    <svg class="flex-shrink-0 h-6 w-6 text-gray-600" stroke="currentColor" fill="none"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5v14l11-7z"></path>
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-600">Home</span>
                  </a>
                  <a href="#" class="-m-3 p-3 flex items-center hover:bg-gray-100 transition ease-in-out duration-150">
                    <svg class="flex-shrink-0 h-6 w-6 text-gray-600" stroke="currentColor" fill="none"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-600">About</span>
                  </a>
                  <a href="#" class="-m-3 p-3 flex items-center hover:bg-gray-100 transition ease-in-out duration-150">
                    <svg class="flex-shrink-0 h-6 w-6 text-gray-600" stroke="currentColor" fill="none"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15v-3a7 7 0 00-14 0v3">
                      </path>
                    </svg>
                    <span class="ml-3 text-base font-medium text-gray-600">Services</span>
                  </a>
                </nav>
                <div class="mt-8">
                  <div class="flex justify-center">
                    <a href="#" class="mx-4 text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out">
                      <span class="sr-only">Facebook</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h8.803v-6.961h-2.247v-2.716h2.247v-1.942c0-2.224 1.358-3.431 3.324-3.431.944 0 1.753.07 1.987.101v2.307l-1.357.001c-1.069 0-1.277.509-1.277 1.248v1.633h2.552l-.333 2.717h-2.219v6.961h4.327a1 1 0 001-1V4a1 1 0 00-1-1z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" class="mx-4 text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out">
                      <span class="sr-only">Twitter</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M23.998 4.556a9.558 9.558 0 01-2.749.753 4.772 4.772 0 002.088-2.63 9.69 9.69 0 01-3.005 1.147 4.817 4.817 0 00-8.187 4.385 13.657 13.657 0 01-9.93-5.028 4.77 4.77 0 001.48 6.379 4.747 4.747 0 01-2.164-.6v.06a4.814 4.814 0 003.854 4.708 4.805 4.805 0 01-2.157.081 4.816 4.816 0 004.487 3.33A9.66 9.66 0 011 16.191a13.648 13.648 0 007.383 2.164c8.91 0 13.788-7.766 13.788-14.516 0-.222-.007-.445-.015-.668a9.882 9.882 0 002.425-2.526z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </a>
                    <a href="#" class="mx-4 text-gray-500 hover:text-gray-600 transition duration-150 ease-in-out">
                      <span class="sr-only">LinkedIn</span>
                      <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd"
                          d="M20.184 3H3.815A1.825 1.825 0 002 4.815v16.37c0 1.007.818 1.825 1.815 1.825h16.37a1.825 1.825 0 001.825-1.825V4.815A1.825 1.825 0 0020.184 3zm-8.604 14.172h-2.79v-7.8h2.79v7.8zm-1.395-8.865c-.938 0-1.698-.76-1.698-1.698 0-.937.76-1.697 1.698-1.697.936 0 1.697.76 1.697 1.697 0 .938-.76 1.698-1.697 1.698zM16.65 13.23h-2.79v-1.185c0-.25-.18-.43-.43-.43-.25 0-.43.18-.43.43v1.185h-2.79v-7.8h2.37l.03 1.33h.04c.33-.63 1.135-1.3 2.335-1.3 2.495 0 2.96 1.645 2.96 3.785v4.085zm0 0"
                          clip-rule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
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