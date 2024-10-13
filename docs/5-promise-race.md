# Promise.race

## Concepto
```promise.race``` es un método que devuelve una nueva promesa que se resuelve o se rechaza tan pronto como una de las promesas en el iterable dado se resuelve o se rechaza, con el valor o razón de esa promesa. Esto es útil cuando necesitas realizar múltiples operaciones asincrónicas y quieres continuar con la primera que complete, sin importar si es un éxito o un error.
## Sintaxis
```javascript
Promise.race(iterable)
  .then((resultado) => {
    // Se ejecuta cuando la primera promesa se resuelve
  })
  .catch((error) => {
    // Se ejecuta si la primera promesa se rechaza
  });

```
- ```iterable:``` Un objeto iterable (como un array) de promesas.
- ```then():``` Se ejecuta cuando la primera promesa se resuelve.
- ```catch():``` Se ejecuta cuando la primera promesa se rechaza.

## Ventajas
1. **Velocidad:** Permite actuar tan pronto como la primera promesa se resuelve, mejorando la eficiencia en operaciones que pueden completarse a diferentes velocidades.
2. **Flexibilidad:** Facilita el manejo de situaciones donde solo necesitas la respuesta de la primera promesa que finalice.
3. **Manejo de errores:** Proporciona un manejo de errores simple al resolver la promesa con el error de la primera que falle.

## Ejercicios de Promise.race

### Ejercicio 1: Resolución de múltiples promesas
Utiliza ```Promise.race``` para resolver la primera promesa que se complete.

```javascript
const promesa1 = new Promise((resolve) => setTimeout(() => resolve("Promesa 1 completada"), 2000));
const promesa2 = new Promise((resolve) => setTimeout(() => resolve("Promesa 2 completada"), 1000));

Promise.race([promesa1, promesa2])
  .then((resultado) => {
    console.log(resultado); // Resultado: "Promesa 2 completada"
  });
// Resultado: "Promesa 2 completada"
```
**Explicación:**
- Este código crea dos promesas (```promesa1``` y ```promesa2```), que se resuelven en 2000 ms y 1000 ms respectivamente.
- ```Promise.race``` se utiliza para ejecutar ambas promesas en paralelo, pero solo la primera promesa que se complete será la que determine el resultado.
- En este caso, ```promesa2``` se completa primero (en 1000 ms), por lo que ```Promise.race``` devolverá el resultado de ```promesa2```.

**Resultado:**
```
Promesa 2 completada
```

### Ejercicio 2: Manejo de rechazos
Muestra cómo manejar el rechazo de la primera promesa que se complete.
```javascript
const promesaExitosa = new Promise((resolve) => setTimeout(() => resolve("Éxito"), 1000));
const promesaFallida = new Promise((_, reject) => setTimeout(() => reject("Error"), 500));

Promise.race([promesaExitosa, promesaFallida])
  .then((resultado) => {
    console.log(resultado); // Este bloque no se ejecutará
  })
  .catch((error) => {
    console.log(error); // Resultado: "Error"
  });
// Resultado: "Error"
```
**Explicación:**
- Se crean dos promesas: una (```promesaExitosa```) se resuelve con éxito en 1000 ms, y la otra (```promesaFallida```) se rechaza con un error en 500 ms.

- ```Promise.race``` devolverá el primer resultado, ya sea éxito o fallo. Como ```promesaFallida``` se rechaza primero, el bloque ```catch``` manejará el error.

**Resultado:**
```
Error
```


### Ejercicio 3: Simulando tareas asincrónicas
Simula tareas con diferentes tiempos de retraso y usa ```Promise.race```.
```javascript
const retrasar = (mensaje, tiempo) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mensaje), tiempo);
  });
};

Promise.race([
  retrasar("Tarea 1 completada", 3000),
  retrasar("Tarea 2 completada", 1000),
  retrasar("Tarea 3 completada", 2000),
]).then((resultado) => {
  console.log(resultado); // Resultado: "Tarea 2 completada"
});
// Resultado: "Tarea 2 completada"
```
**Explicación:**
- El código define una función ```retrasar``` que simula una tarea asincrónica que se resuelve después de un cierto retraso.
- Tres promesas se ejecutan con retrasos diferentes (3000 ms, 1000 ms, y 2000 ms).
- ```Promise.race``` devolverá el resultado de la promesa que se complete primero, que en este caso es la tarea con 1000 ms de retraso.

**Resultado:**
```
Tarea 2 completada
```


### Ejercicio 4: Usando con la API fetch
Ejecuta varias solicitudes a una API y actúa según la primera respuesta.
```javascript
const obtenerUsuario = () => {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => res.json());
};

const obtenerPublicaciones = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then((res) => res.json());
};

Promise.race([obtenerUsuario(), obtenerPublicaciones()])
  .then((resultado) => {
    console.log(resultado); // Resultado dependerá de cuál promesa se complete primero
  });
// Muestra el resultado de la primera respuesta
```
**Explicación:**
- El código realiza dos solicitudes ```fetch``` en paralelo: una para obtener un usuario y otra para obtener las publicaciones de ese usuario.
- ```Promise.race``` devolverá la primera respuesta que se complete entre las dos. Dependiendo de la velocidad del servidor o red, podría ser cualquiera de las dos.

**Resultado:**

Dependerá de cuál de las dos promesas se resuelva primero. Puede ser el usuario o las publicaciones.

### Ejercicio 5: Combinación de múltiples promesas
Ejecuta varias promesas y muestra cómo ```Promise.race``` se comporta con varias combinaciones.
```javascript
const promesa1 = Promise.resolve("Resultado 1");
const promesa2 = new Promise((resolve) => setTimeout(() => resolve("Resultado 2"), 2000));
const promesa3 = new Promise((_, reject) => setTimeout(() => reject("Error 3"), 1000));

Promise.race([promesa1, promesa2, promesa3])
  .then((resultado) => {
    console.log(resultado); // Resultado: "Resultado 1"
  })
  .catch((error) => {
    console.log(error); // Este bloque no se ejecutará
  });
// Resultado: "Resultado 1"
```
**Explicación:**
- Se crean tres promesas. La primera (```promesa1```) se resuelve de inmediato, la segunda tiene un retraso de 2000 ms, y la tercera se rechaza después de 1000 ms.
- Como ```promesa1``` se resuelve de inmediato, será el resultado devuelto por ```Promise.race```.

**Resultado:**
```
Resultado 1
```

### Ejercicio 6: Timeout con promesas
Implementa un timeout para rechazar una promesa si no se resuelve a tiempo.
```javascript
const timeout = (ms) => {
  return new Promise((_, reject) => setTimeout(() => reject("Tiempo agotado"), ms));
};

const tarea = new Promise((resolve) => {
  setTimeout(() => resolve("Tarea completada"), 2000);
});

Promise.race([tarea, timeout(1500)])
  .then((resultado) => {
    console.log(resultado); // Este bloque no se ejecutará
  })
  .catch((error) => {
    console.log(error); // Resultado: "Tiempo agotado"
  });
// Resultado: "Tiempo agotado"
```
**Explicación:**
- Se crea una función ```timeout``` que rechaza una promesa después de un tiempo determinado.
- Se crea otra promesa ```tarea``` que se resuelve en 2000 ms. Sin embargo, como el timeout se ejecuta después de 1500 ms, la promesa será rechazada antes de que tarea se resuelva.
- ```Promise.race``` devuelve el error del timeout porque ocurre primero.

**Resultado:**
```
Tiempo agotado
```

### Ejercicio 7: Combinando resultados y errores
Ejecuta varias promesas y maneja el resultado de la primera que complete.
```javascript
const promesa1 = new Promise((resolve) => setTimeout(() => resolve("Primera"), 1500));
const promesa2 = new Promise((_, reject) => setTimeout(() => reject("Error en la segunda"), 1000));

Promise.race([promesa1, promesa2])
  .then((resultado) => {
    console.log(resultado); // Resultado: "Primera"
  })
  .catch((error) => {
    console.log(error); // Este bloque no se ejecutará
  });
// Resultado: "Primera"
```
**Explicación:**
- Este código utiliza dos promesas: la primera (```promesa1```) se resuelve después de 1500 ms, mientras que la segunda (```promesa2```) se rechaza después de 1000 ms.
- Dado que ```promesa2``` se rechaza primero, se manejará ese error en el bloque catch. Sin embargo, en este caso, el código ejecuta ```promesa1``` primero, por lo que se resuelve con éxito.

**Resultado:**
```
Primera
```

### Ejercicio 8: Varios retrasos
Demuestra el uso de ```Promise.race``` con múltiples retrasos y acciones.
```javascript
const tareas = [
  new Promise((resolve) => setTimeout(() => resolve("Tarea A"), 3000)),
  new Promise((resolve) => setTimeout(() => resolve("Tarea B"), 2000)),
  new Promise((resolve) => setTimeout(() => resolve("Tarea C"), 1000)),
];

Promise.race(tareas)
  .then((resultado) => {
    console.log(resultado); // Resultado: "Tarea C"
  });
// Resultado: "Tarea C"
```
**Explicación:**
- Se ejecutan tres promesas con diferentes tiempos de retraso (3000 ms, 2000 ms, y 1000 ms).
- ```Promise.race``` devolverá el resultado de la promesa que se complete primero, en este caso la que tiene un retraso de 1000 ms (```area C```).

**Resultado:**
```
Tarea C
```

## Conclusión
```Promise.race``` es una herramienta poderosa para manejar múltiples promesas, permitiendo continuar con el primer resultado disponible, ya sea un éxito o un error. Esto proporciona flexibilidad y eficiencia en situaciones donde el tiempo es crítico. Los ejemplos ilustran su uso en una variedad de contextos, desde simulaciones simples hasta interacciones con APIs, ayudando a comprender mejor su funcionamiento y aplicaciones prácticas.