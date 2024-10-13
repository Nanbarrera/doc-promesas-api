# Promise.all

## Concepto
```Promise.all``` es un método que permite ejecutar múltiples promesas en paralelo. Este método toma un array de promesas como argumento y devuelve una nueva promesa que se resuelve cuando todas las promesas del array se han resuelto o se rechaza si alguna de las promesas se rechaza. Esto es útil cuando necesitas realizar múltiples operaciones asincrónicas y esperar a que todas terminen antes de continuar con el siguiente paso.

## Sintaxis
```javascript
Promise.all(iterable)
  .then((resultados) => {
    // Todos los resultados están disponibles aquí
  })
  .catch((error) => {
    // Si alguna promesa se rechaza, este bloque se ejecutará
  });
```
- ```iterable:``` Un objeto iterable (como un array) de promesas.
- ```then():``` Se ejecuta cuando todas las promesas se resuelven, y los resultados se pasan como un array.
- ```catch():``` Se ejecuta si alguna promesa se rechaza.

## Ventajas
1. **Eficiencia:** Permite ejecutar múltiples operaciones asincrónicas al mismo tiempo, en lugar de esperar a que se resuelva cada una en secuencia.
2. **Manejo de errores:** Si alguna promesa falla, se puede manejar el error de manera centralizada.
3. **Simplificación del código:** Facilita el manejo de múltiples promesas en un solo lugar.

## Ejercicios de Promise.all

### Ejercicio 1: Ejecutar múltiples promesas
Crea varias promesas y utilízalas con ```Promise.all```.

```javascript
const promesa1 = Promise.resolve(1);
const promesa2 = Promise.resolve(2);
const promesa3 = Promise.resolve(3);

Promise.all([promesa1, promesa2, promesa3])
  .then((resultados) => {
    console.log(resultados); // Resultado: [1, 2, 3]
  });
// Resultado: [1, 2, 3]
```
**Explicación:**
- ```Promise.resolve()``` crea promesas que se resuelven inmediatamente con los valores proporcionados.
- ```Promise.all()``` toma un array de promesas y espera que todas se resuelvan antes de continuar. Si todas las promesas se resuelven con éxito, devuelve un array con los resultados.
- En este caso, las tres promesas (```promesa1```, ```promesa2``` y ```promesa3```) se resuelven con los valores 1, 2 y 3 respectivamente.
- ```Promise.all()``` devuelve un array con estos resultados: ```[1, 2, 3]```.

**Resultado:**
```
[1, 2, 3]
```

### Ejercicio 2: Manejar rechazos
Muestra cómo manejar un rechazo en una de las promesas.
```javascript
const promesaExitosa = Promise.resolve("Éxito");
const promesaFallida = Promise.reject("Error");

Promise.all([promesaExitosa, promesaFallida])
  .then((resultados) => {
    console.log(resultados); // Este bloque no se ejecutará
  })
  .catch((error) => {
    console.log(error); // Resultado: "Error"
  });
// Resultado: "Error"
```
**Explicación:**
- Aquí tenemos una promesa que se resuelve (promesaExitosa) y otra que se rechaza (promesaFallida).
- ```Promise.all()``` falla si al menos una de las promesas en su array es rechazada, por lo que el bloque ```.then()``` no se ejecutará.
- El bloque ```.catch()``` captura el error de la promesa fallida, mostrando ```"Error"```.

**Resultado:**
```
Error
```

### Ejercicio 3: Simulando retrasos
Simula promesas con retrasos y ejecútalas en paralelo.
```javascript
const retrasar = (mensaje, tiempo) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mensaje), tiempo);
  });
};

Promise.all([
  retrasar("Tarea 1 completada", 1000),
  retrasar("Tarea 2 completada", 2000),
  retrasar("Tarea 3 completada", 1500),
]).then((resultados) => {
  console.log(resultados); 
  // Resultado: ["Tarea 1 completada", "Tarea 2 completada", "Tarea 3 completada"]
});
// Resultado: ["Tarea 1 completada", "Tarea 2 completada", "Tarea 3 completada"]
```
**Explicación:**
- ```retrasar()``` es una función que crea una promesa que se resuelve después de un tiempo especificado (en milisegundos).
- ```Promise.all()``` se usa aquí para ejecutar tres promesas en paralelo, cada una con un retraso diferente.
- Cuando todas las promesas se resuelven, los resultados se devuelven como un array y se imprimen: ```["Tarea 1 completada", "Tarea 2 completada", "Tarea 3 completada"]```.

**Resultado:**
```
["Tarea 1 completada", "Tarea 2 completada", "Tarea 3 completada"]
```

### Ejercicio 4: Uso en fetch API
Ejecuta múltiples solicitudes a una API.
```javascript
const obtenerUsuario = () => {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => res.json());
};

const obtenerPublicaciones = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then((res) => res.json());
};

Promise.all([obtenerUsuario(), obtenerPublicaciones()])
  .then(([usuario, publicaciones]) => {
    console.log(usuario); // Muestra el usuario
    console.log(publicaciones); // Muestra las publicaciones
  });
// Muestra el usuario y sus publicaciones en paralelo
```
**Explicación:**
- ```obtenerUsuario()``` y ```obtenerPublicaciones()``` son funciones que realizan solicitudes fetch a una API. Devuelven promesas que se resuelven cuando los datos han sido recuperados y convertidos a JSON.
- ```Promise.all()``` permite que ambas solicitudes se realicen en paralelo. Una vez que ambas promesas se resuelven, sus resultados se devuelven como un array.
- Desestructuramos el array para obtener el ```usuario``` y las ```publicaciones```, que se imprimen en la consola.

**Resultado:**
```
{ usuario... } // Datos del usuario
[{ publicación... }, { publicación... }] // Lista de publicaciones
```


### Ejercicio 5: Mapeo de datos asincrónicos
Ejecuta una función asincrónica en un array de datos.
```javascript
const numeros = [1, 2, 3, 4];

const duplicar = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(num * 2), 500);
  });
};

Promise.all(numeros.map(duplicar)).then((resultados) => {
  console.log(resultados); // Resultado: [2, 4, 6, 8]
});
// Resultado: [2, 4, 6, 8]
```
**Explicación:**
- Creamos una función ```duplicar()``` que toma un número y devuelve una promesa que se resuelve con el número duplicado después de 500 ms.
- ```numeros.map(duplicar)``` genera un array de promesas que se resuelven en paralelo.
- ```Promise.all()``` espera que todas las promesas del array se resuelvan y devuelve los resultados como un array: ```[2, 4, 6, 8]```.

**Resultado:**
```
[2, 4, 6, 8]
```

### Ejercicio 6: Promesas anidadas
Muestra cómo ```Promise.all``` puede usarse con promesas anidadas.
```javascript
const obtenerDatos = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(num), 1000);
  });
};

Promise.all([obtenerDatos(1), obtenerDatos(2)])
  .then((resultados) => {
    return Promise.all(resultados.map((num) => obtenerDatos(num + 1)));
  })
  .then((resultadosFinales) => {
    console.log(resultadosFinales); // Resultado: [2, 3]
  });
// Resultado: [2, 3]
```
**Explicación:**
- ```obtenerDatos()``` es una función que devuelve una promesa que se resuelve con el número proporcionado después de 1 segundo.
- ```Promise.all([obtenerDatos(1), obtenerDatos(2)])``` espera que ambas promesas se resuelvan y devuelve un array con los resultados: ```[1, 2]```.
- Después, utilizamos ```map()``` para incrementar cada número en 1 y llamamos a obtenerDatos() nuevamente para obtener los valores actualizados: ```[2, 3]```.

Resultado:
```
[2, 3]
```


### Ejercicio 7: Combinando resultados de diferentes fuentes
Ejecuta múltiples promesas que devuelven diferentes tipos de datos.
```javascript
const obtenerDatos1 = () => Promise.resolve("Datos de la API 1");
const obtenerDatos2 = () => Promise.resolve("Datos de la API 2");

Promise.all([obtenerDatos1(), obtenerDatos2()])
  .then(([datos1, datos2]) => {
    console.log(datos1); // Resultado: "Datos de la API 1"
    console.log(datos2); // Resultado: "Datos de la API 2"
  });
// Resultado: "Datos de la API 1"
// Resultado: "Datos de la API 2"
```
**Explicación:**
- ```obtenerDatos1()``` y ```obtenerDatos2()``` son dos funciones que simulan la obtención de datos de una API, resolviendo las promesas con cadenas.
- ```Promise.all()``` espera que ambas promesas se resuelvan y devuelve los resultados: ```"Datos de la API 1"``` y ```"Datos de la API 2"```.

**Resultado:**
```
Datos de la API 1
Datos de la API 2
```

### Ejercicio 8: Combinar errores y resultados
Muestra cómo manejar errores de manera efectiva con ```Promise.all```.
```javascript
const promesaExitosa = Promise.resolve("Todo bien");
const promesaFallida = new Promise((_, reject) => setTimeout(() => reject("Algo salió mal"), 500));

Promise.all([promesaExitosa, promesaFallida])
  .then((resultados) => {
    console.log(resultados); // Este bloque no se ejecutará
  })
  .catch((error) => {
    console.log(error); // Resultado: "Algo salió mal"
  });
// Resultado: "Algo salió mal"
```
**Explicación:**
- Aquí tenemos una promesa resuelta (```promesaExitosa```) y otra que falla después de 500 ms (promesaFallida).
- ```Promise.all()``` falla si alguna promesa es rechazada. Por lo tanto, el bloque ```.then()``` no se ejecuta.
- El bloque ```.catch()``` captura el error y lo imprime: ```"Algo salió mal"```.

**Resultado:**
```
Algo salió mal
```

## Conclusión
```Promise.all``` es una herramienta poderosa para manejar múltiples promesas de forma simultánea y eficiente. Permite gestionar el flujo de datos en operaciones asincrónicas y simplifica el manejo de errores, lo que resulta en un código más limpio y fácil de mantener. Los ejemplos proporcionados ilustran su uso en diferentes situaciones, desde tareas simples hasta interacciones con APIs.