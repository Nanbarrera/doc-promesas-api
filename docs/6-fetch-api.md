# Fetch API

## Concepto
La **Fetch API** es una interfaz moderna y nativa de JavaScript que permite realizar solicitudes a recursos de red (como servidores) utilizando promesas. Se utiliza principalmente para obtener recursos de forma asíncrona, facilitando la comunicación entre el cliente y el servidor. A diferencia de su predecesor, ```XMLHttpRequest```, la Fetch API tiene una sintaxis más sencilla y se basa en el modelo de promesas, lo que hace que el manejo de respuestas y errores sea más limpio y fácil de entender.

## Funcionamiento
- **Realización de Solicitudes:** Puedes realizar solicitudes HTTP utilizando el método ```fetch()```, que toma como argumento la URL del recurso y devuelve una promesa.

- **Manejo de Respuestas:** La respuesta de una solicitud se maneja usando métodos como ```.json()```, ```.text()```, o ```.blob()```, que permiten transformar el cuerpo de la respuesta en el formato deseado.

- **Manejo de Errores:** Al usar promesas, puedes manejar errores utilizando el método ```.catch()```.

- **Configuración:** Puedes personalizar las solicitudes, especificando métodos (GET, POST, PUT, DELETE), encabezados, cuerpo de la solicitud y más, a través de un objeto de configuración.

## Sintaxis
```javascript
fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // o response.text(), etc.
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
```

## Ejercicios de Fetch API

### Ejercicio 1: Realizar una solicitud GET básica
Realiza una solicitud GET a una API pública para obtener los datos del post 1 y los muestra en la consola.

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Resultado: Muestra un objeto con los datos del post 1.

```

### Ejercicio 2: Manejo de errores en la respuesta
Intenta obtener un post que no existe (ID 1000) y maneja el error mostrando un mensaje específico en la consola.
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1000')
  .then(response => {
    if (!response.ok) {
      throw new Error('Post not found');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Resultado: "Error: Post not found"
```

### Ejercicio 3: Realizar una solicitud POST
Envía una solicitud POST para crear un nuevo post en la API, incluyendo un objeto JSON con los datos del nuevo post.
```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Resultado: Objeto con los datos del nuevo post creado.
```

### Ejercicio 4: Obtener múltiples recursos
Utiliza Promise.all para hacer solicitudes GET simultáneas y obtener los datos de dos posts diferentes, mostrando el resultado en la consola.
```javascript
Promise.all([
  fetch('https://jsonplaceholder.typicode.com/posts/1'),
  fetch('https://jsonplaceholder.typicode.com/posts/2'),
])
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Resultado: Array de objetos con los datos de los posts 1 y 2.
```

### Ejercicio 5: Realizar una solicitud PUT para actualizar un recurso
Envía una solicitud PUT para actualizar el contenido del post 1, proporcionando un objeto JSON con los nuevos datos.
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Resultado: Objeto actualizado del post 1.
```

### Ejercicio 6: Eliminar un recurso
Envía una solicitud DELETE para eliminar el post 1 y maneja la respuesta para confirmar la eliminación.
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
})
  .then(response => {
    if (response.ok) {
      console.log('Post deleted');
    } else {
      throw new Error('Error deleting post');
    }
  })
  .catch(error => console.error('Error:', error));

// Resultado: "Post deleted" si la eliminación es exitosa.
```

### Ejercicio 7: Manejo de encabezados personalizados
Realiza una solicitud GET a la API, incluyendo un encabezado de autorización para simular una autenticación.
```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer token123', // Suponiendo que se necesita autenticación
  },
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Resultado: Muestra los posts, si la autorización es correcta.
```

### Ejercicio 8: Manejo de respuestas en diferentes formatos
Obtiene los datos de los posts como texto en lugar de JSON y muestra los primeros 100 caracteres de la respuesta en la consola.
```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (response.ok) {
      return response.text(); // Obtener como texto en vez de JSON
    }
    throw new Error('Network response was not ok');
  })
  .then(text => console.log(text.substring(0, 100))) // Muestra los primeros 100 caracteres
  .catch(error => console.error('Error:', error));

// Resultado: Muestra los primeros 100 caracteres de la respuesta en texto.
```
## Conclusión
La Fetch API es una herramienta poderosa y versátil para realizar solicitudes HTTP en aplicaciones web. Proporciona una forma sencilla de interactuar con servidores y APIs, gestionando de manera eficiente las respuestas y errores. Con los ejercicios propuestos, se puede practicar desde operaciones simples hasta configuraciones más complejas, proporcionando una base sólida para trabajar con recursos de red en JavaScript.