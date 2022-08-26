<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.colr
        span 1
      h1 Documentación para el turismo
    
    p.mb-5        El acercamiento a las Ciencias Sociales (en este caso, la Historia Universal y de Colombia) permite la exploración hacia una fuente de conocimientos amplia y diversa, pues no solo son pilares fundamentales en la educación, sino que implican el devenir mismo de la humanidad y de lo que somos actualmente como nación.

    figure(data-aos="zoom-in")
      img(src='@/assets/curso/tema1/t1-1.png', alt='Texto que describa la imagen')
    
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Historia de la humanidad
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-out")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/t1-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0  Para hablar de la historia de la humanidad, es importante reconocer el contexto de historia, el cual define “historia” (del latín historia, y este del griego ἱστορία) como “[la] narración y exposición de los acontecimientos pasados y dignos de memoria, sean públicos o privados”, al igual que “[la] disciplina que estudia y narra cronológicamente los acontecimientos pasados” (Real Academia Española, s. f.); su estudio permitirá el conocimiento y reflexión de hechos, acontecimientos y personajes claves en el devenir de la humanidad.
    
    p.mb-5 Para ello, y teniendo en cuenta que la versión de la historia que ha llegado a la actualidad es la eurocentrista, es indispensable hacer un acercamiento preliminar a cada una de sus etapas cronológicas, como a continuación verá:

    .tarjeta.bgr.p-4(data-aos="flip-left")
      PasosB.color-acento-contenido
        .row(titulo="Prehistoria").d-flex.justify-content-around.align-items-center
          .col-md-5.mb-4.mb-md-0
            p.mb-0 Se comprende como “[el] periodo de la humanidad anterior a todo documento escrito y que solo se conoce por determinados vestigios, como construcciones, instrumentos, huesos humanos o de animales, [y otros]” (Real Academia Española, 2020).
          .col-md-4.mt-0.mt-md-5.mb-0.mb-md-5
            figure
              img(src='@/assets/curso/tema1/t1-3.png', alt='Texto que describa la imagen')
        .row(titulo="Edad Antigua").d-flex.justify-content-around.align-items-center
          .col-md-5.mb-4.mb-md-0
            p.mb-0 Tras la aparición del hombre en la tierra y el devenir de varias dinámicas a lo largo de los milenios, como pasar de ser nómada y cazador a sedentario y establecerse en un territorio, descubrir la agricultura y el intercambio de productos (origen del comercio).
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/t1-4.png', alt='Texto que describa la imagen')
        .row(titulo="Edad Media").d-flex.justify-content-around.align-items-center
          .col-md-5.mb-4.mb-md-0
            p.mb-0 Este milenio en la historia de la humanidad (de los siglos V a XV) se caracteriza por el oscurantismo (rechazo y prohibición de la cultura y las ciencias), el monoteísmo (la creencia en un único Dios), el feudalismo (economía rural de vasallos y nobles). 
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/t1-5.png', alt='Texto que describa la imagen')
        .row(titulo="Edad Moderna").d-flex.justify-content-around.align-items-center
          .col-md-5.mb-4.mb-md-0
            p.mb-0 Cambios a finales del siglo XVIII. Es así como la independencia de Estados Unidos (1776) y la Revolución Francesa (1789-1799) marcan el fin de esta era, surgiendo de ellas los estados nación, las constituciones y la Declaración de los Derechos del Hombre y del Ciudadano, en particular. (Academia Play, 2017).    
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/t1-6.png', alt='Texto que describa la imagen')
        .row(titulo="Edad Contemporánea").d-flex.justify-content-around.align-items-center
          .col-md-5.mb-4.mb-md-0
            p.mb-0 Transformado el mundo a finales del siglo XVIII, los siglos XIX, XX y parte del XXI, la primera y segunda guerras mundiales (de 1914 a 1918, y de 1939 a 1945, respectivamente), el surgimiento de las potencias mundiales, la guerra fría, los viajes espaciales, el ascenso y caída de la “Cortina de Hierro”.    
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/t1-7.png', alt='Texto que describa la imagen')

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Historia de Colombia. Generalidades
    
    p.mb-5 Conocidas las edades de la historia universal, es importante estudiar también el devenir local a través de sus diferentes periodos históricos. Obsérvelos a continuación:

    SlyderB.mb-5.bgr_1(:datos="datosSlyder")(data-aos="flip-right")


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: '',
        texto:
          'En este espacio, se ilustra cómo la historia de manera cronológica ha logrado intervenir en nuestra cultura colombiana; se comienza con la Prehistoria, que, al igual que en el resto del mundo, el actual territorio colombiano tiene un amplio pasado prehistórico.',
        imagen: require('@/assets/curso/tema1/t1-8.png'),
      },
      {
        titulo: '',
        texto:
          'De igual manera, el Periodo Indígena estuvo caracterizado por la aparición del hombre en el continente americano (Rivet, 1964); los vestigios más antiguos encontrados hasta el momento en el actual territorio colombiano son los pictogramas del Parque Nacional Natural Serranía de Chiribiquete (departamentos de Guaviare y Caquetá).',
        imagen: require('@/assets/curso/tema1/t1-9.png'),
      },
      {
        titulo: '',
        texto:
          'Poco a poco, se fue ampliando la visión del mismo territorio, por ello, entonces, se da el Descubrimiento y la Conquista; aunque efímero (1492-1550), este periodo histórico marca el encuentro de las culturas europea y nativa americana. La primera ciudad construida por españoles en tierra firme americana fue Santa María La Antigua del Darién (Unguía, Chocó), en 1510 (Instituto Colombiano de Antropología e Historia, 2019).',
        imagen: require('@/assets/curso/tema1/t1-10.png'),
      },
      {
        titulo: '',
        texto:
          'Siguiendo a los periodos anteriores, se presenta el Periodo Colonial, establecido tras la llegada de la Real Audiencia (órgano de justicia español) a Santafé, en 1550, es una de las épocas más extensas de la historia de Colombia (269 años). Caracterizada por la consolidación del poder español en el territorio americano (desde el sur de EEUU hasta Patagonia).',
        imagen: require('@/assets/curso/tema1/t1-11.png'),
      },
      {
        titulo: '',
        texto:
          'Poco a poco, las comunidades se fueron adaptando a las realidades que surgían en cada uno de estos periodos; uno de los que mayor impacto cobró fue el de la Independencia y la República, suscitados en el siglo XIX; este periodo histórico implica la emancipación del Imperio Español, entre 1810 (grito de independencia) y 1819 (batalla de Boyacá), creándose entonces la República de Colombia (1819) y de la Gran Colombia (1821).',
        imagen: require('@/assets/curso/tema1/t1-12.png'),
      },
      {
        titulo: '',
        texto:
          'Años más tarde, se presenta el periodo contemporáneo: siglos XX y XXI. Una de las consecuencias del conflicto bipartidista de finales del siglo XIX e inicios del XX será la separación de Panamá (1903) y la llamada “Hegemonía Conservadora”, que se mantendrá hasta 1930, año en el que los liberales ganan las elecciones presidenciales. Se establece entonces la “República Liberal”, seguida luego por gobiernos conservadores (1946-1953), la dictadura militar (1953-1957), y el denominado “Frente Nacional” (1958-1974).',
        imagen: require('@/assets/curso/tema1/t1-13.png'),
      },
      {
        titulo: '',
        texto:
          'Los periodos antes descritos demuestran la evolución y adaptación de la sociedad a sus propias realidades, lo que además abre la puerta a reconocer las posibilidades del mundo que nos rodea y cómo, a través de la historia, nuestros inicios fueron reconociendo cada uno de estos hitos para sus progresos, luchas y vivencias.',
        imagen: require('@/assets/curso/tema1/t1-14.png'),
      },
    ],
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
