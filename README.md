# France Student Assistant PWA

Este es un proyecto educativo de estudiantes para estudiantes. Consiste en una Progressive Web App (PWA) diseñada para informar a futuros estudiantes internacionales sobre los requisitos administrativos para llegar a Francia, dependiendo de su edad, origen, etc.

## Características

*   **100% Frontend (Sin Backend):** Desarrollado usando HTML5 semántico, CSS3 puro y Vanilla JavaScript, cumpliendo con los estándares W3C.
*   **Chat Simulado (Árbol de Decisiones):** Interfaz conversacional basada en estados que guía al usuario a través de la información oficial de visas.
*   **Internacionalización (i18n):** Soporte en tiempo real para Español, Inglés y Francés.
*   **Panel de Personalización en Vivo:** Un panel educativo que permite a los estudiantes modificar colores y tipografía, demostrando cómo JavaScript interactúa con las Variables Nativas de CSS (`:root`).
*   **PWA Ready:** Incluye `manifest.json` y Service Worker (`sw.js`) para instalación y soporte offline.

## Cómo probar localmente

1. Clona o descarga este repositorio.
2. Abre el archivo `index.html` en cualquier navegador web moderno.
3. ¡No necesitas instalar Node.js ni ningún servidor! (Aunque se recomienda usar una extensión como Live Server en VSCode para probar el Service Worker en entorno local).

## Despliegue en GitHub Pages

Este proyecto está diseñado para ser desplegado gratuitamente en GitHub Pages.

1. Sube todos los archivos a un repositorio público en GitHub.
2. Ve a **Settings** > **Pages**.
3. En **Source**, selecciona la rama `main` (o `master`) y la carpeta `/(root)`.
4. Haz clic en **Save**. ¡Tu PWA estará viva en un par de minutos!

## Archivos del Proyecto

*   `index.html`: Estructura principal.
*   `css/style.css`: Estilos y variables CSS.
*   `js/app.js`: Controlador principal y lógica del panel de personalización.
*   `js/chat.js`: Motor del chat simulado.
*   `js/i18n.js`: Diccionario de traducciones.
*   `manifest.json`: Configuración PWA.
*   `sw.js`: Service Worker para funcionamiento offline.
*   `Fuentes_Autorizadas.txt`: URLs oficiales utilizadas como base de conocimiento.
