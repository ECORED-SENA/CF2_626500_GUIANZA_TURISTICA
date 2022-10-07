export default {
  global: {
    componenteFormativo: 'Las ciencias al servicio de la guianza',
    descripcionCurso:
      'El guía se enfrenta a la resolución de problemas relacionados con diferentes habilidades y fundamentación con base en competencias sociales y ciencias naturales.  La comprensión y respuesta a preguntas ha sido la evolución de conceptos y momentos que fortalece el perfil y consolida la integralidad de la práctica turística.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Documentación para el turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Historia de la humanidad',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Historia de Colombia. Generalidades',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Cultura',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Patrimonio',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Recurso y atractivo turístico',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Arte. Estilos, movimientos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Arquitectura. Características ',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Geografía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Campos de estudio, de la geografía física a la geografía humana',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Regiones naturales de Colombia ',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Ecología',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Sistema Nacional de Áreas Protegidas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Historia',
      referencia:
        'Cook, M. (2003). Una breve historia de la Humanidad. Antoni Bosch.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/60064?page=1',
    },
    {
      tema: 'Historia',
      referencia:
        'Eggers-Brass, T. y Gallego, M. (2009). Historia II: América indígena y la expansión europea. Editorial Maipue.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/78981?page=1',
    },
    {
      tema: 'Historia',
      referencia:
        'Fornés, L. (2010). Historia Universal: América Latina. Editorial Firmas Press.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/36419?page=1',
    },
    {
      tema: 'Historia',
      referencia:
        'Arias, J. (2011). Historia de Colombia contemporánea (1920-2010). Editorial Universidad de Los Andes.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69371?page=1',
    },
    {
      tema: 'Historia',
      referencia:
        'LaRosa, M. y Mejía, G. (2013). Historia concisa de Colombia (1810-2013): Una guía para lectores desprevenidos. Editorial Pontificia Universidad Javeriana.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69536?page=1',
    },
    {
      tema: 'Arquitectura',
      referencia:
        'Alonso, J. (2005). Introducción a la historia de la arquitectura: de los orígenes al siglo XXI. Editorial Reverté.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/171232?page=1',
    },
    {
      tema: 'Arquitectura',
      referencia: 'Revista Credencial. (s. f.). Credencial Historia.',
      tipo: 'Revista digital',
      link:
        'https://www.revistacredencial.com/historia/serie/arquitectura-en-colombia',
    },
    {
      tema: 'Arte',
      referencia:
        'Carki Productions. (2020). Historia del arte en 10 minutos (y algo más) [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/rUHxLrZwSIY',
    },
    {
      tema: 'Geografía',
      referencia:
        'Sociedad Geográfica de Colombia. (s. f.). Contenido geográfico. ESGEO: Escuela Nacional de Geografía.',
      tipo: 'Página web',
      link:
        'http://observatoriogeograficoamericalatina.org.mx/sociedadgeograficadecolombia.html',
    },
    {
      tema:
        '¿Cómo se hace con Agustín? ¿Qué es la geografía y cómo se estudia?',
      referencia:
        'Instituto Geográfico Agustín Codazzi [IGAC]. (2014). ¿Cómo se hace con Agustín? ¿Qué es la geografía y cómo se estudia?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TSh-pLn49Q0',
    },
    {
      tema: '¿Cómo se hace con Agustín? Mapa',
      referencia:
        'Instituto Geográfico Agustín Codazzi [IGAC]. (2013). ¿Cómo se hace con Agustín? un mapa.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oBRS8ClpM8k&t=112s',
    },
    {
      tema: 'Áreas protegidas',
      referencia:
        'Decreto 2372 de 2010. Por el cual se reglamenta el Decreto Ley 2811 de 1974, la Ley 99 de 1993, la Ley 165 de 1994 y el Decreto Ley 216 de 2003, en relación con el Sistema Nacional de Áreas Protegidas, las categorías de manejo que lo conforman y se dictan otras disposiciones. Julio 1 de 2010.',
      tipo: 'PDF',
      descarga: '/downloads/decreto2372.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Abiótico',
      significado:
        'Se refiere a los principales factores, como la temperatura, la luz, la humedad, la salinidad, la presión y las corrientes del medio, es decir, todos los elementos del ecosistema que carecen de funciones biológicas.',
    },
    {
      termino: 'Antrópico',
      significado:
        'Medio y efecto de la transformación efectuada por el hombre o la sociedad. Relativo al ser humano. ',
    },
    {
      termino: 'Biótico',
      significado:
        'Se refiere al grupo característico de los seres vivos y todos los organismos que cumplen funciones biológicas, como la reproducción.',
    },
  ],
  referencias: [
    {
      referencia:
        'Claval, P. (1999). La geografía cultural. Editorial Universitaria de Buenos Aires.',
    },
    {
      referencia:
        'Decreto 622 de 1977. Por el cual se reglamenta parcialmente: el capítulo V título II parte XIII del Decreto Ley 2811 de 1974 sobre Sistema de Parques Nacionales, la Ley 23 de 1973 y la Ley 2 de 1959. Marzo 16 de 1977.',
      link:
        'https://www.parquesnacionales.gov.co/portal/wp-content/uploads/2018/07/Decreto_622_de_1977.pdf',
    },
    {
      referencia:
        'Díaz, A. (2010). Los ingenieros y la geografía. Instituto Geográfico Agustín Codazzi.',
    },
    {
      referencia:
        'Dollfus, O. (1978). El análisis geográfico. Editorial Oikos Tau.',
    },
    {
      referencia:
        'Hernández, F. (2017).  El mundo es ancho y turístico. Apuntes teórico-metodológicos para una geografía del turismo en la actualidad. Espacio y desarrollo, (29), p. 57-90.',
      link:
        'http://revistas.pucp.edu.pe/index.php/espacioydesarrollo/article/view/17570/18487',
    },
    {
      referencia:
        'Instituto Geográfico Agustín Codazzi [IGAC]. (2011). Geografía de Colombia. Imprenta Nacional de Colombia.',
    },
    {
      referencia:
        'Ortega, J. (2004). Horizontes de la geografía. Teoría de la geografía. Editorial Ariel.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/48279',
    },
    {
      referencia:
        'Parques Nacionales Naturales de Colombia. (s. f.). Sistema Nacional de Áreas Protegidas - SINAP.',
      link:
        'https://www.parquesnacionales.gov.co/portal/es/sistema-nacional-de-areas-protegidas-sinap',
    },
    {
      referencia:
        'Ramírez, B. y López, L. (2015). Espacio, paisaje, región, territorio y lugar: la diversidad en el pensamiento contemporáneo. Universidad Nacional Autónoma de México.',
      link: 'https://web.ua.es/es/giecryal/documentos/blanca-uam.pdf',
    },
    {
      referencia: 'Real Academia Española. (2021). Ecología.',
      link: 'https://dle.rae.es/ecolog%C3%ADa',
    },
    {
      referencia:
        'Ropero, S. (2021). Regiones naturales de Colombia. Ecología verde.',
      link:
        'https://www.ecologiaverde.com/regiones-naturales-de-colombia-2784.html',
    },
    {
      referencia:
        'World Tourism Organization [UNWTO]. (s. f.). Glosario de términos de turismo.',
      link: 'https://www.unwto.org/es/glosario-terminos-turisticos ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Pacheco Gutiérrez',
        cargo: 'Instructor técnico',
        centro:
          'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
      },
      {
        nombre: 'Hernán Darío García González',
        cargo: 'Instructor',
        centro:
          'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
      },
      {
        nombre: 'David Cruz Rincón',
        cargo: 'Instructor',
        centro:
          'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Julian Ramirez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Camila Ovalle',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
