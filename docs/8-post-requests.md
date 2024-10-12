# POST Requests con Fetch API

## Concepto
Las solicitudes **POST** son un método HTTP utilizado para enviar datos al servidor, como la creación de nuevos recursos. A diferencia de las solicitudes GET, que se utilizan para obtener datos, las solicitudes POST se emplean para enviar datos al servidor, lo que puede implicar la creación de nuevos registros en una base de datos o el envío de formularios.

## Sintaxis Básica
La función ```fetch()``` se puede usar para realizar solicitudes POST, y su sintaxis básica incluye la URL de la API y un objeto de configuración que especifica el método, los encabezados y el cuerpo de la solicitud.
```javascript
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Define el tipo de contenido
  },
  body: JSON.stringify(data) // Convierte el objeto en una cadena JSON
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

```

## Ejercicios de Solicitudes POST con Fetch API

### Ejercicio 1: Solicitud POST básica
Realiza una solicitud POST para crear un nuevo post en una API pública y muestra el resultado en la consola.
```javascript
const newPost = {
  title: 'My New Post',
  body: 'This is the content of my new post.',
  userId: 1,
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newPost),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Resultado: Muestra el nuevo post con un ID asignado.
```

### Ejercicio 2: Manejo de errores en POST
Realiza una solicitud POST y maneja posibles errores, mostrando un mensaje en la consola.
```javascript
const invalidPost = {
  title: 'Invalid Post', // Falta el campo body
  userId: 1,
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(invalidPost),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al crear el post');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Resultado: Muestra "Error: Error al crear el post" en caso de error.
```

### Ejercicio 3: Crear múltiples posts en un bucle
Usa un bucle para crear múltiples posts con datos diferentes.
```javascript
const posts = [
  { title: 'Post 1', body: 'Content of post 1', userId: 1 },
  { title: 'Post 2', body: 'Content of post 2', userId: 1 },
];

posts.forEach(post => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});

// Resultado: Muestra los objetos de los posts creados en la consola.
```

### Ejercicio 4: Enviar datos de un formulario
Crea un formulario simple en HTML y envía sus datos utilizando una solicitud POST.
```html
<form id="postForm">
  <input type="text" id="title" placeholder="Title" required>
  <textarea id="body" placeholder="Body" required></textarea>
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newPost = {
      title: document.getElementById('title').value,
      body: document.getElementById('body').value,
      userId: 1,
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  });
</script>

// Resultado: Muestra el nuevo post creado en la consola después de enviar el formulario.
```

### Ejercicio 5: Crear un recurso con datos dinámicos
Realiza una solicitud POST utilizando datos dinámicos de una API.
```javascript
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(user => {
    const newPost = {
      title: 'Dynamic Post',
      body: `This post is created by ${user.name}.`,
      userId: user.id,
    };
    
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Resultado: Muestra el nuevo post con el nombre del usuario como contenido.
```

### Ejercicio 6: Realizar una solicitud POST y actualizar el DOM
Realiza una solicitud POST y muestra el resultado en un elemento del DOM.
```html
<div id="result"></div>

<script>
  const newPost = {
    title: 'New Post for DOM',
    body: 'This post will be displayed in the DOM.',
    userId: 1,
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').innerText = `Created Post: ${data.title}`;
    })
    .catch(error => console.error('Error:', error));
</script>

// Resultado: Muestra "Created Post: New Post for DOM" en el elemento con ID "result".
```

### Ejercicio 7: Enviar datos anidados en un objeto
Realiza una solicitud POST con un objeto que contiene datos anidados.
```javascript
const newComment = {
  postId: 1,
  comment: {
    name: 'Sample Commenter',
    email: 'commenter@example.com',
    body: 'This is a nested comment body.',
  },
};

fetch('https://jsonplaceholder.typicode.com/comments', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newComment),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Resultado: Muestra el nuevo comentario con ID asignado y detalles anidados.
```

### Ejercicio 8: Enviar archivos mediante POST
Crea un formulario para subir archivos y envía el archivo seleccionado a través de una solicitud POST.

```html
<form id="uploadForm">
  <input type="file" id="file" required>
  <button type="submit">Upload</button>
</form>

<script>
  document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    fetch('https://example.com/upload', { // Asegúrate de que la URL de carga sea correcta
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  });
</script>

// Resultado: Muestra la respuesta del servidor tras la subida del archivo.

```
## Conclusión
Estos ejercicios muestran cómo realizar solicitudes POST utilizando la Fetch API para enviar datos al servidor, desde la creación básica de un post hasta el envío de formularios y archivos. Con esta práctica, puedes entender mejor cómo interactuar con APIs y manejar datos en aplicaciones web.
