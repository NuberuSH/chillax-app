<template>
    <div>
         <header>
          <a href="/" class="header-nav-a">
            <img src="/images/logo/chillaxSombras.svg" alt="logo" id="logoc" />
          </a>
            <ul class="navbar">
              <li class="trending"><a
                  href='/construction/construction.html'>Trending</a>
              </li>
              <li class="about"><a
                  href='/about/about.html'>Quienes somos</a>
              </li>
            </ul>
        </header>
      <div id="container">
        <h2 class="section-title">Películas</h2>
        <hr>
        <div id="movie-list">

        </div>
        <div class="show-more" onclick="redirectToMovies()">Mostrar más películas</div>
        <div id="series">
          <h2 class="section-title">Series</h2>
          <hr>
          <div id="series-list">

        </div>
        <div class="show-more" onclick="redirectToSeries()">Mostrar más series</div>
      </div>
          <footer>
            <p>© CHILLAX 2023</p>
            <p class="api-disclaimer">This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
            <img src="/images/logo/TMDB_long.svg" alt="Logo de TMDB" class="api-logo">
          </footer>
      </div>

    </div>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>