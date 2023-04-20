<template>
    <div v-if="!isError">
        <LoadingScreen v-if="isLoading"></LoadingScreen>
       <div id="series-list" class="grid grid-cols-5 gap-5 mb-7 max-[600px]:grid-cols-2 max-[800px]:grid-cols-3 max-[900px]:mr-5 max-[750px]:mr-6">
         <router-link v-for="tvShow in tvShowsList" :key="tvShow.id" class="tvShow flex flex-col mb-2 rounded-lg text-stone-300 text-sm font-light bg-web-bgCard hover:text-white hover:scale-110 hover:duration-200 hover:cursor-pointer" :to="{ name: 'detailedInfo', params: {id: tvShow.id, contentType: 'tv'}}">
            <img v-if="tvShow.poster_path" :src="`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`" :alt="`Poster de la serie: ${tvShow.name}`" class="rounded-t-lg aspect-[5/8]">
            <img v-else src="/images/icons/no-disponible.webp" class="rounded-t-lg aspect-[5/8]">
           <div class="movie-footer">
             <div class="p-3">{{ tvShow.name }}</div>
           </div>
         </router-link>
         <div ref="lastShowRef"></div>
       </div>
    </div>
        <div v-else>
            <ErrorLoading></ErrorLoading>

        </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import LoadingScreen from '../components/LoadingScreen.vue';
import ErrorLoading from '../components/ErrorLoading.vue';

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
        const isLoading = ref(true);
        const isError = ref(false);
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
                isLoading.value = false;
            } catch (error) {
                console.error(error);
                isError.value = true;
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
                    isLoading.value = true;
                    page.value = 1;
                    selectedGenre.value = newValue;
                    tvShowsList.value = [];
                    await getTvShows();
                }
            }
        );

        return {
            tvShowsList,
            lastShowRef,
            isLoading,
            isError
        };
    },
    components: { LoadingScreen, ErrorLoading }
};
</script>

<style lang="scss" scoped>

</style>