<template>
    <div>
       <div id="series-list">
         <router-link v-for="tvShow in tvShowsList" :key="tvShow.id" class="tvShow" :to="{ name: 'home', params: {id: tvShow.id}}">
           <img :src="`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`" :alt="`Poster of the movie: ${tvShow.name}`">
           <div class="movie-footer">
             <div>{{ tvShow.name }}</div>
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
        const tvShowsList = ref([]);
        const page = ref()
        onMounted(async () => {
            try {
                const response = await axios.get('/.netlify/functions/getTvShows', {
                    params: {
                        page: page.value,
                    }
                });
                page.value = response.data.page;
                tvShowsList.value = response.data.results.slice(0, 6);
            } catch (error) {
                console.error(error);
            }
        });

        return {
            tvShowsList,
        };
    },
};
</script>

<style lang="scss" scoped>

</style>