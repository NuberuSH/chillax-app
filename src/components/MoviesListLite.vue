<template>
    <div v-if="!isError">
        <LoadingScreen v-if="isLoading"></LoadingScreen>
        <div id="movie-list"
            class="grid grid-cols-6 gap-5 mb-7 max-[600px]:grid-cols-2 max-[800px]:grid-cols-3 max-[900px]:mr-5 max-[750px]:mr-6">
            <router-link v-for="movie in moviesList"
                class="movie flex flex-col mb-2 rounded-lg text-stone-300 text-sm font-light bg-web-bgCard hover:text-white hover:scale-110 hover:duration-200 hover:cursor-pointer"
                :key="movie.id" :to="{ name: 'detailedInfo', params: { id: movie.id, contentType: 'movie' } }">
                <img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                    :alt="`Poster de la película: ${movie.name}`" class="rounded-t-lg aspect-[5/8]">
                <img v-else src="/images/icons/no-disponible.webp" class="rounded-t-lg aspect-[5/8]">
                <div class="flex justify-center items-center">
                    <div class="p-3">{{ movie.title }}</div>
                </div>
            </router-link>
        </div>
    </div>
    <div v-else>
        <ErrorLoading></ErrorLoading>

    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ErrorLoading from '../components/ErrorLoading.vue';
import LoadingScreen from '../components/LoadingScreen.vue';

export default {
    setup() {
        const moviesList = ref([]);
        const page = ref(1)
        const selectedGenre = ref();
        const contentType = ref('movie');
        const isLoading = ref(true);
        const isError = ref(false);


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
                isLoading.value = false;
            } catch (error) {
                console.error(error);
                isError.value = true;
            }
        });

        return {
            moviesList,
            isLoading,
            isError,
        };
    },
};
</script>

<style lang="scss" scoped>

</style>