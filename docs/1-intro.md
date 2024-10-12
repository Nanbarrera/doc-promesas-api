---
sidebar_position: 1
---

# Promesas y Fetch API

En esta sección, exploraremos cómo trabajar con **promesas** en JavaScript y cómo utilizar la **Fetch API** para realizar solicitudes HTTP.

## Introducción a las Promesas

Las promesas son un mecanismo de JavaScript para manejar operaciones asincrónicas. Una promesa puede estar en uno de los siguientes estados:

- **Pendiente**: La operación aún no se ha completado.
- **Cumplida**: La operación se ha completado con éxito.
- **Rechazada**: La operación ha fallado.

### Ejemplo de Promesa

Aquí tienes un ejemplo simple de cómo crear y usar una promesa:

```javascript
const miPromesa = new Promise((resolve, reject) => {
  const exito = true; // Cambia a false para simular un error
  
  if (exito) {
    resolve("¡Operación exitosa!");
  } else {
    reject("Error en la operación.");
  }
});

miPromesa
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error));
```
## Fetch API: Realizando Solicitudes HTTP
La Fetch API es una interfaz moderna y más amigable para realizar solicitudes HTTP que reemplaza el antiguo objeto XMLHttpRequest. La ventaja principal es que la Fetch API trabaja de manera nativa con promesas, lo que facilita el manejo de respuestas asincrónicas de servidores.

### Ejemplo básico de Fetch
A continuación, se muestra un ejemplo de cómo realizar una solicitud HTTP GET utilizando la Fetch API:

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.status);
    }
    return response.json();  // Convertir la respuesta a JSON
  })
  .then(data => {
    console.log('Datos recibidos:', data);
  })
  .catch(error => {
    console.error('Hubo un problema con la solicitud:', error);
  });


