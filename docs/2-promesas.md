# Promesas (Promises)

## Concepto y definición
Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante. Las promesas permiten trabajar con código asincrónico de una manera más manejable y legible, evitando la anidación de múltiples callbacks, lo que es conocido como "callback hell".

Una promesa puede estar en uno de tres estados:

- **Pendiente (pending):** Es el estado inicial de la promesa, ni cumplida ni rechazada.
- **Cumplida (fulfilled):** Significa que la operación asincrónica se completó exitosamente y tiene un valor asociado.
- **Rechazada (rejected):** Significa que la operación asincrónica falló y tiene una razón (error) asociada.

## Sintaxis y uso básico
Una promesa se crea utilizando el constructor Promise, que recibe una función ejecutora con dos parámetros (```resolve``` y ```reject```):
```javascript
let promesa = new Promise((resolve, reject) => {
  // operación asincrónica
  if (operaciónExitosa) {
    resolve(valor); // la operación fue exitosa
  } else {
    reject(error); // la operación falló
  }
});
```

## Uso Básico
Para manejar el resultado de una promesa, se utilizan los métodos ```.then()``` y ```.catch()```:

- ```.then():``` Se ejecuta cuando la promesa se resuelve correctamente (estado "fulfilled").
- ```.catch():``` Se ejecuta cuando la promesa es rechazada (estado "rejected").
- ```.finally():``` Se ejecuta después de que la promesa ha sido cumplida o rechazada, sin importar el resultado.

``` javascript
promesa
  .then((resultado) => {
    console.log("Promesa cumplida:", resultado);
  })
  .catch((error) => {
    console.log("Promesa rechazada:", error);
  })
  .finally(() => {
    console.log("Operación finalizada.");
  });
```

## Ejercicios con Promesas

### Ejercicio 1: Promesa básica
Crea una promesa que se cumpla después de 2 segundos y devuelva un mensaje.
```javascript
const promesa = new Promise((resolve) => {
  setTimeout(() => resolve("Promesa cumplida después de 2 segundos"), 2000);
});

promesa.then((resultado) => console.log(resultado));
// Resultado: "Promesa cumplida después de 2 segundos"
```

### Ejercicio 2: Promesa rechazada
Crea una promesa que rechace con un error después de 3 segundos.
```javascript
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Error después de 3 segundos")), 3000);
});

promesa.catch((error) => console.log(error.message));
// Resultado: "Error después de 3 segundos"
```

### Ejercicio 3: Uso de .finally()
Crea una promesa que simule una operación y use .finally() para ejecutar código después de que se cumpla o rechace.
```javascript
const promesa = new Promise((resolve) => {
  setTimeout(() => resolve("Operación completada"), 1000);
});

promesa
  .then((resultado) => console.log(resultado))
  .finally(() => console.log("Operación finalizada"));
// Resultado: "Operación completada"
// Resultado: "Operación finalizada"
```

### Ejercicio 4: Encadenamiento de Promesas
Realiza tres promesas encadenadas para transformar un valor inicial.
```javascript
new Promise((resolve) => {
  resolve(5);
})
  .then((num) => num * 2)
  .then((num) => num + 3)
  .then((num) => console.log(num));
// Resultado: 13

```

### Ejercicio 5: Simulando una API con Promesas
Simula una llamada a una API con promesas que retorne los datos después de 2 segundos.
```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ nombre: "Juan", edad: 25 }), 2000);
  });
}

fetchData().then((datos) => console.log(datos));
// Resultado: { nombre: 'Juan', edad: 25 }
```

### Ejercicio 6: Promesas con ```reject```
Crea una promesa que rechace si un número es impar y resuelva si es par.
```javascript
const verificarNumeroPar = (numero) => {
  return new Promise((resolve, reject) => {
    if (numero % 2 === 0) {
      resolve("El número es par");
    } else {
      reject("El número es impar");
    }
  });
};

verificarNumeroPar(4)
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error));
// Resultado: "El número es par"
```

### Ejercicio 7: Usando ```Promise.all```
Utiliza ```Promise.all``` para ejecutar múltiples promesas en paralelo y esperar a que todas se resuelvan.
```javascript
const promesa1 = Promise.resolve(3);
const promesa2 = new Promise((resolve) => setTimeout(resolve, 1000, "foo"));
const promesa3 = Promise.resolve("bar");

Promise.all([promesa1, promesa2, promesa3]).then((valores) =>
  console.log(valores)
);
// Resultado: [3, "foo", "bar"]
```

### Ejercicio 8: Usando ```Promise.race```
Utiliza ```Promise.race``` para resolver una promesa tan pronto como la primera se resuelva o rechace.
```javascript
const promesa1 = new Promise((resolve) => setTimeout(resolve, 500, "Primera promesa"));
const promesa2 = new Promise((resolve) => setTimeout(resolve, 1000, "Segunda promesa"));

Promise.race([promesa1, promesa2]).then((resultado) => console.log(resultado));
// Resultado: "Primera promesa"

```
