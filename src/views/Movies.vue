<template>
    <div class="mt-36">
        <select v-model="selectedGenre">
            <option selected value="">Selecciona un género</option>
            <option value="">Todos</option>
            <option v-for="genre in genreList" :value="genre.id" :key="genre.id" >
            {{ genre.name }}
            </option>
        </select>
        <MoviesList :selectedGenre="selectedGenre"></MoviesList>
    </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import MoviesList from '../components/MoviesList.vue';

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
                        contentType : 'movie',
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
    components: { MoviesList }
}
</script>

<style lang="scss" scoped>

</style>