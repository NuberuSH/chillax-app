<template> 
  <div>
    <div id="container" class="max-w-screen-7xl flex flex-col w-full h-full bg-web-fondoAbout font-montserrat text-lg font-light text-white mx-auto p-4">
      <header class="flex flex-row justify-center h-90 bg-web-headerAbout mb-4">
        <a href="/" class="text-white no-underline">
          <img src="/images/logo/chillaxSombras.svg" alt="logo" id="logoc" />
        </a>
        <ul class="navbar lg:text-shadow lg:text-white lg:list-none lg:text-2xl flex items-center">
          <li id="about" class="hover:text-gray-500 hover:no-underline p-3"><a href='/catalog/catalog.html'>Catálogo</a>
          </li>            
        </ul>
      </header>

      <h1 class="block self-center text-3xl font-bold my-2 max-w-max text-gray-200 text-shadow mb-5">Los Linces</h1>
      <p class="text-center text-gray-200 text-shadow text-base lg:text-lg mb-5">"Somos un grupo de cinco programadores apasionados y trabajadores, siempre en busca de nuevos desafíos y aventuras
        emocionantes. Desde el principio, hemos puesto todo nuestro empeño en conseguir un buen resultado, basándonos en
        la comunicación y el debate continuo para alcanzar el objetivo de nuestra página. Al igual que un lince en el
        bosque, este grupo posee una aguda percepción y una gran habilidad para adaptarse al entorno y enfrentar nuevos
        desafíos, lo que nos permite tener éxito en nuestras misiones. Porque no es lo que hacemos, es lo que somos."
        <br> <strong class="text-10px">*Dale al play si quieres saber más sobre cada uno de nosotros*</strong>
      </p>

      <hr class="mx-1 my-3 border-gray-300">

      <div class="grid md:grid-cols-5 gap-30 mt-25 font-semibold text-center grid-cols-2 text-gray-200 self-center">
        <figure>
            <img class="img1" src="/images/profilepic/carla.png" alt="Carla">
          <figcaption>Carla <br> Gómez Abad
            <div class="additional-content" >
              <button  @click="seeMoreButton">
                <img class="hover:rotate-90 delay-100 duration-300 h-14 w-14" src="/images/logo/play.svg" alt="Ver más">
              </button>
                <div class="more-text additional" v-show="showText">
                  <p class="text-14px font-light text-white mx-2 p-2">Soy una profesional dedicada, creativa y polivalente con más de siete años de
                    experiencia atendiendo al público, así como en ventas y administración. Tengo experiencia tanto en
                    España como en el Reino unido, por lo que soy muy adaptable.</p>
                  <a class="hover:text-red-500 italic text-16px font-extrabold " href="https://www.linkedin.com/in/cgabad/" target="_blank">LinkedIn.</a>
                </div> 
            </div>
          </figcaption>
        </figure>
        <figure>
            <img class="img2" src="/images/profilepic/Adri.png" alt="Adrián">
          <figcaption> Adrián <br> Jiménez Fernández
            <div class="additional-content" >
              <button  @click="seeMoreButton">
                <img class="hover:rotate-90 delay-100 duration-300 h-14 w-14" src="/images/logo/play.svg" alt="Ver más">
              </button>
                <div class="more-text additional" v-show="showText">
                  <p class="text-14px font-light text-white mx-2 p-2">He finalizado recientemente un CFGS de Desarrollo de Aplicaciones Web y busco mi primer empleo en el
                    sector para seguir ampliando conocimientos y comenzar mi carrera profesional.
                    Actualmente realizando un bootcamp de programación frontend en la EOI.</p>
                  <a class="hover:text-red-500 italic text-16px font-extrabold " href="https://www.linkedin.com/in/adrian-jimenez-fernandez/" target="_blank">LinkedIn.</a>
                </div> 
            </div>
          </figcaption>
        </figure>
        <figure>
            <img class="img3" src="/images/profilepic/patri.png" alt="Patricia">
          <figcaption>Patricia <br> Samudio Cabrera
            <div class="additional-content" >
              <button  @click="seeMoreButton">
                <img class="hover:rotate-90 delay-100 duration-300 h-14 w-14" src="/images/logo/play.svg" alt="Ver más">
              </button>
                <div class="more-text additional" v-show="showText">
                  <p class="text-14px font-light text-white mx-2 p-2">Soy diseñadora gráfica y estudiante de desarrollo FrontEnd, apasionada por el diseño y la tecnología.
                  He estado aprendiendo sobre la metodología Scrum para la gestión de proyectos de desarrollo
                  de software, con mi compromiso por mejorar y mantenerme actualizada en el campo de la tecnología.</p>
                  <a class="hover:text-red-500 italic text-16px font-extrabold " href="https://www.linkedin.com/in/patricia-cabrera-088b2a8b/" target="_blank">LinkedIn.</a>
               </div> 
            </div>
          </figcaption>
        </figure>
        <figure>
            <img class="img4" src="/images/profilepic/dani2.png" alt="Daniel">
          <figcaption>Daniel<br> Tallón Ortega
            <div class="additional-content" >
              <button  @click="seeMoreButton">
                <img class="hover:rotate-90 delay-100 duration-300 h-14 w-14" src="/images/logo/play.svg" alt="Ver más">
              </button>
                <div class="more-text additional" v-show="showText">
                  <p class="text-14px font-light text-white mx-2 p-2">Actualmente realizando un bootcamp de programación frontend en la Escuela de Organización Industrial.
                    </p>
                  <a class="hover:text-red-500 italic text-16px font-extrabold " href="https://linkedin.com/in/daniel-tallon" target="_blank">LinkedIn.</a>
                </div> 
            </div>
          </figcaption>
        </figure>
        <figure>
            <img class="img5" src="/images/profilepic/rosa.png" alt="Rosa">
          <figcaption>
            Rosa<br> Jiménez Martínez
            <div class="additional-content" >
              <button  @click="seeMoreButton">
                <img class="hover:rotate-90 delay-100 duration-300 h-14 w-14" src="/images/logo/play.svg" alt="Ver más">
              </button>
                <div class="more-text additional" v-show="showText">
                  <p class="text-14px font-light text-white mx-2 p-2">Actualmente realizando un bootcamp de programación frontend en la Escuela de Organización Industrial.</p>
                  <a class="hover:text-red-500 italic text-16px font-extrabold " href="https://www.linkedin.com/in/rosa-jiménez-martínez-915170256/" target="_blank">LinkedIn.</a>
                </div> 
            </div>
          </figcaption>
        </figure>
      </div>
      <div class="footer">
        <footer class="flex flex-col items-center border-t-2 border-gray-400 mt-10">
          <p class="mt-4">© CHILLAX 2023</p>
        </footer>
      </div>
    </div>   
  </div> 
</template>
  
<script>
import { remove } from '@vue/shared'

export default {
    data() {
    return {
      showText: false,
    };
  },  
  methods: {
    seeMoreButton() {
      this.showText = true;
    }
  }
};
</script>
  
<style lang="scss" scoped>
    #container {
    width: 100%;
    margin: 0 auto;
    background-color: rgb(45, 45, 45);
  }
</style>
  