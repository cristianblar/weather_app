# Homework DOM

## Instrucciones
---
1. En un archivo de texto separado que debes crear, escribe explicaciones de los siguientes conceptos como si se lo estuvieras explicando a un niño de 12 años. Hacer esto te ayudará a descubrir rápidamente cualquier agujero en tu comprensión

	* **DOM:** son las siglas que corresponden a Document Object Model. Un documento escrito en lenguaje HTML no puede ser interpretado directamente por el navegador, ya que no lo entiende; por esa razón, el código HTML es transformado a tokens, y los tokens a un árbol. Imagina que cada token es una rama del árbol, comenzando desde la raíz (tag html). De esa forma se crea toda la estructura del documento HTML de forma que el navegador la pueda entender y trabajar con ella.

	* **DOM element selectors:** teniendo en cuenta que el navegador trabaja con un árbol lleno de ramas, es complicado "seleccionar" la rama con la que quieres trabajar. Para eso existen los selectores, para indicarle a la WebAPI de una forma sencilla con qué elemento (o elementos) del árbol quieres trabajar, a través del nombre de la etiqueta, su id, su clase, entre otras formas. Si usas `document.querySelector` o `document.querySelectorAll` podrás usar los mismos selectores de CSS.

	* **DOM events:** son señales que se disparan cuando algo sucede en el momento que se está interactuando con una página web. No son necesariamente causados por la interacción del usuario (aunque la mayoría lo son), sino que pueden ser causados también por otros actores, como el sistema operativo del dispositivo donde se esté ejecutando el navegador. Cuando acercas la mano a un calor muy alto (evento) y te quemas, gritarás (señal disparada por el evento), y tu grito será escuchado por tu mamá (el listener o escuchador del evento) que decidirá qué hacer con tu quemadura.

2. Desde la carpeta `homework`, ejecuta el comando `npm install` para instalar las librerías necesarias para la ejecución de los tests

3. Desde la carpeta `homework`, ejecuta el comando `npm test DOM.test.js` para correr los tests automatizados. Al principio, todos tests estarán fallados/rotos. Encontrarás las funciones para hacer pasar los tests en el archivo `DOMhomework.js`

4. Una vez finalizada la homework, desde la carpeta `homework`, ejecuta el comando `node submit.js` para subir tus cambios a tu repositorio y los resultados de tus tests.
