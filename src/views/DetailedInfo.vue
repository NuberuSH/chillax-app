<template>
    <div class="boxShadow w-4/5 mt-36 mb-36 mx-auto rounded-xl bg-web-card text-white shadow-3xl flex flex-col self-center sm:h-fit">
        <div class='go-back hover:bg-web-boton2 w-fit py-1 px-2 text-xl cursor-pointer rounded-md inline-block shadow-lg ml-4 mt-4' @click="returnToList()">Volver atrás</div>
        <h1 class="text-3xl text font-semibold self-center mb-4 md:mb-6 mt-7 md:mt-0 mx-1">{{ movieData.title }}</h1>
        <hr class="w-4/5 self-center"/>
        <div class="flex flex-col md:flex-row ml-0 md:ml-10 justify-center mt-4">
          <img :src="'https://image.tmdb.org/t/p/w500' + movieData.poster_path" :alt="'Portada de la película ' + movieData.title" class="mt-5 mb-4 w-1/2 h-full md:w-1/5 md:h-1/4 rounded-lg self-center md:self-center sm:mb-7">
          <div id="info-body" class="flex flex-col ml-0 sm:ml-20 md:ml-10 self-center w-4/5 md:w-3/5 md:text-left sm:text-center md:text-xl">
            <div class="additional-info self-center w-4/5 h-max-content md:mb-3.5">
              <p class="self-end w-400 leading-230">Fecha de estreno: {{ movieData.release_date }}</p>
              <p class="runtime">Duración: {{movieData.runtime}} minutos</p>
            </div>
            <div class="sinopsis md:mx-auto md:w-4/5 leading-230 md:mt-2/5 sm:w-4/5 mt-5 sm:self-start ml-0 mb-8">{{movieData.overview}}
            </div>      
          </div>
        </div>
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  
  export default {
    props: {
      id: Number,
      type: String,
     },
    setup(props) {
      const movieData = ref({});
      onMounted(() => {
          showMovieInfo()
      })
      const showMovieInfo = () => {
        fetch(`https://api.themoviedb.org/3/${props.type}/${props.id}?api_key=039e4f7f61c4c831908c02f8c3e9aba0&language=es-ES`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          movieData.value = data;     
          const additionalInfo = document.getElementsByClassName('additional-info')[0];
          /*if (data.runtime > 0) {
            additionalInfo.innerHTML += `<p class="runtime">Duración: ${data.runtime} minutos</p>`;
          }*/
          const genres = document.createElement('p');
          genres.className = 'genres';
          genres.innerText = 'Género/s: ';
          for (let i = 0; i < data.genres.length; i++) {
            if (i < data.genres.length - 1) {
              genres.innerText += `${data.genres[i].name}, `;
            } else {
              genres.innerText += `${data.genres[i].name}`;
            }
          }
          additionalInfo.appendChild(genres);
          const networks = document.createElement('p');
          networks.className = 'networks';
          networks.innerText = 'Productoras: ';
          for (let i = 0; i < data.production_companies.length; i++) {
            if (i < data.production_companies.length - 1) {
              networks.innerText += `${data.production_companies[i].name}, `;
            } else {
              networks.innerText += `${data.production_companies[i].name}`;
            }
          }
          additionalInfo.appendChild(networks);
          const infoBody = document.getElementById("info-body");
          //infoBody.innerHTML += `<div class="sinopsis">${data.overview}</div>`;
        })
        .catch(error => {
          console.error(error);
        });
      }
  
      const returnToList = () => {

      }
  
      return {
        movieData,
        showMovieInfo,
        returnToList
      }
    }
  }
  </script>
  
  <style scoped>
    /*@import "../assets/catalog.css";*/
    .boxShadow {
  box-shadow: inset 0 0 3em 3em rgb(5 0 0 / 26%), 0 0 20px rgb(29 29 29 / 60.5%), 1em 1em 10em rgb(255 255 255 / 29.9%);
  border: 2px solid #383737;
  
}

  </style>