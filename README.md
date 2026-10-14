# Act 4 | Aplicación con React

Proyecto desarrollado como parte de la actividad de introducción a React de la materia de Programación Web. El objetivo es practicar la creación de componentes, el paso de información mediante `props`, el manejo de estado con `useState` y el renderizado de listas.

## Descripción del proyecto

La aplicación está construida con React y permite organizar diferentes elementos de una interfaz mediante componentes reutilizables.

Entre los componentes desarrollados se encuentran:

- **Contador:** permite trabajar con valores que pueden cambiar mediante el estado.
- **Info:** muestra información personal recibida a través de propiedades.
- **Skills:** presenta una lista de habilidades o áreas de interés utilizando elementos dinámicos.

## Tecnologías utilizadas

- React
- JavaScript
- HTML
- CSS
- Vite
- Git y GitHub

## Preguntas

### a) ¿Qué diferencia hay entre props y state en React?

Las `props` son datos que un componente recibe de otro componente, generalmente de su componente padre. Se utilizan para compartir información y personalizar lo que muestra cada componente.

Por otro lado, el `state` es información que un componente administra internamente y que puede cambiar durante la ejecución de la aplicación. Cuando el estado cambia, React actualiza la interfaz para mostrar los nuevos datos.

Por ejemplo, en mi aplicación, el componente `Info` recibe los datos personales mediante `props`, mientras que `useState` permite manejar información que cambia, como el valor de un contador o los elementos de una lista.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

La propiedad `key` permite que React identifique de manera única cada elemento de una lista. Esto ayuda a reconocer cuáles elementos se agregaron, eliminaron o modificaron, haciendo más eficiente la actualización de la interfaz.

Por ejemplo, al mostrar una lista de habilidades, cada elemento necesita una clave que lo identifique. En mi aplicación utilicé `crypto.randomUUID()` para generar identificadores para los elementos de la lista.

```jsx
{notas.map((nota) => (
  <li key={nota.id}>
    {nota.text}
  </li>
))}
```

De esta manera, React puede distinguir cada elemento de la lista correctamente.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.

`useState` es un hook de React que permite guardar y actualizar información dentro de un componente funcional. Devuelve el valor actual del estado y una función para modificarlo. Cuando se actualiza, React vuelve a renderizar el componente para reflejar los cambios.

En mi mini aplicación lo utilicé en el componente `Skills` para guardar una lista de elementos en una variable llamada `notas`.

```jsx
const [notas, setNotas] = useState(arregloNotas);
```

En este ejemplo, `arregloNotas` contiene los elementos iniciales, `notas` guarda la lista actual y `setNotas` permite actualizarla. Así puedo trabajar con una lista cuyo contenido puede cambiar sin tener que modificar directamente los elementos del arreglo original.

## Enlaces del proyecto

### d) Repositorio de GitHub

[https://github.com/Mariysabel/t3_act4_react](https://github.com/Mariysabel/t3_act4_react)

### e) Proyecto desplegado en GitHub Pages

[https://mariysabel.github.io/t3_act4_react/](https://mariysabel.github.io/t3_act4_react/)

## Ejecución local

Para ejecutar el proyecto en una computadora, es necesario tener instalado Node.js.

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Mariysabel/t3_act4_react.git
   ```

2. Entrar a la carpeta del proyecto:

   ```bash
   cd t3_act4_react
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abrir en el navegador la dirección local que muestra la terminal.