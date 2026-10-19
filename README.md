# 🏛️ Catálogo de Arquitectura · Grupo FLIX

Catálogo web interactivo para **Grupo FLIX**, diseñado para exhibir de manera elegante y funcional sus proyectos de arquitectura de alta gama. Presenta un recorrido fluido desde una vista general de los desarrollos hasta el detalle técnico, visual y espacial de cada obra.

<img width="1318" height="668" alt="image" src="https://github.com/user-attachments/assets/ec581c87-dbd7-4915-9ae6-5fc36e6b2728" />


## 🎯 Objetivo del proyecto

Crear una vitrina digital premium y escalable que permita a los clientes explorar los diseños arquitectónicos de la empresa. El enfoque está puesto en mostrar tanto la belleza visual (renders) como la profundidad técnica (planos y memorias descriptivas detalladas), facilitando la incorporación de nuevos proyectos mediante una estructura de datos externa[cite: 2].

## 🧱 Estructura de la aplicación

| Sección | Propósito |
| --- | --- |
| **Vista Principal (Grid)** | Tarjetas dinámicas de cada proyecto con título, tipología y una imagen de portada con efecto *hover* premium[cite: 1, 3]. |
| **Vista Detalle: Galería** | Pestaña inicial que despliega un grid inmersivo con los renders y visualizaciones del proyecto seleccionado.

 |
| **Vista Detalle: Memoria** | Pestaña que expone información técnica, programa de ambientes, especificaciones en formato acordeón y planos[cite: 1, 2]. |
| **Lightbox Interactivo** | Visualizador modal a pantalla completa para ampliar imágenes y planos sin salir de la vista actual.

 |

## 🛠️ Tecnologías

* **HTML5** (Semántica y accesibilidad)


* **CSS3** (Variables nativas, animaciones, Flexbox y CSS Grid)[cite: 3]
* **JavaScript (Vanilla)** (Manipulación del DOM, eventos y renderizado de datos)



## 🔍 Decisiones técnicas

* **Renderizado Dinámico:** En lugar de crear páginas HTML estáticas para cada obra, toda la información se centralizó en un arreglo `PROYECTOS` dentro de `proyectos.js`[cite: 2]. JavaScript se encarga de inyectar dinámicamente las tarjetas, galerías y memorias descriptivas en el DOM.


* **Arquitectura SPA (Single Page Application):** Se implementó un sistema de navegación fluido que oculta y muestra los contenedores (`vista-catalogo` y `vista-detalle`) mediante la clase `.oculto`, evitando recargas de página y mejorando la experiencia de usuario.


* **Estética Premium y Rendimiento:** Se utilizó una paleta oscura con variables CSS (`--flix-black`, `--flix-darkgray`) y acentos dorados (`--flix-gold`)[cite: 3]. Además, se incluyeron animaciones de "blobs" de luz de fondo utilizando solo CSS para no afectar el rendimiento de carga[cite: 3].
* **Componentes UI Nativos:** Funcionalidades complejas como el *Lightbox* de imágenes, el sistema de pestañas (tabs) y los acordeones técnicos (`<details>`) fueron desarrollados con código nativo, manteniendo el proyecto liviano y libre de dependencias externas.



## 📁 Estructura del proyecto

```
catalogo-flix/
├── index.html
├── style.css
├── proyectos.js
└── img/
    ├── Mateo/
    │   ├── portada.jpg
    │   ├── galeria-1.jpg
    │   └── plano-1.jpg
    ├── Rumbo/
    └── Duplex/

```

## 🚀 Instalación y uso local

1. Descargá o cloná este repositorio:
```bash
git clone https://github.com/LudmilaReyes/[nombre-del-repo].git

```


2. Dado que es un proyecto estático (Vanilla JS, HTML y CSS), no requiere instalación de dependencias ni un servidor local complejo.
3. Simplemente abrí el archivo `index.html` en tu navegador de preferencia.
4. Para agregar nuevos proyectos, basta con crear una nueva carpeta en `img/` con las imágenes correspondientes y añadir el objeto de datos en el archivo `proyectos.js`[cite: 2].

## 📚 Aprendizajes

* Manipulación avanzada del DOM con JavaScript puro para generar interfaces dinámicas completas.
* Creación de componentes interactivos (Lightbox, Tabs) sin necesidad de librerías como React o jQuery.
* Diseño de una estructura de datos estructurada y mantenible en JavaScript para alimentar una interfaz de usuario compleja.

## 👩‍💻 Autora

**Ludmila Micaela Reyes Martínez**
Estudiante de Ingeniería en Sistemas de Información (UTN FRM)
📧 ludmilareyes208@gmail.com
