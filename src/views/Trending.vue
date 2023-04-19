<template>
  <div class="">
    <div class="container mb-20 mt-16">
      <h2 class="section-title">Películas</h2>
      <hr>
      <MoviesListLite></MoviesListLite>
      <router-link to="/movies" class="show-more">Mostrar más películas</router-link>
    <div id="series">
       <h2 class="section-title">Series</h2>
       <hr>
       <TvShowsListLite></TvShowsListLite>
       <router-link to="/shows" class="show-more">Mostrar más series</router-link>
     </div>
    </div>
  </div>
</template>

<script>
import MoviesListLite from '../components/MoviesListLite.vue';
import TvShowsListLite from '../components/TvShowsListLite.vue';

export default {
    setup() {},
  components: {
    MoviesListLite,
    TvShowsListLite,
  }
};
</script>

<style>
@import '../assets/catalog.css';
</style>