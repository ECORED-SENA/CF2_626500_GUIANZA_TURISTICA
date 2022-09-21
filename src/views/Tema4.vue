<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.colr
        span 4
      h1 Ecología
    
    .bg_grad-03
      p.mb-5 Las relaciones que se construyen en el medio ambiente permiten la relación que se produce entre los diferentes ecosistemas, es así como la Ecología se reconoce como ciencia que estudia las relaciones biológicas entre diferentes organismos y elementos de su entorno o medio físico. Desde el punto de vista etimológico, el estudio de la casa y sus habitantes (RAE, s. f.). 
      
      .row.mb-5.justify-content-center(data-aos="zoom-in")
        .col-12.col-md-5
          figure
            img(src='@/assets/curso/tema4/t4-1.svg', alt='Texto que describa la imagen')
    
    .row.mb-5
      .col-12.col-md-6(data-aos="fade-right")
        p.colr_1.text-bold En el ámbito del turismo, es clave observar de forma técnica y objetiva la importancia de las diferentes formas de interrelacionamiento que posibilitan un equilibrio en los ecosistemas.
        p En Colombia, la ecología ha venido desarrollando estudios interesantes, tanto en áreas protegidas como en áreas urbanas. Hoy en día, las prácticas de investigación científica, el turismo y diferentes actores sociales se vinculan para entender el efecto que tienen las acciones humanas sobre los ecosistemas y sus especies, así como la generación de un cambio de conciencia a partir de actividades de aviturismo, por ejemplo, las cuales permiten a habitantes locales descubrir y proteger el mundo que yace oculto a su alrededor.
      .col-12.col-md-6(data-aos="fade-left")
        .cajon.bgr_10.p-5
          .row  
            .col-12.col-lg-2.mb-3.mb-lg-0
              figure.d-flex.justify-content-center
                img.img80(src='@/assets/curso/tema4/t4-2.svg', alt='Texto que describa la imagen')
            .col-12.col-lg-10
              p.mb-0 Cada vez más, se observa la interacción de las ciencias y el turismo. El turismo científico como una tipología, pero también la necesidad de capacitarse y especializarse en los ecosistemas locales, que resultan todo un atractivo por su particularidad y sus especies endémicas y amenazadas.
    
    .bg_grad-05
      p.mb-5 El ambiente es un concepto que se ha transformado en las últimas décadas, desde la comprensión básica de un espacio contenedor de elementos, luego como una despensa de recursos, que además debía ser dominada y aprovechada por la humanidad, durante un largo periodo, hasta pasada la segunda guerra mundial, cuando se empezaron a evidenciar consecuencias de la revolución industrial y otros efectos en los ecosistemas. Por ello, en la cumbre de Estocolmo en 1972, se realizaron declaraciones para un cambio en los modelos de producción y consumo que introdujera el criterio ambiental. El concepto evolucionó para incluir el lugar y el efecto del ser humano y la sociedad en general, junto con las actividades antrópicas, como parte del sistema global de actores que interactúan y determinan cambios en los ecosistemas y las condiciones ambientales globales.

    .row.mb-5.justify-content-between
      .col-12.col-md-5.mb-3.mb-md-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/t4-3.png', alt='Texto que describa la imagen')
      .col-12.col-md-6(data-aos="fade-right")
        .bg_grad-06
          p.colr_1.text-bold Para Colombia, la ubicación geoespacial permite que sus ecosistemas jueguen un papel importante en el ambiente a nivel global, por ello, el estudio de esto es crucial para su comprensión y adecuada interpretación.
        p La dinámica de captura de carbono en los bosques, la capacidad de producción hídrica de los páramos son aspectos que pueden y están cambiando con el cambio climático. Por tanto, la coherencia y el compromiso entre los diferentes actores de la sociedad, como lo es el sector turismo, posibilitan un desarrollo sostenible efectivo.
        p El ecosistema es definido como el complejo de comunidades, poblaciones e individuos de diferentes especies que se puede denominar como unidad por la forma como la materia se organiza y circula por diferentes niveles en el tiempo.  Es así como las moléculas de agua, los átomos de carbono o nitrógeno circulan a través de los organismos cuando estos los ingieren, luego, al desechar los residuos, estos se descomponen y posteriormente son absorbidos por el sistema de raíces de las plantas, y luego son nuevamente ofrecidos en frutos o diferentes formas. Observe a continuación:
    
    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bgr_11(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/t4-4.svg')})`}")
            .tarjeta-flip__contenido.px-5.pst_3
              p <b>Biodiversidad:</b> Se entiende como el fenómeno, la singularidad, la variedad y diversificación en las formas de vida, subsistencia y adaptabilidad para sobrevivir en un ecosistema con determinadas condiciones ambientales.  
              p.mb-0 Representa la diversidad de especies animales y vegetales que se interrelacionan con el medio que los rodea.
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bgr_12(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/t4-5.svg')})`}")
            .tarjeta-flip__contenido.px-5.pst_3
              p <b>Ecoevolución:</b> Es el proceso adaptativo entre dos especies que conviven e interactúan, que les permite ajustar su forma o conducta para responder a la necesidad o dependencia de la otra especie. 
              p.mb-0 El turismo ecológico, aunque recientemente nace por la necesidad de valorar y contemplar la fauna y la flora, no solo por conocer, sino por preservar y cuidar el medio ambiente desde una mirada diferente.

 

    


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
