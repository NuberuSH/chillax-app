<template>
    <div v-if="contentData">

        <div v-if="isMovie" class="boxShadow w-4/5 mt-24 mb-24 mx-auto rounded-xl bg-web-card text-white shadow-3xl flex flex-col self-center sm:h-fit">
            <div class='go-back hover:bg-web-boton2 w-fit py-1 px-2 text-l cursor-pointer rounded-md inline-block shadow-lg ml-4 mt-4'
               >Volver atrás</div>
            <h1 class="text-2xl text-center overflow-ellipsis h-auto font-semibold self-center mb-4 md:mb-6 mt-7 md:mt-0 mx-1"><span v-if="contentData.title">{{ contentData.title }}</span><span v-else>Título no disponible</span></h1>
            <hr class="w-4/5 self-center"/>
            <div class="flex flex-col md:flex-row ml-0 md:ml-10 justify-center mt-4">
              <img v-if="contentData.poster_path" :src="'https://image.tmdb.org/t/p/w500' + contentData.poster_path" :alt="'Portada de la película ' + contentData.title" 
                    class="mt-5 mb-4 w-1/2 h-full md:w-1/5 md:h-1/4 rounded-lg self-center md:self-center sm:mb-7">
              <img v-else src="/images/icons/no-disponible.webp" class="mt-5 mb-4 w-1/2 h-full md:w-1/5 md:h-1/4 rounded-lg self-center md:self-center sm:mb-7">
              <div id="info-body" class="flex flex-col ml-0 sm:ml-20 md:ml-10 self-center w-4/5 md:w-3/5 md:text-left sm:text-center text-sm">
                <div class="additional-info self-center w-4/5 h-max-content md:mb-3.5">
                  <p class="self-end w-400 leading-230">Fecha de estreno: <span v-if="contentData.release_date">{{ contentData.release_date }}</span> <span v-else>No hay datos disponibles</span></p>
                  <p class="runtime">Duración: <span v-if="contentData.runtime">{{ contentData.runtime }} minutos</span><span v-else>No hay datos disponibles</span></p>
                </div>
                <div class="sinopsis md:mx-auto md:w-4/5 leading-230 md:mt-2/5 sm:w-4/5 mt-5 sm:self-start ml-0 mb-8">Sinopsis: <span v-if="contentData.overview">{{ contentData.overview }}</span><span v-else>No hay datos disponibles</span>
                </div>      
              </div>
            </div>
        </div>
            <div v-if="isTvShow" class="boxShadow w-4/5 mt-24 mb-24 mx-auto rounded-xl bg-web-card text-white shadow-3xl flex flex-col self-center sm:h-fit">
                <div class='go-back hover:bg-web-boton2 w-fit py-1 px-2 text-l cursor-pointer rounded-md inline-block shadow-lg ml-4 mt-4'
                >Volver atrás</div>
                <h1 class="text-2xl text-center overflow-ellipsis h-auto font-semibold self-center mb-4 md:mb-6 mt-7 md:mt-0 mx-1">{{ contentData.name }}</h1>
                <hr class="w-4/5 self-center"/>
                <div class="flex flex-col md:flex-row ml-0 md:ml-10 justify-center mt-4">
                  <img v-if="contentData.poster_path" :src="'https://image.tmdb.org/t/p/w500' + contentData.poster_path" :alt="'Portada de la película ' + contentData.name" 
                        class="mt-5 mb-4 w-1/2 h-full md:w-1/5 md:h-1/4 rounded-lg self-center md:self-center sm:mb-7">
                  <img v-else src="/images/icons/no-disponible.webp" class="mt-5 mb-4 w-1/2 h-full md:w-1/5 md:h-1/4 rounded-lg self-center md:self-center sm:mb-7">
                  <div id="info-body" class="flex flex-col ml-0 sm:ml-20 md:ml-10 self-center w-4/5 md:w-3/5 md:text-left sm:text-center text-sm">
                    <div class="additional-info self-center w-4/5 h-max-content md:mb-3.5">
                      <p class="self-end w-400 leading-230">Fecha de primera emisión: <span v-if="contentData.first_air_date">{{ contentData.first_air_date }}</span><span v-else>No hay datos disponibles</span></p>
                      <p class="self-end w-400 leading-230">Fecha de última emisión: <span v-if="contentData.last_air_date">{{ contentData.last_air_date }}</span><span v-else>No hay datos disponibles</span></p>
                      <p class="self-end w-400 leading-230">Temporadas: <span v-if="contentData.number_of_seasons">{{ contentData.number_of_seasons }}</span><span v-else>No hay datos disponibles</span></p>
                      <p class="self-end w-400 leading-230">Capítulos en total: <span v-if="contentData.number_of_episodes">{{ contentData.number_of_episodes }}</span><span v-else>No hay datos disponibles</span></p>
                      <p class="self-end w-400 leading-230">
                        
                        Género/s: <span v-if="contentData.genres">
                                    <template v-for="(genre, index) in contentData.genres" :key="genre.id">
                                       <span >{{ genre.name }}</span>
                                       <span v-if="index < contentData.genres.length - 1">, </span>
                                       <span v-else>.</span>
                                     </template>
                                    </span>
                                  <span v-else>No hay datos disponibles</span>
                    </p>
                    </div>
                    <div class="sinopsis md:mx-auto md:w-4/5 leading-230 md:mt-2/5 sm:w-4/5 mt-5 sm:self-start ml-0 mb-8">Sinopsis: <span v-if="contentData.overview">{{ contentData.overview }}</span><span v-else>No hay datos disponibles</span>
                    </div>      
                  </div>
                </div>
            </div>
        </div>
    <div v-else>
        <LoadingScreen v-if="isLoading"></LoadingScreen>
        <ErrorLoading v-else></ErrorLoading>
    </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref, reactive, watchEffect } from 'vue';
import LoadingScreen from '../components/LoadingScreen.vue';
import ErrorLoading from '../components/ErrorLoading.vue';

export default {
    props: {
        id: Number,
        contentType: String
    },

    setup(props) {
        const contentData = ref(null);
        const id = ref(props.id);
        const contentType = ref(props.contentType);
        const whatType = reactive({
            isMovie: false,
            isTvShow: false
        });
        const contentExists = ref(false);
        const isLoading = ref(true);

        onMounted(async () => {
            try {
                const response = await axios.get('/.netlify/functions/getDetailedInfo', {
                    params: {
                        contentType: contentType.value,
                        id: id.value
                    }
                })
                contentData.value = response.data;
                console.log('si');
                console.log('aqui vale', contentExists);
            } catch (error) {
                setTimeout(() => {
                    isLoading.value = false;
                }, 1000);
            }
        });

        watchEffect(() => {
            if (contentType.value === 'movie') {
                whatType.isMovie = true;
                whatType.isTvShow = false;
                console.log('es pelicula', contentType.value);
                return whatType
            } else if (contentType.value === 'tv') {
                whatType.isMovie = false;
                whatType.isTvShow = true;
                console.log('es serie', contentType.value);
                return whatType
            } else {
                console.log('no estoy recogiendo el valor de contentType', contentType.value);
            };
        });

        onMounted(() => {
            setTimeout(() => {
                isLoading.value = false;
            }, 5000)
        });

        console.log('es pelicula', whatType.isMovie);
        console.log('es serie', whatType.isTvShow);
        const isMovie = whatType.isMovie;
        const isTvShow = whatType.isTvShow;
        console.log('el valor de genres.name es', contentData);
        console.log('contentExis vale', contentExists);
        console.log('contentData.genres vale', contentData.genres);




        return {
            contentData,
            isMovie,
            isTvShow,
            isLoading
        }
    },
    components: { LoadingScreen, ErrorLoading }
}
</script>

<style lang="css" scoped>
.boxShadow {
  box-shadow: inset 0 0 3em 3em rgb(5 0 0 / 26%), 0 0 20px rgb(29 29 29 / 60.5%), 1em 1em 10em rgb(255 255 255 / 29.9%);
  border: 2px solid #383737;
  
}

</style>