<template>
    <div class="mt-36">
        <select v-model="selectedGenre" class="text-stone-300 text-sm font-light bg-web-bgCard p-2 rounded mb-10 hover:text-white">
            <option selected disabled hidden value="">Selecciona un género</option>
            <option value="">Todos</option>
            <option v-for="genre in genreList" :value="genre.id" :key="genre.id" >
                {{ genre.name }}
             </option>
        </select>
        <TvShowsList :selectedGenre="selectedGenre"></TvShowsList>
        <ScrollTopButton></ScrollTopButton>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import TvShowsList from '../components/TvShowsList.vue';
import ScrollTopButton from '../components/ScrollTopButton.vue';

export default {
    setup() {
        const genreList = ref([]);
        const selectedGenre = ref('');
        watch(selectedGenre, () => {
            console.log('debería hacer la petición', selectedGenre.value)
        })
        onMounted(async () => {
            try {
                const response = await axios.get('/.netlify/functions/getGenres', {
                    params: {
                        contentType: 'tv',
                    }
                });
                genreList.value = response.data.genres.slice();
            } catch (error) {
                console.error(error);
            }
        });

        return {
            genreList,
            selectedGenre
        };
    },
    components: { TvShowsList, ScrollTopButton }
}
</script>

<style lang="scss" scoped>

</style>