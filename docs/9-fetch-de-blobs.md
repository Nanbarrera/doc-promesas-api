# Fetch de Blobs

## Concepto
Los **blobs** (Binary Large Objects) son objetos que representan datos binarios, como imágenes, audio o archivos. La API Fetch permite obtener blobs utilizando el método fetch(). Esto es especialmente útil para trabajar con archivos que se necesitan procesar o mostrar en aplicaciones web. Al obtener un blob, se puede manipular como un objeto URL, permitiendo, por ejemplo, mostrar imágenes en un elemento ```<img>```.

## Sintaxis Básica
Para obtener un blob usando Fetch, la sintaxis es la siguiente:
```javascript
fetch(url)
  .then(response => response.blob()) // Convierte la respuesta a un blob
  .then(blob => {
    // Aquí puedes manipular el blob, como crear una URL de objeto
    const url = URL.createObjectURL(blob);
    console.log(url);
  })
  .catch(error => console.error('Error:', error));

```

## Ejercicios de Fetch de Blobs

### Ejercicio 1: Obtener un blob de una imagen
Realiza una solicitud Fetch para obtener una imagen como blob y muestra la URL de la imagen en la consola.
```javascript
fetch('https://via.placeholder.com/150')
  .then(response => response.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    console.log(url);
  })
  .catch(error => console.error('Error:', error));

// Resultado: Muestra la URL del blob de la imagen en la consola.
```
**Explicación:**
- ```fetch```: Se hace una solicitud HTTP a la URL proporcionada, en este caso, una imagen de 150x150 px.
- ```.then(response => response.blob())```: Una vez que se recibe la respuesta, se convierte a un blob, que es un objeto que representa datos en forma de archivo.
- ```.then(blob => {...})```: Se crea una URL para el blob utilizando ```URL.createObjectURL(blob)```. Esta URL puede ser utilizada para mostrar o descargar la imagen.
- ```console.log(url)```: Se imprime la URL en la consola.
- ```.catch```: Maneja cualquier error que ocurra durante la solicitud.

**Resultado:**
```
<p id="imageUrl"></p>
<script>
  fetch('https://via.placeholder.com/150')
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      document.getElementById('imageUrl').innerText = url;
    })
    .catch(error => console.error('Error:', error));
</script>
```


### Ejercicio 2: Mostrar una imagen en el DOM
Obtén un blob de una imagen y muéstrala en el DOM usando la URL creada.
```html
<img id="image" alt="Placeholder Image" />
<script>
  fetch('https://via.placeholder.com/150')
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      document.getElementById('image').src = url;
    })
    .catch(error => console.error('Error:', error));
</script>

// Resultado: Muestra la imagen de 150x150 px en el DOM.
```
**Explicación:**
- ```<img>```: Se define un elemento ```<img>``` en el HTML con un ID.
- ```fetch```: Se solicita la imagen como en el ejercicio anterior.
- ```.then(blob => {...})```: Se convierte la respuesta en un blob.
- ```document.getElementById('image').src = url```: La URL del blob se asigna al atributo ```src``` de la imagen, lo que hace que se muestre en el DOM.
- ```.catch```: Maneja errores.


**Resultado:** 
```
La imagen se mostrará automáticamente en el DOM.
```


### Ejercicio 3: Descargar un archivo de texto como blob
Realiza una solicitud Fetch para obtener un archivo de texto como blob y muestra su contenido en la consola.
```javascript
fetch('https://example.com/sample.txt')
  .then(response => response.blob())
  .then(blob => {
    const reader = new FileReader();
    reader.onload = function() {
      console.log(reader.result);
    };
    reader.readAsText(blob);
  })
  .catch(error => console.error('Error:', error));

// Resultado: Muestra el contenido del archivo de texto en la consola.
```

**Explicación:**
- ```fetch```: Se hace una solicitud para obtener un archivo de texto.
- ```response.blob()```: Se convierte la respuesta en un blob.
- ```const reader = new FileReader()```: Se crea un objeto FileReader para leer el contenido del blob.
- ```reader.onload```: Se define una función que se ejecuta cuando se termina de leer el blob.
- ```console.log(reader.result)```: Se imprime el contenido del archivo de texto en la consola.
- ```reader.readAsText(blob)```: Se inicia la lectura del blob como texto.
- ```.catch```: Maneja errores.

**Mostrar el resultado en el DOM:**
```
<pre id="fileContent"></pre>
<script>
  fetch('https://example.com/sample.txt')
    .then(response => response.blob())
    .then(blob => {
      const reader = new FileReader();
      reader.onload = function() {
        document.getElementById('fileContent').innerText = reader.result;
      };
      reader.readAsText(blob);
    })
    .catch(error => console.error('Error:', error));
</script>
```

### Ejercicio 4: Descargar y mostrar un archivo de audio
Obtén un archivo de audio como blob y crea un elemento ```<audio>``` en el DOM para reproducirlo.
```html
<audio id="audio" controls></audio>
<script>
  fetch('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      document.getElementById('audio').src = url;
    })
    .catch(error => console.error('Error:', error));
</script>

// Resultado: Permite reproducir el archivo de audio en el DOM.
```
**Explicación:**
- ```<audio>```: Se define un elemento ```<audio>``` en el HTML con controles.
- ```fetch```: Se solicita el archivo de audio.
- ```response.blob()```: Se convierte la respuesta en un blob.
- ```const url = URL.createObjectURL(blob)```: Se crea una URL para el blob.
- ```document.getElementById('audio').src = url```: La URL se asigna al src del elemento ```<audio>```, permitiendo su reproducción.
- ```.catch```: Maneja errores.

**Mostrar el resultado:** 
```
El audio se podrá reproducir automáticamente en el DOM.
```

### Ejercicio 5: Descargar una imagen y convertirla a base64
Descarga una imagen como blob y conviértela a una cadena base64
```javascript
fetch('https://via.placeholder.com/150')
  .then(response => response.blob())
  .then(blob => {
    const reader = new FileReader();
    reader.onloadend = function() {
      console.log(reader.result); // Muestra la imagen como base64
    };
    reader.readAsDataURL(blob);
  })
  .catch(error => console.error('Error:', error));

// Resultado: Muestra la cadena base64 de la imagen en la consola.
```
**Explicación:**
- ```fetch```: Se solicita la imagen como en ejercicios anteriores.
- ```response.blob()```: Se convierte la respuesta en un blob.
- ```const reader = new FileReader()```: Se crea un objeto FileReader para leer el blob.
- ```reader.onloadend```: Se define una función que se ejecuta cuando se termina de leer.
- ```console.log(reader.result)```: Se imprime la representación base64 de la imagen.
- ```reader.readAsDataURL(blob)```: Se inicia la lectura del blob como una URL de datos.

**Mostrar el resultado en el DOM:**
```
<p id="base64Image"></p>
<script>
  fetch('https://via.placeholder.com/150')
    .then(response => response.blob())
    .then(blob => {
      const reader = new FileReader();
      reader.onloadend = function() {
        document.getElementById('base64Image').innerText = reader.result; // Muestra la imagen como base64
      };
      reader.readAsDataURL(blob);
    })
    .catch(error => console.error('Error:', error));
</script>
```

### Ejercicio 6: Descargar un archivo PDF como blob
Obtén un archivo PDF como blob y crea un enlace para descargarlo.
```html
<a id="download" href="#" download="sample.pdf">Download PDF</a>
<script>
  fetch('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf')
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      document.getElementById('download').href = url;
    })
    .catch(error => console.error('Error:', error));
</script>

// Resultado: Permite descargar un archivo PDF al hacer clic en el enlace.
<a id="download" href="#" download="sample.pdf">Download PDF</a>
<script>
  fetch('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf')
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      document.getElementById('download').href = url;
    })
    .catch(error => console.error('Error:', error));
</script>

// Resultado: Permite descargar un archivo PDF al hacer clic en el enlace.
```
**Explicación:**
- ```<a>```: Se define un enlace en el HTML para descargar el PDF.
- ```fetch```: Se solicita el archivo PDF.
- ```response.blob()```: Se convierte la respuesta en un blob.
- ```const url = URL.createObjectURL(blob)``` Se crea una URL para el blob.
- ```document.getElementById('download').href = url```: La URL se asigna al atributo ```href``` del enlace, permitiendo la descarga.
- ```.catch```: Maneja errores.

**Mostrar el resultado:**
```
Al hacer clic en el enlace, se descargará el PDF.
```

### Ejercicio 7: Cargar un video como blob y reproducirlo
Descripción: Obtén un archivo de video como blob y crea un elemento ```<video>``` en el DOM para reproducirlo.
```html
<video id="video" controls></video>
<script>
  fetch('https://www.w3schools.com/html/mov_bbb.mp4')
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      document.getElementById('video').src = url;
    })
    .catch(error => console.error('Error:', error));
</script>

// Resultado: Permite reproducir el archivo de video en el DOM.
```
**Explicación:**
- ```<video>``` Se define un elemento ```<video>``` en el HTML con controles.
- ```fetch```: Se solicita el archivo de video.
- ```response.blob()```: Se convierte la respuesta en un blob.
- ```const url = URL.createObjectURL(blob)```: Se crea una URL para el blob.
- ```document.getElementById('video').src = url```: La URL se asigna al src del elemento ```<video>```, permitiendo su reproducción.
- ```.catch```: Maneja errores.

**Mostrar el resultado:**
```
El video se podrá reproducir automáticamente en el DOM.
```

### Ejercicio 8: Subir un blob a un servidor
Crea un formulario para seleccionar un archivo y subirlo como blob a un servidor.
```html
<form id="uploadForm">
  <input type="file" id="file" required>
  <button type="submit">Upload</button>
</form>

<script>
  document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file');
    const blob = fileInput.files[0];

    const formData = new FormData();
    formData.append('file', blob);

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

**Explicación:**
- ```<form>```: Se define un formulario para cargar un archivo.
- ```event.preventDefault()```: Se evita el comportamiento predeterminado del formulario.
- ```const file = document.getElementById('file').files[0]```: Se obtiene el archivo seleccionado por el usuario.
- ```const formData = new FormData()```: Se crea un nuevo objeto ```FormData``` para enviar el archivo.
- ```formData.append('file', file)```: Se agrega el archivo al objeto ```FormData```.
- ```fetch```: Se hace una solicitud POST al servidor con el ```formData```.
- ```.then(response => response.json())```: Se espera la respuesta en formato JSON.
- ```console.log(data)```: Se imprime la respuesta en la consola.
- ```.catch```: Maneja errores.

**Mostrar el resultado:**
```
La respuesta del servidor se mostrará en la consola después de la carga.
```

## Conclusión
Estos ejercicios demuestran cómo utilizar la API Fetch para trabajar con blobs. Desde la obtención de imágenes y archivos binarios hasta la conversión de esos blobs en diferentes formatos y su manipulación en el DOM, estos ejemplos ilustran la versatilidad de los blobs en aplicaciones web