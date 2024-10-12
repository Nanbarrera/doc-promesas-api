# GET Requests con Fetch API

## Concepto
Las solicitudes **GET** son uno de los métodos HTTP más comunes utilizados para solicitar datos de un servidor. La **Fetch API** permite realizar solicitudes GET de manera sencilla y eficiente, utilizando la función ```fetch()```. Las solicitudes GET no alteran el estado del recurso en el servidor, lo que significa que solo se utilizan para recuperar información.


## Sintaxis Básica
```javascript
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // O response.text(), etc.
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

## Ejercicios de Solicitudes GET con Fetch API

### Ejercicio 1: Solicitud GET básica
Realiza una solicitud GET para obtener un post específico desde una API pública y muestra el resultado en la consola.

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Resultado: Muestra el objeto del post 1 con propiedades como id, title y body.
```

### Ejercicio 2: Solicitud GET y manejo de errores
Realiza una solicitud GET para un post que no existe y maneja el error mostrando un mensaje en la consola.
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

### Ejercicio 3: Obtener una lista de posts
Realiza una solicitud GET para obtener una lista de todos los posts y muestra los títulos en la consola.
```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    data.forEach(post => console.log(post.title));
  })
  .catch(error => console.error('Error:', error));

// Resultado: Muestra los títulos de todos los posts en la consola.
```

### Ejercicio 4: Obtener un usuario y sus posts
Realiza una solicitud GET para obtener los datos de un usuario y luego sus posts relacionados.
```javascript
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(user => {
    console.log(`User: ${user.name}`);
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then(response => response.json())
  .then(posts => posts.forEach(post => console.log(post.title)))
  .catch(error => console.error('Error:', error));

// Resultado: Muestra el nombre del usuario y los títulos de sus posts.

```

### Ejercicio 5: Filtrar posts por un parámetro
Realiza una solicitud GET para obtener todos los posts de un usuario específico utilizando un parámetro en la URL.
```javascript
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Resultado: Muestra todos los posts del usuario con ID 1.

```

### Ejercicio 6: Manejo de respuestas en formato texto
Realiza una solicitud GET y obtén la respuesta en formato texto, mostrando los primeros 100 caracteres en la consola.
```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.text())
  .then(text => console.log(text.substring(0, 100)))
  .catch(error => console.error('Error:', error));

// Resultado: Muestra los primeros 100 caracteres de la respuesta en texto.
```

### Ejercicio 7: Solicitud GET con parámetros de consulta
Realiza una solicitud GET que incluya parámetros de consulta para filtrar los posts.
```javascript
const userId = 2;
fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Resultado: Muestra todos los posts del usuario con ID 2.
```

### Ejercicio 8: Obtener y mostrar detalles de todos los usuarios
Realiza una solicitud GET para obtener todos los usuarios y muestra su nombre junto con su correo electrónico en la consola.
```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      console.log(`Name: ${user.name}, Email: ${user.email}`);
    });
  })
  .catch(error => console.error('Error:', error));

// Resultado: Muestra el nombre y correo electrónico de cada usuario en la consola.

```
## Conclusión
Estos ejercicios demuestran cómo utilizar la Fetch API para realizar solicitudes GET de diversas maneras, desde obtener un único recurso hasta manejar errores y filtrar datos. Con esta información, puedes practicar y comprender mejor cómo interactuar con APIs utilizando JavaScript.