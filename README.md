Este proyecto corresponde al Desafío – Condiciones y tiene como objetivo practicar:
•	Manipulación del DOM
•	Uso de if, else if, else
•	Operadores lógicos
•	Lectura de valores desde inputs y selects

El desafío está compuesto por 3 ejercicios independientes.

Ejercicio 1: Imagen con borde
•	Se muestra una única imagen.
•	Al hacer click sobre la imagen:
	* Si no tiene borde, se agrega un borde rojo de 2px.
  * Si ya tiene borde, se quita.
•	Se utiliza JavaScript para detectar el estado del borde y alternarlo.

Ejercicio 2: Selección de Stickers
•	Se muestran 3 stickers (imágenes), cada uno con un input numérico debajo.
•	El usuario puede ingresar cuántos stickers quiere de cada tipo.
•	Al presionar el botón Verificar:
  * Se suman los valores de los 3 inputs.
  * Si la suma es menor o igual a 10, se muestra:
      "Llevas X stickers"
      o	Si la suma es mayor a 10, se muestra:
      "Llevas demasiados stickers"
•	Los inputs no permiten valores negativos (min="0").
•	Los valores se convierten a número usando Number() antes de sumarlos.

Ejercicio 3: Password con Select
•	Se muestran 3 select con opciones del 1 al 9.
•	El usuario selecciona un número en cada uno y presiona Ingresar.
•	Se concatenan los valores seleccionados y se valida:
    * Si el password es 911 → "password 1 correcto"
    * Si el password es 714 → "password 2 correcto"
    * Cualquier otro valor → "password incorrecto"
•	Los valores se leen como string usando .value y se concatenan.

Estructura del proyecto
assets
  img
    (imágenes de los stickers y la imagen principal)
index.html
script.js
README.md
