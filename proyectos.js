/*
  CÓMO AGREGAR UN PROYECTO
  1. Crea la carpeta img/<carpeta>/ y nombra los archivos así (todos .jpg):
       portada.jpg                 -> imagen de la tarjeta del catálogo
       galeria-1.jpg, galeria-2.jpg, ...
       plano-1.jpg, plano-2.jpg, ...
  2. Copia un bloque de abajo, cambia los datos y pon cuántas
     imágenes de galería y planos hay (galeria: 4, planos: 2).
*/
const PROYECTOS = [
    {
        carpeta: 'Mateo',
        titulo: 'Oasis Moderno: Elegancia y Exclusividad en Dos Plantas',
        resumen: 'OASIS MODERNO',
        detalle: 'Moderna / 3 Habitaciones',
        galeria: 4,
        planos: 4,
        // memoria puede ser un texto simple (como los otros proyectos) o un objeto completo:
        memoria: {
            descripcion: 'Vivienda unifamiliar de 220m² de estilo moderno, concebida para difuminar los límites entre el interior y el exterior mediante grandes ventanales y galerías expansivas que invitan al descanso. La superficie cubierta podrá sufrir pequeñas variaciones en el transcurso de la obra.',
            ficha: [
                ['Tipología', 'Vivienda unifamiliar'],
                ['Superficie cubierta', '220 m² aprox.'],
                ['Segunda etapa', 'Quincho de 40 m² aprox.'],
                ['Dormitorios', '3'],
                ['Estilo', 'Moderno']
                // Opcionales: ['Año', '2025'], ['Estado', 'En obra'], ['Superficie del terreno', '... m²'], ['Equipo', '...']
            ],
            programa: [
                { nivel: 'Planta baja', ambientes: ['Estar / Comedor', 'Cocina', 'Lavandería', 'Paso', 'Toilette', 'Dormitorio en suite con baño, ante baño y cuarto ropero'] },
                { nivel: 'Planta alta', ambientes: ['Dos dormitorios', 'Baño con ante-baño', 'Paso', 'Estudio'] }
            ],
            secciones: [
                { titulo: 'Cimientos y vinculaciones inferiores', texto: 'Cimientos de hormigón ciclópeo, pozos de fricción, todo según cálculo. Terraplén de ripio estabilizado según cálculo.' },
                { titulo: 'Mampostería, columnas y vinculaciones superiores', texto: 'Mampostería de ladrillones de 1° calidad. Los muros exteriores, vigas de dintel y encarozados se revisten con revoque entrefino y terminación para pintar, según se indique en fachada.' },
                { titulo: 'Enlucidos interiores', texto: 'Muros enlucidos en mezcla al fieltro. Cielorrasos de planta baja en revoque aplicado y enlucido, con losa cerámica donde corresponda; tirantería y machimbre de pino a la vista en el resto de la vivienda.' },
                { titulo: 'Estructuras y cubiertas de techos', texto: 'Tirantes multilaminados de pino elliotis y machimbre de la misma madera. Aislación de poliestireno expandido. Terminación en tejas, o membrana asfáltica en caso de techo plano.' },
                { titulo: 'Instalación sanitaria', texto: 'Cloaca base en PVC con conexión a red. Agua fría y caliente en PPL termofusión tipo IPS. Artefactos Ferrum línea Bari (o similar) en color blanco: inodoro con mochila y bidet; bañera blanca en los baños. Grifería FV y revestimientos cerámicos hasta dintel.' },
                { titulo: 'Instalación de gas', texto: 'Conductos y llaves para cocina y caldera dual, hasta receptáculo para medidor en línea municipal. Incluye servicio y conexión a la red.' },
                { titulo: 'Calefacción central', texto: 'Conductos de agua caliente para radiadores en todos los locales. Incluye caldera dual, sin radiantes.' },
                { titulo: 'Instalación eléctrica', texto: 'Conductos embutidos y cajas de acero pesado en muros y cubiertas. Tableros con térmicos y disyuntor diferencial. Cajas para teléfono, portero y TV.' },
                { titulo: 'Carpintería interior', texto: 'Puertas con marco de madera y hojas placa de madera, terminación lustre. Herrajes tipo Sanatorio, bronce pulido o similar.' },
                { titulo: 'Carpintería exterior', texto: 'Aberturas a medida en madera de laurel o similar, lustradas. Posibilidad de unidades antiguas recicladas, a convenir; la puerta de ingreso a Estar / Comedor preferentemente antigua reciclada, a elección conjunta con el propietario.' },
                { titulo: 'Muebles de cocina', texto: 'Mueble bajo mesada y alacena con interiores de melamina, mesada de granito natural y bacha doble de acero inoxidable, conforme a plano.' },
                { titulo: 'Placares', texto: 'Placard en cada dormitorio, puertas placa de madera de abrir; interior en melamina con barral, estantes, separación y cinco cajones.' },
                { titulo: 'Pisos y revestimientos', texto: 'Porcelanato en interiores y mosaicos en exteriores.' },
                { titulo: 'Vidrios', texto: 'Vidrios de 3 mm tipo cristal float, o mayor espesor según abertura.' },
                { titulo: 'Pinturas', texto: 'Partes metálicas con antióxido y esmalte sintético. Paredes con pintura látex.' },
                { titulo: 'Espacios exteriores', texto: 'El jardín se entrega libre de residuos de obra y nivelado. Cierre perimetral y frontal según reglamentación del barrio.' }
            ],
            incluye: [
                'Caldera dual y conexión a la red de gas',
                'Cierre frontal con muros y rejas',
                'Puerta de ingreso peatonal',
                'Cierre perimetral con alambrado en límites Este y Norte'
            ],
            noIncluye: [
                'Artefactos de iluminación (ni su colocación)',
                'Rejas ni persianas en aberturas',
                'Cortinados interiores',
                'Tierra, césped ni plantas',
                'Sistema de riego por aspersión',
                'Pileta de natación',
                'Portones de cochera'
            ]
        }
    },
    {
        carpeta: 'Rumbo',
    titulo: 'Residencia Rústica Contemporánea 319m²',
        resumen: 'RUSTICA CONTEMPORANEA 319m²',
        memoria: 'Esta exclusiva residencia de un solo nivel destaca por su diseño articulado que fusiona armoniosamente interiores y exteriores a través de hermosos patios internos ajardinados. Su estética arquitectónica combina la calidez tradicional de los techos a dos aguas con tejas rojizas y vigas de madera a la vista, contrastando de manera elegante con modernos volúmenes blancos de cubierta plana. Las fachadas presentan una exquisita mezcla de revestimientos en piedra rústica y amplios paños vidriados, mientras que las puertas de acceso en un llamativo color rojo añaden un toque único de personalidad. Completada con una práctica cochera semicubierta y un relajante espejo de agua en el sector posterior, esta propiedad ofrece un refugio perfecto que equilibra diseño, confort y contacto con la naturaleza.',
        galeria: 4,
        planos: 3
    },
    // ...agrega más proyectos aquí
    {
        carpeta: 'Duplex',
        titulo: 'Duplex de 98m² y 119.7m²',
        resumen: 'DUPLEX',
        detalle: 'Eficiente / 2 y 3  Habitaciones',
        galeria: 1,
        planos: 2,
        // memoria puede ser un texto simple (como los otros proyectos) o un objeto completo:
        memoria: {
            descripcion: 'Dúplex Nautilus',
            ficha: [
                ['Tipología', 'Dúplex 2 y 3 habitaciones'],
                ['Dormitorios', '2 y 3'],
                ['Estilo', 'Eficiente']
                // Opcionales: ['Año', '2025'], ['Estado', 'En obra'], ['Superficie del terreno', '... m²'], ['Equipo', '...']
            ],
            programa: [
                { nivel: 'Planta baja D2', ambientes: ['Estar / Comedor', 'Cocina', 'Lavandería', 'Paso', 'Toilette'] },
                { nivel: 'Planta alta D2', ambientes: ['Dormitorio principal, con cuarto vestidor', 'Baño con ante-baño', 'Paso', 'Dormitorio', 'Hall'] },
                { nivel: 'Planta baja D3', ambientes: ['Estar / Comedor','Hall', 'Cocina/Lavandería', 'Paso', 'Toilette'] },
                { nivel: 'Planta alta D3', ambientes: ['Dormitorio principal, baño en suite y cuarto vestidor', 'Baño', 'Hall', '2 Dormitorios'] }
 
            ],
            secciones: [
                { titulo: 'ESTRUCTURA DE HORMIGÓN ARMADO', texto: 'Fundaciones de hormigón armado, bases y zapatas, según cálculo. Armado de vigas de cierre y dintel y columnas de hormigón armado.' },
                { titulo: 'MAMPOSTERÍA', texto: 'Ejecución de mampostería de ladrillones de 1°calidad, como cerramientos y encarozados, en posición de soga o panderete, según proyecto. ' },
                { titulo: 'CUBIERTA DE TECHO', texto: 'En rollizos y machimbre de pino elliotis. Cubierta realizada con aislación de poliestireno expandido, carpeta de nivelación y membrana asfáltica.' },
                { titulo: 'REVOQUE', texto: 'Colocación de revoque grueso y fino en muros y vigas y realización de recuadros en aberturas.   Cielorrasos en planta baja de revoque aplicado. Con revestimientos.' },
                { titulo: 'CONTRAPISO', texto: 'Ejecución de contrapiso nivelado. Con colocación de piso.' },
                { titulo: 'INSTALACIÓN SANITARIA', texto: 'Ejecución cloaca  base en PVC, conexión a cloaca. Agua fría y caliente en PPL tipo termofusión tipo IPS. Artefactos de baño que se instalarán en baños: inodoro con mochila, bidet color blanco marca Ferrum modelo Bari. Los baños llevarán una bañera color blanca. Los baños se entregarán con artefactos Ferrum línea Bari, o similar, grifería FV, revestimientos cerámicos hasta dintel.' },
                { titulo: 'INSTALACIÓN DE GAS', texto: 'Colocación de conductos y llaves para alimentación de cocina y caldera dual. Ejecución hasta receptáculo para medidor en línea municipal. Se incluye el servicio y conexión a la red de gas' },
                { titulo: 'INSTALACIÓN CALEFACCIÓN CENTRAL', texto: 'Colocación de conductos de agua caliente para alimentación de radiadores en todos los locales.' },
                { titulo: 'INSTALACIÓN ELÉCTRICA', texto: 'Ejecución de conductos embutidos y cajas de acero pesado en muros y cubiertas. Tableros con térmicos y disyuntor diferencial. Caja para teléfono, portero y TV. No incluye artefactos de iluminación interiores ni exteriores. No incluye mano de obra ni colocación de los mismos.' },
                { titulo: 'CARPINTERÍA INTERIOR', texto: 'Las carpinterías interiores serán: puertas con marco de madera y hojas placas de madera. Terminación lustre. Herrajes tipo Sanatorio Bronce pulido o similar.' },
                { titulo: 'CARPINTERÍA EXTERIOR', texto: 'Aberturas realizadas a medida, en aluminio tipo Modena de Aluar.' },
                { titulo: 'MUEBLES DE COCINA', texto: 'Mueble bajo mesada y alacena, interiores de placa de melanina, tipo Johnson y mesada de granito natural; en pileta de cocina una bacha doble de acero inoxidable, conforme a plano' },
                { titulo: 'PLACARES', texto: 'Placard en cada dormitorio, tipo Johnson, puertas placas de madera, hojas de abrir, interior en melamina con barral, estantes, separación y cinco cajones.' },
                { titulo: 'PISOS Y REVESTIMIENTOS', texto: 'Pisos en porcelanato en interiores, exteriores mosaicos en general.' },
                { titulo: 'PINTURAS', texto: 'Partes metálicas con antióxido y esmalte sintético. Paredes con pintura látex.' },
                { titulo: 'ESPACIOS EXTERIORES', texto: 'El espacio destinado a jardín se entregará libre de residuos de construcción y nivelado. No incluye tierra para jardinería ni sembrado de césped o plantas. No incluye sistema de riego por aspersión. No incluye pileta de natación. Incluye cierre frontal con muros y rejas. No incluye portones de cochera. Incluye puerta ingreso peatonal. Incluye cierre perimetral alambrado en límite Este y Norte, de acuerdo a reglamentación del Barrio Nautilus.' }
            ],
            incluye: [
                'Caldera dual y conexión a la red de gas',
                'Cierre frontal con muros y rejas',
                'Puerta de ingreso peatonal',
                'Cierre perimetral con alambrado en límites Este y Norte'
            ],
            noIncluye: [
                'Artefactos de iluminación (ni su colocación)',
                'Rejas ni persianas en aberturas',
                'Cortinados interiores',
                'Tierra, césped ni plantas',
                'Sistema de riego por aspersión',
                'Pileta de natación',
                'Portones de cochera'
            ]
        }
    },
        {
        carpeta: 'Herrera',
        titulo: 'Desarrollo Vivienda Unifamiliar',
        resumen: 'DESARROLLO VIVIENDA',
        detalle: 'Vivienda con 3 Habitaciones - Una planta',
        memoria: 'Diseñada para disfrutar en familia, cuenta con un amplio y luminoso espacio integrado que une living, comedor y cocina, conectando de manera fluida con la zona privada de dormitorios. En el exterior, el gran terreno te invita al relax con una espectacular piscina, mientras que el quincho techado con parrilla es el escenario ideal para tus reuniones sociales. Una propiedad única que combina diseño funcional, privacidad y un entorno verde inigualable para crear tus mejores recuerdos.',
        galeria: 9,
        planos: 1
    },
     {
        carpeta: 'Ortubia',
        titulo: 'Hogar Vanguardista: Conexión Ideal entre Diseño y Naturaleza',
        resumen:  'HOGAR VANGUARDISTA',
        detalle: 'Vivienda con 2 habitaciones y 1 estudio - Una planta',
        memoria: 'Descubrí esta magnífica residencia de un nivel que redefine el concepto de confort a través de sus líneas geométricas y volúmenes limpios. La fachada propone un elegante y sofisticado contraste entre los detalles de piedra rústica y los muros lisos en tonos cálidos, complementados por grandes paños vidriados y una imponente puerta principal de madera. Pensada para disfrutar al máximo del estilo de vida al aire libre, la propiedad cuenta con una práctica cochera semicubierta y un espectacular sector de esparcimiento que incluye una galería techada con asador, integrándose de manera perfecta con el jardín y una relajante piscina.',
        galeria: 4,
        planos: 3
    },
    {
        carpeta: 'Teran',
        titulo: 'Hogar Vanguardista: Conexión Ideal entre Diseño y Naturaleza',
        resumen:  'HOGAR VANGUARDISTA',
        detalle: 'Vivienda con 2 habitaciones y 1 estudio - Una planta',
        memoria: 'Descubrí esta magnífica residencia de un nivel que redefine el concepto de confort a través de sus líneas geométricas y volúmenes limpios. La fachada propone un elegante y sofisticado contraste entre los detalles de piedra rústica y los muros lisos en tonos cálidos, complementados por grandes paños vidriados y una imponente puerta principal de madera. Pensada para disfrutar al máximo del estilo de vida al aire libre, la propiedad cuenta con una práctica cochera semicubierta y un espectacular sector de esparcimiento que incluye una galería techada con asador, integrándose de manera perfecta con el jardín y una relajante piscina.',
        galeria: 4,
        planos: 3
    },
      {
        carpeta: 'CCNautilus',
        titulo: 'Centro Comercial Moderno - Bº Nautilus',
        resumen:  'Strip Center - Bº Nautilus',
        detalle: 'Strip Center con 27 locales comerciales en planta baja y 11 oficinas en planta alta.',
        memoria: 'Este moderno strip center a cielo abierto destaca por su diseño contemporáneo y amplios espacios de circulación, estructurándose en torno a atractivas áreas comunes que incluyen pasarelas tipo deck, esbeltas palmeras y un refrescante espejo de agua central. Estratégicamente distribuido para maximizar la visibilidad y el flujo de visitantes, el complejo cuenta con 27 locales comerciales en planta baja y 11 oficinas en la planta alta, creando un ecosistema ideal tanto para el comercio minorista como para el desarrollo profesional. Además, su disposición arquitectónica se complementa con cómodas áreas de estacionamiento frontal, garantizando un acceso rápido, cómodo y directo desde la calle para todos los clientes.',
        galeria: 6,
        planos: 2
    },
];