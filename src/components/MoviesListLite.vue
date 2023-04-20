<template>
    <div>
       <div id="series-list" class="grid grid-cols-6 gap-5 mb-7">
         <router-link v-for="movie in moviesList" :key="movie.id" class="movie text-stone-300 rounded-lg text-sm font-light bg-web-bgCard hover:text-white hover:scale-110 hover:duration-200 hover:cursor-pointer" :to="{ name: 'detailedInfo', params: { id: movie.id, contentType: 'movie' } }">
           <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="`Poster of the movie: ${movie.name}`">
           <div class="movie-footer">
             <div class="p-3">{{ movie.title }}</div>
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
        const selectedGenre = ref();
        const contentType = ref('movie');
        onMounted(async () => {
            try {
                const response = await axios.get('/.netlify/functions/getContent', {
                    params: {
                        page: page.value,
                        selectedGenre: selectedGenre.value,
                        contentType: contentType.value
                    }
                });
                page.value = response.data.page;
                moviesList.value = response.data.results.slice(0, 6);
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

<style lang="scss" scoped>

</style>