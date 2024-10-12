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

## Conclusión
Estos ejercicios demuestran cómo utilizar la API Fetch para trabajar con blobs. Desde la obtención de imágenes y archivos binarios hasta la conversión de esos blobs en diferentes formatos y su manipulación en el DOM, estos ejemplos ilustran la versatilidad de los blobs en aplicaciones web