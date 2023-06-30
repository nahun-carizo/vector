function generarVectorA(n) {
    const vectorA = [];
    for (let i = 0; i < n; i++) {
      vectorA.push(Math.floor(Math.random() * 32000));
    }
    return vectorA;
  }
  
  function calcularPromedio(vector) {
    let suma = 0;
    for (let i = 0; i < vector.length; i++) {
      suma += vector[i];
    }
    return suma / vector.length;
  }
  
  function generarVectorB(vectorA) {
    const promedio = calcularPromedio(vectorA);
    const vectorB = [];
    for (let i = 0; i < vectorA.length; i++) {
      if (vectorA[i] > promedio) {
        vectorB.push(vectorA[i]);
      }
    }
    return vectorB;
  }
  
  function contarMultiplos2y3(vector) {
    let contador = 0;
    for (let i = 0; i < vector.length; i++) {
      if (vector[i] % 2 === 0 && vector[i] % 3 === 0) {
        contador++;
      }
    }
    return contador;
  }
  
  function calcularSuma(vector) {
    let suma = 0;
    for (let i = 0; i < vector.length; i++) {
      suma += vector[i];
    }
    return suma;
  }
  
  function generarVectorC(vectorA) {
    const vectorC = [];
    for (let i = 0; i < vectorA.length; i++) {
      vectorC.push(vectorA[i] * 2);
    }
    return vectorC;
  }
  
  const n = parseInt(prompt("Ingrese la cantidad de elementos del vector:"));
  const vectorA = generarVectorA(n);
  const promedio = calcularPromedio(vectorA);
  const vectorB = generarVectorB(vectorA);
  const cantidadMultiplos = contarMultiplos2y3(vectorA);
  const suma = calcularSuma(vectorA);
  const vectorC = generarVectorC(vectorA);
  
  console.log("Vector A: " + vectorA);
  console.log("Promedio del vector A: " + promedio);
  console.log("Vector B con elementos mayores al promedio: " + vectorB);
  console.log("Cantidad de elementos múltiplos de 2 y 3: " + cantidadMultiplos);
  console.log("Suma de todos los elementos del vector A: " + suma);
  console.log("Vector C con elementos del vector A multiplicados por 2: " + vectorC);
  