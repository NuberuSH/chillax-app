<template>
    <div v-if="isMovie" class="boxShadow w-4/5 mt-28 mb-24 mx-auto rounded-xl bg-web-card text-white shadow-3xl flex flex-col self-center sm:h-fit">
        <div class='go-back hover:bg-web-boton2 w-fit py-1 px-2 text-xl cursor-pointer rounded-md inline-block shadow-lg ml-4 mt-4'
           >Volver atrás</div>
        <h1 class="text-3xl text font-semibold self-center mb-4 md:mb-6 mt-7 md:mt-0 mx-1">{{ contentData.title }}</h1>
        <h1 class="text-3xl text font-semibold self-center mb-4 md:mb-6 mt-7 md:mt-0 mx-1">{{ contentData.name }}</h1>
        <hr class="w-4/5 self-center"/>
        <div class="flex flex-col md:flex-row ml-0 md:ml-10 justify-center mt-4">
          <img :src="'https://image.tmdb.org/t/p/w500' + contentData.poster_path" :alt="'Portada de la película ' + contentData.title" 
                class="mt-5 mb-4 w-1/2 h-full md:w-1/5 md:h-1/4 rounded-lg self-center md:self-center sm:mb-7">
          <div id="info-body" class="flex flex-col ml-0 sm:ml-20 md:ml-10 self-center w-4/5 md:w-3/5 md:text-left sm:text-center md:text-xl">
            <div class="additional-info self-center w-4/5 h-max-content md:mb-3.5">
              <p class="self-end w-400 leading-230">Fecha de estreno: {{ contentData.release_date }}</p>
              <p class="runtime">Duración: {{ contentData.runtime }} minutos</p>
            </div>
            <div class="sinopsis md:mx-auto md:w-4/5 leading-230 md:mt-2/5 sm:w-4/5 mt-5 sm:self-start ml-0 mb-8">{{ contentData.overview }}
            </div>      
          </div>
        </div>
    </div>
        <div v-if="isTvShow" class="boxShadow w-4/5 mt-36 mb-36 mx-auto rounded-xl bg-web-card text-white shadow-3xl flex flex-col self-center sm:h-fit">
            <div class='go-back hover:bg-web-boton2 w-fit py-1 px-2 text-xl cursor-pointer rounded-md inline-block shadow-lg ml-4 mt-4'
            >Volver atrás</div>
            <h1 class="text-3xl text font-semibold self-center mb-4 md:mb-6 mt-7 md:mt-0 mx-1">{{ contentData.title }}</h1>
            <h1 class="text-3xl text font-semibold self-center mb-4 md:mb-6 mt-7 md:mt-0 mx-1">{{ contentData.name }}</h1>
            <hr class="w-4/5 self-center"/>
            <div class="flex flex-col md:flex-row ml-0 md:ml-10 justify-center mt-4">
              <img :src="'https://image.tmdb.org/t/p/w500' + contentData.poster_path" :alt="'Portada de la película ' + contentData.title" 
                    class="mt-5 mb-4 w-1/2 h-full md:w-1/5 md:h-1/4 rounded-lg self-center md:self-center sm:mb-7">
              <div id="info-body" class="flex flex-col ml-0 sm:ml-20 md:ml-10 self-center w-4/5 md:w-3/5 md:text-left sm:text-center md:text-xl">
                <div class="additional-info self-center w-4/5 h-max-content md:mb-3.5">
                  <p class="self-end w-400 leading-230">Fecha de estreno: {{ contentData.release_date }}</p>
                  <p class="runtime">Duración: {{ contentData.runtime }} minutos</p>
                </div>
                <div class="sinopsis md:mx-auto md:w-4/5 leading-230 md:mt-2/5 sm:w-4/5 mt-5 sm:self-start ml-0 mb-8">{{ contentData.overview }}
                </div>      
              </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref, reactive, watchEffect } from 'vue';

export default {
    props: {
        id: Number,
        contentType: String
    },

    setup(props) {
        const contentData = ref([]);
        const id = ref(props.id);
        const contentType = ref(props.contentType);
        const whatType = reactive({
            isMovie: false,
            isTvShow: false
        });

        onMounted(async () => {
            try {
                const response = await axios.get('/.netlify/functions/getDetailedInfo', {
                    params: {
                        contentType: contentType.value,
                        id: id.value
                    }
                })
                contentData.value = response.data;
            } catch (error) {

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
        console.log('es pelicula', whatType.isMovie);
        console.log('es serie', whatType.isTvShow);
        const isMovie = whatType.isMovie;
        const isTvShow = whatType.isTvShow;


        return {
            contentData,
            isMovie,
            isTvShow
        }
    }
}
</script>

<style lang="css" scoped>
.boxShadow {
  box-shadow: inset 0 0 3em 3em rgb(5 0 0 / 26%), 0 0 20px rgb(29 29 29 / 60.5%), 1em 1em 10em rgb(255 255 255 / 29.9%);
  border: 2px solid #383737;
  
}

</style>