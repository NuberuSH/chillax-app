<template>
<LoadingScreen v-if="isLoading"></LoadingScreen>
  <div class="mb-20 mt-24">
    <div class="container">
      <div id="movies">
        <h2 class="section-title mb-5 text-3xl text-stone-300">Películas</h2>
        <MoviesListLite></MoviesListLite>
        <router-link to="/movies" class="show-more border-2 text-sm border-web-movieBgInlist bg-web-movieBgInlist text-stone-300 p-1.5 rounded hover:text-white hover:bg-red-500 hover:cursor-pointer transition duration-1000 hover:scale-200">Mostrar más películas</router-link>
      </div>
      <hr class="mt-5 mb-5">
      <div id="series">
       <h2 class="section-title mb-5 text-3xl text-stone-300">Series</h2>
       <TvShowsListLite></TvShowsListLite>
       <router-link to="/shows" class="show-more border-2 text-sm border-web-movieBgInlist bg-web-movieBgInlist text-stone-300 p-1.5 rounded hover:text-white hover:bg-red-500 hover:cursor-pointer transition duration-1000 hover:scale-200">Mostrar más series</router-link>
     </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import MoviesListLite from '../components/MoviesListLite.vue';
import TvShowsListLite from '../components/TvShowsListLite.vue';
import LoadingScreen from '../components/LoadingScreen.vue';

export default {
    setup() {
    const isLoading = ref(true);

    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 1000)
    });



    return {
      isLoading
    };
    },
  components: {
    MoviesListLite,
    TvShowsListLite,
    LoadingScreen
  }
};
</script>

<style>
.movie, .tv-show {
  box-shadow: 0 0 22px 1px rgb(0 0 0 / 10%);
}

.movie:hover, .tv-show:hover {
  box-shadow: 0 0 22px 3px rgb(0 0 0 / 25%);
}

.show-more:hover {
  transform: scale(1.04);
}
</style>