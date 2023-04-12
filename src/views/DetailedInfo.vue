<template>
    <div class="movie-info-container">
        <div class='go-back' @click="returnToList()">Volver atrás</div>
        <h1 class="movie-h1">{{ movieData.title }}</h1>
        <hr/>
        <div class="small-container">
          <img :src="'https://image.tmdb.org/t/p/w500' + movieData.poster_path" :alt="'Portada de la pelí­cula ' + movieData.title" id="movie-poster">
          <div id="info-body">
            <div class="additional-info">
              <p class="release-date">Fecha de estreno: {{ movieData.release_date }}</p>            
            </div>
          </div>
        </div>
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  
  export default {
    setup() {
      const movieData = ref({});
      onMounted(() => {
showMovieInfo(502356)
})
      const showMovieInfo = (idMovie) => {
        fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=039e4f7f61c4c831908c02f8c3e9aba0&language=es-ES`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          movieData.value = data;     
          const additionalInfo = document.getElementsByClassName('additional-info')[0];
          if (data.runtime > 0) {
            additionalInfo.innerHTML += `<p class="runtime">Duración: ${data.runtime} minutos</p>`;
          }
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
          networks.innerText = 'Red/es: ';
          for (let i = 0; i < data.production_companies.length; i++) {
            if (i < data.production_companies.length - 1) {
              networks.innerText += `${data.production_companies[i].name}, `;
            } else {
              networks.innerText += `${data.production_companies[i].name}`;
            }
          }
          additionalInfo.appendChild(networks);
          const infoBody = document.getElementById("info-body");
          infoBody.innerHTML += `<div class="sinopsis">${data.overview}</div>`;
        })
        .catch(error => {
          console.error(error);
        });
      }
  
      const returnToList = () => {
        page = 1;
        const container = document.getElementById('container');
        container.className = '';
        container.innerHTML = `
          <h2 class="section-title">Pelí­culas</h2>
          <hr>
          <div id="movie-list">
  
          </div>
          <div class="show-more" onclick="redirectToMovies()">Mostrar más pelÃ­culas</div>
          <div id="series">
            <h2 class="section-title">Series</h2>
            <hr>
            <div id="series-list">
  
          </div>
          <div class="show-more" onclick="redirectToSeries()">Mostrar más series</div>`;
        // getGenres();
        getContent();
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
    @import "../assets/catalog.css";
  </style>