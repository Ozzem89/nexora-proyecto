# Nexora — Sitio institucional

Proyecto final de una web institucional estática para una empresa tecnológica ficticia. Está construido con HTML semántico, SASS, Bootstrap y AOS.

El proyecto consiste en el desarrollo de **Nexora**, una empresa tecnológica ficticia orientada a la creación de productos digitales, soluciones de inteligencia artificial y plataformas web a medida. Elegí esta temática porque permite representar una identidad moderna e innovadora mediante una paleta oscura, detalles en verde, recursos visuales dinámicos y una navegación clara. El sitio cuenta con cinco secciones institucionales: **Inicio, Nosotros, Soluciones, Casos de Éxito y Contacto**.

Durante el desarrollo, uno de los principales desafíos fue mantener una identidad visual coherente en todas las páginas y, al mismo tiempo, lograr que el sitio se adaptara correctamente a dispositivos móviles, tabletas y computadoras. También fue necesario organizar los estilos con SASS mediante variables, mixins y archivos parciales, además de revisar las rutas de navegación, accesibilidad, metadatos SEO y la correcta integración de recursos visuales para asegurar una experiencia completa y funcional.

## Páginas

* `index.html`: presentación e impacto.
* `pages/nosotros.html`: historia, enfoque y valores.
* `pages/soluciones.html`: servicios y metodología.
* `pages/casos.html`: proyectos seleccionados.
* `pages/contacto.html`: datos de contacto y formulario compatible con Netlify Forms.

## Tecnologías y criterios

* HTML5 semántico y navegación consistente entre las cinco páginas.
* Metadatos SEO, Open Graph, `canonical`, `robots` y etiquetas de accesibilidad.
* SASS organizado mediante variables, mixins y archivos parciales para facilitar el mantenimiento y la reutilización de estilos.
* Bootstrap 5 personalizado para construir una interfaz moderna y responsive.
* AOS (Animate On Scroll) para incorporar animaciones durante la navegación.
* Transiciones CSS para mejorar la experiencia del usuario.
* Diseño responsive optimizado para teléfonos móviles, tablets y computadoras.

## Recursos visuales

Las imágenes utilizadas en el sitio **no se encuentran almacenadas dentro del proyecto**. En su lugar, se cargan mediante **URLs externas**, permitiendo que el navegador descargue automáticamente los recursos al cargar cada página.

Esta decisión presenta las siguientes ventajas:

* Reduce el tamaño del proyecto y del repositorio.
* Evita duplicar archivos gráficos dentro del código fuente.
* Facilita la actualización de recursos visuales sin modificar la estructura del proyecto.
* Permite utilizar imágenes optimizadas y alojadas en servicios especializados.

Como consecuencia, en la estructura del proyecto no existe una carpeta de imágenes (por ejemplo `assets/images`) con archivos `.png`, `.jpg`, `.svg` o similares, ya que estos recursos son consumidos directamente desde Internet mediante sus respectivas URLs.

## Desarrollo local

1. Instalar las dependencias:

```bash
npm install
```

2. Compilar los estilos SASS:

```bash
npm run sass
```

Este comando genera el archivo `assets/css/main.css` a partir de `sass/main.scss`.

3. Ejecutar el proyecto utilizando un servidor local (por ejemplo Live Server en Visual Studio Code) o desplegarlo en Netlify.

## Despliegue en Netlify

El proyecto incluye un archivo `netlify.toml` que automatiza la compilación de SASS durante el proceso de despliegue. Al importar el repositorio en Netlify, la plataforma detecta automáticamente esta configuración y genera el sitio listo para producción.

Además, el formulario de contacto está preparado para integrarse con **Netlify Forms**, permitiendo registrar los envíos sin necesidad de desarrollar un backend adicional.

