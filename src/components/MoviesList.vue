<template>
    <div>
        <div id="movie-list" class="grid grid-cols-5 gap-5 mb-7 max-[600px]:grid-cols-2 max-[800px]:grid-cols-3 max-[900px]:mr-5 max-[750px]:mr-6">
            <router-link v-for="movie in moviesList" class="movie mb-2 rounded-lg text-stone-300 text-sm font-light bg-web-bgCard hover:text-white hover:scale-110 hover:duration-200 hover:cursor-pointer" :key="movie.id"
                :to="{ name: 'detailedInfo', params: { id: movie.id, contentType: 'movie' } }">
                <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                    :alt="`Poster of the movie: ${movie.name}`" />
                <div class="movie-footer">
                    <div class="p-3">{{ movie.title }}</div>
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