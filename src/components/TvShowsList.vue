<template>
    <div>
       <div id="series-list">
         <router-link v-for="tvShow in tvShowsList" :key="tvShow.id" class="tvShow" :to="{ name: 'home', params: {id: tvShow.id}}">
           <img :src="`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`" :alt="`Poster of the movie: ${tvShow.name}`">
           <div class="movie-footer">
             <div>{{ tvShow.name }}</div>
           </div>
         </router-link>
         <div ref="lastShowRef"></div>
       </div>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

export default {
    props: {
        selectedGenre: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const tvShowsList = ref([]);
        const page = ref(1)
        const selectedGenre = ref(props.selectedGenre);
        const contentType = ref('tv');
        const lastShowRef = ref();
        let observer;


        const getTvShows = async () => {
            try {
                const response = await axios.get('/.netlify/functions/getContent', {
                    params: {
                        page: page.value,
                        selectedGenre: selectedGenre.value,
                        contentType: contentType.value
                    }
                });
                page.value = response.data.page;
                tvShowsList.value = [...tvShowsList.value, ...response.data.results];
            } catch (error) {
                console.error(error);
            }
        };

        // Verifies when observer collides, increments page and get new batch
        const handleObserver = async ([entry]) => {
            if (entry.isIntersecting) {
                page.value += 1;
                await getTvShows();
            }
        };
        // Request next batch when intersecting lastMovieRef 200px up
        onMounted(async () => {
            await getTvShows();
            observer = new IntersectionObserver(handleObserver, { rootMargin: '0px 0px 200px 0px' });
            observer.observe(lastShowRef.value);
        });

        // Reset page when genre changes
        watch(
            () => props.selectedGenre,
            async (newValue, oldValue) => {
                if (newValue !== oldValue) {
                    page.value = 1;
                    selectedGenre.value = newValue;
                    tvShowsList.value = [];
                    await getTvShows();
                }
            }
        );

        return {
            tvShowsList,
            lastShowRef
        };
    },
};
</script>

<style lang="scss" scoped>

</style>