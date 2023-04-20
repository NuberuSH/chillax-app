<template>
    <div v-if="!isError">
        <LoadingScreen v-if="isLoading"></LoadingScreen>
        <div id="movie-list" class="grid grid-cols-5 gap-5 mb-7 max-[600px]:grid-cols-2 max-[800px]:grid-cols-3 max-[900px]:mr-5 max-[750px]:mr-6">
            <router-link v-for="movie in moviesList" class="movie flex flex-col mb-2 rounded-lg text-stone-300 text-sm font-light bg-web-bgCard hover:text-white hover:scale-110 hover:duration-200 hover:cursor-pointer" :key="movie.id"
                :to="{ name: 'detailedInfo', params: { id: movie.id, contentType: 'movie' } }">
                     <img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                         :alt="`Poster de la película: ${movie.name}`" class="rounded-t-lg aspect-[5/8]">
                     <img v-else src="/images/icons/no-disponible.webp" class="rounded-t-lg aspect-[5/8]">
                     <div class="flex justify-center items-center">
                         <div class="p-3">{{ movie.title }}</div>
                     </div>
            </router-link>
            <div ref="lastMovieRef"></div>
        </div>
    </div>
    <div v-else>
        <ErrorLoading></ErrorLoading>

    </div>
</template>
<script>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import ErrorLoading from '../components/ErrorLoading.vue';
import LoadingScreen from '../components/LoadingScreen.vue';

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
        const isLoading = ref(true);
        const isError = ref(false);
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
                isLoading.value = false;
            } catch (error) {
                console.error(error);
                isError.value = true;
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
                    isLoading.value = true;
                    page.value = 1;
                    selectedGenre.value = newValue;
                    moviesList.value = [];
                    await getMovies();
                }
            }
        );

        

        return {
            moviesList,
            lastMovieRef,
            isLoading,
            isError,
        };
    },
    components: { LoadingScreen, ErrorLoading, LoadingScreen }
};
</script>
<style scoped></style>