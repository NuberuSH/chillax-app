<template>
    <div>
        <div id="movie-list" class="grid-cols-5">
            <router-link v-for="movie in moviesList" :key="movie.id" class="movie"
                :to="{ name: 'detailedInfo', params: { id: movie.id, contentType: 'movie' } }">
                <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                    :alt="`Poster of the movie: ${movie.name}`" />
                <div class="movie-footer">
                    <div>{{ movie.title }}</div>
                </div>
            </router-link>
            <div ref="lastMovieRef"></div>
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
        const moviesList = ref([]);
        const page = ref(1);
        const selectedGenre = ref(props.selectedGenre);
        const contentType = ref('movie');
        const lastMovieRef = ref();
        let observer;

        // Initial batch request
        const getMovies = async () => {
            try {
                const response = await axios.get('/.netlify/functions/getContent', {
                    params: {
                        page: page.value,
                        selectedGenre: selectedGenre.value,
                        contentType: contentType.value
                    }
                });
                page.value = response.data.page;
                moviesList.value = [...moviesList.value, ...response.data.results];
            } catch (error) {
                console.error(error);
            }
        };

        const handleObserver = async ([entry]) => {
            if (entry.isIntersecting) {
                page.value += 1;
                await getMovies();
            }
        };

        // Request next batch when intersecting lastMovieRef 200px up
        onMounted(async () => {
            await getMovies();
            observer = new IntersectionObserver(handleObserver, { rootMargin: '0px 0px 200px 0px' });
            observer.observe(lastMovieRef.value);
        });

        // Reset page when genre changes
        watch(
            () => props.selectedGenre,
            async (newValue, oldValue) => {
                if (newValue !== oldValue) {
                    page.value = 1;
                    selectedGenre.value = newValue;
                    moviesList.value = [];
                    await getMovies();
                }
            }
        );

        return {
            moviesList,
            lastMovieRef
        };
    }
};
</script>
<style scoped></style>