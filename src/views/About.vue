<template> 
  <div>
    <div id="container" class="max-w-screen-7xl flex flex-col w-full h-full bg-web-fondoAbout font-montserrat text-lg font-light text-white mx-auto p-4">
      <header class="flex flex-row justify-center h-90 bg-web-headerAbout mb-4">
        <a href="/" class="text-white no-underline">
          <img src="/images/logo/chillaxSombras.svg" alt="logo" id="logoc" />
        </a>
        <ul class="navbar lg:text-shadow lg:text-white lg:list-none lg:text-2xl flex items-center " >
          <li id="about" class="hover:text-gray-500 hover:no-underline p-3"><a href='/catalog/catalog.html'>Catálogo</a>
          </li>            
        </ul>
      </header>

      <h1 class="block self-center text-3xl font-bold my-2 max-w-max text-gray-200 text-shadow mb-5">Los Linces</h1>
      <p class="text-center text-gray-200 text-shadow text-base lg:text-lg mb-5">"Somos un grupo de cinco programadores* apasionados y trabajadores, siempre en busca de nuevos desafíos y aventuras
        emocionantes. Desde el principio, hemos puesto todo nuestro empeño en conseguir un buen resultado, basándonos en
        la comunicación y el debate continuo para alcanzar el objetivo de nuestra página. Al igual que un lince en el
        bosque, este grupo posee una aguda percepción y una gran habilidad para adaptarse al entorno y enfrentar nuevos
        desafíos, lo que nos permite tener éxito en nuestras misiones. Porque no es lo que hacemos, es lo que somos."
        <br> <strong class="text-xs">* Dale al play si quieres saber más sobre nosotros</strong>
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
                  <p class="text-xm font-light text-white mx-2 p-2">Soy una profesional polivalente con más de siete años de
                    experiencia atendiendo al público. Recientemente he empezado a estudiar Desarrollo Web Frontend, después de haber terminado 
                    mis estudios de FullStack ya que la programación es algo que siempre me ha interesado.</p>
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
                  <p class="text-xm font-light text-white mx-2 p-2">He finalizado recientemente un C.S. de Desarrollo de Aplicaciones Web y 
                    ahora me encuentro enfocado en aprender desarrollo web Frontend y estoy disfrutando mucho de este proceso de aprendizaje.
                    Me encanta el desafío que presenta el trabajo en este campo, y el trabajo en equipo.</p>
                  <a class="hover:text-red-500 italic text-20px font-extrabold " href="https://www.linkedin.com/in/adrian-jimenez-fernandez/" target="_blank">LinkedIn.</a>
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
                  <p class="text-xm font-light text-white mx-2 p-2">Después de más de cinco años trabajando en el sector del diseño 
                    y el calzado, busco nuevos retos de aprendizaje, y la tecnología, siendo tan amplia, es un mundo lleno de oportunidades.
                    Por eso, en el Desarrollo Web, busco un nuevo camino profesional y crecer en el sector tecnológico.</p>
                  <a class="hover:text-red-500 italic text-16px font-extrabold " href="https://www.linkedin.com/in/patriciasamudiocabrera/" target="_blank">LinkedIn.</a>
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
                  <p class="text-xm font-light text-white mx-2 p-2">He estudiado administración de sistemas informáticos y también he completado un curso de
                     desarrollo Fullstack. Me gusta mantenerme actualizado con las últimas tendencias en informática y resolver problemas complejos para mejorar la experiencia del usuario.
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
                  <p class="text-xm font-light text-white mx-2 p-2">Anteriormente me dedicaba a la cocina, pero me di cuenta de que mi verdadera pasión es el mundo de la tecnología. 
                    Decidí dar un giro a mi carrera y me inscribí en un curso de desarrollo Fullstack, el cual completé con éxito. Ahora estoy enfocada en mejorar mis habilidades en el desarrollo Frontend.</p>
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
      if (this.showText) {
        this.showText = false;
      } else {
        this.showText = true;
      }
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
  