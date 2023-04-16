<template>
  <div class="">
    <div class="container mb-20 mt-16">
      <h2 class="section-title">Películas</h2>
      <hr>
      <div id="movie-list"></div>
      <div class="show-more" @click="redirectToMovies()">Mostrar más películas</div>
      <div id="series">
        <h2 class="section-title">Series</h2>
        <hr>
        <div id="series-list"></div>
        <div class="show-more" @click="redirectToSeries()">Mostrar más series</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const movieList = ref(null);
    const seriesList = ref(null);

    const getMovies = async () => {
      const list = movieList.value;
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=039e4f7f61c4c831908c02f8c3e9aba0&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1}`);
      const data = await response.json();
      for (let i = 0; i < 6; i++) {
        list.innerHTML += `
        <div id="${data.results[i].id}" class="movie" @click="showMovieInfo(${data.results[i].id})">
          <img class="poster" src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="Poster de la película ${data.results[i].title}">
          <div class="movie-footer">
            <div class="title">${data.results[i].title}</div>
          </div>
        </div>`;
      }
    };

    const getSeries = async () => {
      const list = seriesList.value;
      const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=039e4f7f61c4c831908c02f8c3e9aba0&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1}`);
      const data = await response.json();
      for (let i = 0; i < 6; i++) {
        list.innerHTML += `
        <div id="${data.results[i].id}" class="serie" @click="showSerieInfo(${data.results[i].id})">
          <img class="poster" src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" alt="Poster de la película ${data.results[i].original_name}">
          <div class="movie-footer">
            <div class="title">${data.results[i].original_name}</div>
          </div>
        </div>`;
      }
    };

    const showSerieInfo = async (idSerie) => {
      const container = document.querySelector(".container");
      container.className = "serie-info-container";
      container.innerHTML = "<div class='go-back' @click='returnToList()'>Volver atrás\n</div><h1 id='serie-title'></h1>\n<hr>";
      const serieTitle = document.getElementById("serie-title");
      const smallContainer = document.createElement("div");
      smallContainer.className = "small-container";

      const response = await fetch(`https://api.themoviedb.org/3/tv/${idSerie}?api_key=039e4f7f61c4c831908c02f8c3e9aba0&language=es-ES`);
      const data = await response.json();
      container.innerHTML += `
        <div class="small-container">
            <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="Portada de la serie ${data.name}" id="serie-poster">
            <div id="info-body">
            <div class="additional-info">
                <p class="release-date">Primera emisión: ${data.first_air_date}</p>            
            </div>
            </div>
        </div>`;
      const additionalInfo = document.getElementsByClassName("additional-info");
      if (data.episode_run_time > 0) {
        additionalInfo[0].innerHTML += `<p class="runtime">Duración aproximada episodio: ${data.episode_run_time} minutos</p>`;
      }
      const genres = document.createElement("p");
      genres.className = "genres";
      genres.innerText = "Género/s: ";
      for (let i = 0; i < data.genres.length; i++) {
        if (i < data.genres.length - 1) {
          genres.innerText += `${data.genres[i].name}, `;
        } else {
          genres.innerText += `${data.genres[i].name}`;
        }
      }
      additionalInfo[0].appendChild(genres);
      const infoBody = document.getElementById("info-body");
      infoBody.innerHTML += `<div class="sinopsis">${data.overview}</div>`;
    };

    const showMovieInfo = async (idMovie) => {
      let container = document.querySelector(".container");
      container.className = "movie-info-container";
      container.innerHTML = "<div class='go-back' @click='returnToList()'>Volver atrás\n</div><h1 id='movie-title'></h1>\n<hr>";
      let movieTitle = document.getElementById("movie-title");
      let smallContainer = document.createElement("div");
      smallContainer.className = "small-container";

      const response = await fetch(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=039e4f7f61c4c831908c02f8c3e9aba0&language=es-ES`);
      const data = await response.json();
      container.innerHTML += `
        <div class="small-container">
            <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="Portada de la película ${data.name}" id="movie-poster">
            <div id="info-body">
            <div class="additional-info">
                <p class="release-date">Fecha de estreno: ${data.first_air_date}</p>            
            </div>
            </div>
        </div>`;
      const additionalInfo = document.getElementsByClassName("additional-info");
      if (data.episode_run_time > 0) {
        additionalInfo[0].innerHTML += `<p class="runtime">Duración: ${data.episode_run_time} minutos</p>`;
      }
      const genres = document.createElement("p");
      genres.className = "genres";
      genres.innerText = "Género/s: ";
      for (let i = 0; i < data.genres.length; i++) {
        if (i < data.genres.length - 1) {
          genres.innerText += `${data.genres[i].name}, `;
        } else {
          genres.innerText += `${data.genres[i].name}`;
        }
      }
      additionalInfo[0].appendChild(genres);
      const infoBody = document.getElementById("info-body");
      infoBody.innerHTML += `<div class="sinopsis">${data.overview}</div>`;
    };

    const returnToList = () => {
      const container = document.querySelector(".container");
      container.className = "";
      container.innerHTML = `
        <h2 class="section-title">Películas</h2>
        <hr>
        <div id="movie-list"></div>
        <div class="show-more" @click="redirectToMovies()">Mostrar más películas</div>
        <div id="series">
          <h2 class="section-title">Series</h2>
          <hr>
          <div id="series-list"></div>
          <div class="show-more" @click="redirectToSeries()">Mostrar más series</div>`;
      getMovies();
      getSeries();
    };

    const redirectToMovies = () => {
      location.href = "../peliculas/peliculas.html";
    };

    const redirectToSeries = () => {
      location.href = "../series/series.html";
    };

    onMounted(() => {
      movieList.value = document.getElementById("movie-list");
      seriesList.value = document.getElementById("series-list");
      getMovies();
      getSeries();
    });

    return {
      getMovies,
      getSeries,
      showSerieInfo,
      showMovieInfo,
      returnToList,
      redirectToMovies,
      redirectToSeries
    };
  }
};
</script>

<style>
@import '../assets/catalog.css';
</style>