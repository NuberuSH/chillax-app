<template>
    <div>
       <div id="movie-list" class="grid-cols-5">
         <router-link v-for="movie in moviesList" :key="movie.id" class="movie" :to="{ name: 'home', params: {id: movie.id}}">
           <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="`Poster of the movie: ${movie.name}`">
           <div class="movie-footer">
             <div>{{ movie.title }}</div>
           </div>
         </router-link>
       </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const moviesList = ref([]);
        const page = ref()
        onMounted(async () => {
            try {
                const response = await axios.get('/.netlify/functions/getMovies', {
                    params: {
                        page: page.value,
                    }
                });
                page.value = response.data.page;
                moviesList.value = response.data.results.slice();
            } catch (error) {
                console.error(error);
            }
        });

        return {
            moviesList,
        };
    },
};
</script>

<style scoped>

</style>