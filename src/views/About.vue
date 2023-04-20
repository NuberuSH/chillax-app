<template>
  <div>
    <div id="container" 
    class="max-w-screen-7xl flex flex-col w-full h-full font-montserrat text-lg font-light text-white mb-6 p-4 overflow-x-hidden">
      <h1 class="block self-center text-3xl font-bold mb-5 mt-20 max-w-max text-gray-200 text-shadow ">Los Linces</h1>
      <p class="text-center text-gray-200 text-shadow text-base lg:text-lg mb-5">"Somos un grupo de cinco
        programadores* apasionados y trabajadores, siempre en busca de nuevos desafíos y aventuras
        emocionantes. Desde el principio, hemos puesto todo nuestro empeño en conseguir un buen resultado,
        basándonos en la comunicación y el debate continuo para alcanzar el objetivo de nuestra página. Al igual 
        que un lince en el bosque, este grupo posee una aguda percepción y una gran habilidad para adaptarse al 
        entorno y enfrentar nuevos desafíos, lo que nos permite tener éxito en nuestras misiones.
         Porque no es lo que hacemos, es lo que somos."
        <br> <strong class="text-xs">* Dale al play si quieres saber más sobre nosotros</strong>
      </p>
      <hr class="mx-1 my-3 border-gray-300">
      <div class="grid md:grid-cols-5 gap-30 mt-25 font-semibold text-center grid-cols-1 text-gray-200 self-center">
        <figure v-for="(member, index) in members" :key="member.name">
          <img :class="'img' + (index + 1)" :src="'/images/profilepic/' + member.image" :alt="member.name">
          <figcaption>{{ member.name }} <br> {{ member.surname }}
            <div class="additional-content">
              <button class="focus:rotate-90 duration-300 transform transition" @click="seeMoreButton(index)" :class="{
                'rotate-90': isButtonClicked}" @mousedown="isButtonClicked = true" @mouseup="isButtonClicked = false">
                <img class="h-10 w-10" src="/images/logo/play2.svg" alt="Ver más">
              </button>
              <div class=" text-adittional " v-show="member.showText" ref="moreText">
                <p class="text-xm font-light text-white mx-2 p-2">{{ member.description }}</p>
                <a class="hover:text-red-500 italic text-16px font-extrabold " :href="member.linkedin"
                  target="_blank">LinkedIn.</a>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          name: 'Carla',
          surname: 'Gómez Abad',
          image: 'carla.webp',
          description: 'Soy una profesional polivalente con más de siete años de experiencia atendiendo al público. Siempre me ha llamado la atención el mundo de la programación.',
          linkedin: 'https://www.linkedin.com/in/cgabad/',
          showText: false
        },
        {
          name: 'Adrián',
          surname: 'Jiménez Fernández',
          image: 'Adri.webp',
          description: 'He finalizado recientemente un C.S. de Desarrollo de Aplicaciones Web, me encanta el desafío que presenta el trabajo en este campo.',
          linkedin: 'https://www.linkedin.com/in/adrian-jimenez-fernandez/',
          showText: false
        },
        {
          name: 'Patricia',
          surname: 'Samudio Cabrera',
          image: 'patri.webp',
          description: 'Después de más de cinco años trabajando en el sector del diseño y el calzado, busco nuevos retos de aprendizaje en el Desarrollo Web.',
          linkedin: 'https://www.linkedin.com/in/patriciasamudiocabrera/',
          showText: false
        },
        {
          name: 'Daniel',
          surname: 'Tallón Ortega',
          image: 'dani2.webp',
          description: 'He estudiado A.S.I.R. y también he completado un curso de desarrollo Fullstack. Me gusta mantenerme actualizado con las últimas tendencias en informática.',
          linkedin: 'https://linkedin.com/in/daniel-tallon/',
          showText: false
        },
        {
          name: 'Rosa',
          surname: 'Jiménez Martínez',
          image: 'rosa.webp',
          description: 'Anteriormente me dedicaba a la cocina, pero me di cuenta de que mi verdadera pasión es el mundo de la tecnología. Ahora estoy enfocada en mejorar mis habilidades en el desarrollo web.',
          linkedin: 'https://www.linkedin.com/in/rosa-jiménez-martínez-915170256/',
          showText: false
        },
      ],
    }
  },
  methods: {
    seeMoreButton(index) {
      this.members.forEach((member, i) => {
        if (i === index) member.showText = !member.showText;
        else member.showText = false;
      });
      this.$nextTick(() => {
        const moreTextElement = this.$refs.moreText[index];
        moreTextElement.scrollIntoView({ behavior: 'smooth' });
      });
    },
    
  }
};
</script>

<style>

</style>