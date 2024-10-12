# Promesas en Cadena (Promise Chaining)

## Concepto
El **encadenamiento de promesas** es una técnica que permite ejecutar múltiples operaciones asincrónicas de manera secuencial utilizando promesas. En lugar de anidar múltiples callbacks (lo que puede llevar a un código menos legible conocido como "callback hell"), se pueden encadenar las promesas de forma que cada una dependa de la resolución de la anterior.

Cuando una promesa se resuelve, su resultado se puede pasar a la siguiente promesa en la cadena utilizando el método ```.then()```. Si una promesa se rechaza, el control se transfiere al siguiente bloque ```.catch()```.

## Sintaxis
El encadenamiento se realiza llamando a ```.then()``` en la promesa devuelta por la anterior. Aquí hay un ejemplo básico:
```javascript
const promesa = new Promise((resolve, reject) => {
  // operación asincrónica
  resolve("Resultado inicial");
});

promesa
  .then((resultado) => {
    console.log(resultado); // Resultado inicial
    return "Resultado de la primera promesa";
  })
  .then((resultadoSiguiente) => {
    console.log(resultadoSiguiente); // Resultado de la primera promesa
  });
```

## Ventajas
1. **Legibilidad:** Hace que el código sea más fácil de leer y seguir.
2. **Manejo de errores:** Los errores se pueden capturar en un solo lugar usando ```.catch()```, facilitando la depuración.
3. **Control de flujo:** Permite un control más preciso sobre el flujo de las operaciones asincrónicas.

## Ejercicios de Promesas en Cadena

### Ejercicio 1: Cadena simple
Crea una cadena de promesas que devuelva un mensaje inicial y luego lo transforme.
```javascript
const promesa = new Promise((resolve) => {
  resolve("Mensaje inicial");
});

promesa
  .then((mensaje) => {
    console.log(mensaje); // Mensaje inicial
    return mensaje + " transformado";
  })
  .then((mensajeTransformado) => {
    console.log(mensajeTransformado); // Mensaje inicial transformado
  });
// Resultado: "Mensaje inicial"
// Resultado: "Mensaje inicial transformado"
```

### Ejercicio 2: Encadenar cálculos
Realiza una serie de cálculos encadenando promesas.
```javascript
const calcular = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(num * 2), 1000);
  });
};

calcular(5)
  .then((resultado) => calcular(resultado))
  .then((resultado) => calcular(resultado))
  .then((resultadoFinal) => console.log(resultadoFinal)); // Resultado: 40
// Resultado: 40 (5 * 2 * 2 * 2)
```
### Ejercicio 3: Manejo de errores en cadena
Crea una cadena de promesas que maneje errores en cualquier parte de la cadena.
```javascript
const promesaConError = () => {
  return new Promise((resolve, reject) => {
    reject(new Error("Error en la promesa"));
  });
};

promesaConError()
  .then(() => console.log("Esto no se ejecuta"))
  .catch((error) => console.log(error.message)); // Resultado: "Error en la promesa"
// Resultado: "Error en la promesa"
```

### Ejercicio 4: Transformación de datos
Crea una cadena de promesas que transforme un conjunto de datos.
```javascript
const obtenerDatos = () => {
  return new Promise((resolve) => {
    resolve([1, 2, 3]);
  });
};

obtenerDatos()
  .then((datos) => datos.map((num) => num * 2))
  .then((datosTransformados) => console.log(datosTransformados)); // Resultado: [2, 4, 6]
// Resultado: [2, 4, 6]
```

### Ejercicio 5: Simulando una API con múltiples llamadas
Simula múltiples llamadas a una API y encadena los resultados.
```javascript
const fetchData1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Datos de la API 1"), 1000);
  });
};

const fetchData2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Datos de la API 2"), 1000);
  });
};

fetchData1()
  .then((datos1) => {
    console.log(datos1); // Datos de la API 1
    return fetchData2();
  })
  .then((datos2) => {
    console.log(datos2); // Datos de la API 2
  });
// Resultado: "Datos de la API 1"
// Resultado: "Datos de la API 2"
```


### Ejercicio 6: Promesas encadenadas con retardo
Crea promesas encadenadas que simulan tareas con diferentes retardos.
```javascript
const tarea = (nombre, tiempo) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${nombre} completada`), tiempo);
  });
};

tarea("Tarea 1", 1000)
  .then((resultado) => {
    console.log(resultado); // Tarea 1 completada
    return tarea("Tarea 2", 1500);
  })
  .then((resultado) => {
    console.log(resultado); // Tarea 2 completada
    return tarea("Tarea 3", 2000);
  })
  .then((resultado) => {
    console.log(resultado); // Tarea 3 completada
  });
// Resultado: "Tarea 1 completada"
// Resultado: "Tarea 2 completada"
// Resultado: "Tarea 3 completada"
```


### Ejercicio 7: Encadenando operaciones de datos
Crea una cadena de promesas que procese una lista de números.
```javascript
const procesarNumeros = (numeros) => {
  return new Promise((resolve) => {
    const resultado = numeros.map((num) => num + 1);
    resolve(resultado);
  });
};

procesarNumeros([1, 2, 3])
  .then((resultados) => {
    console.log(resultados); // [2, 3, 4]
    return procesarNumeros(resultados);
  })
  .then((resultadosFinales) => {
    console.log(resultadosFinales); // [3, 4, 5]
  });
// Resultado: [2, 3, 4]
// Resultado: [3, 4, 5]
```

### Ejercicio 8: Manejo de múltiples promesas encadenadas
Maneja múltiples promesas que dependan de un valor inicial.
```javascript
const inicial = 10;

const sumar = (num) => {
  return new Promise((resolve) => {
    resolve(num + 5);
  });
};

const multiplicar = (num) => {
  return new Promise((resolve) => {
    resolve(num * 2);
  });
};

sumar(inicial)
  .then((resultadoSuma) => multiplicar(resultadoSuma))
  .then((resultadoFinal) => console.log(resultadoFinal)); // Resultado: 30
// Resultado: 30 (10 + 5) * 2
```

## Conclusión
El encadenamiento de promesas permite estructurar el código asincrónico de una manera que mejora la legibilidad y el manejo de errores. Los ejemplos proporcionados ilustran cómo encadenar promesas para llevar a cabo operaciones complejas de forma secuencial.