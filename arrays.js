//Escriba una función 'computeAverageLengthOfWords' que recibe dos strings y devuelve el promedio de la longitud de ambos strings.

//version 1
let word1 = 'hola';
let word2 = 'paralelepipedo';
const computeAverageLengthOfWords = (word1, word2) =>  
(word1.length + word2.length)/2;
console.log(computeAverageLengthOfWords);

//version 2
const computeAverageLengthOfWords = (word1, word2) =>  
(word1.length + word2.length)/2;
console.log(computeAverageLengthOfWords('chuleta', 'ofelia'));


//Escriba una función llamada getNthElement. Dado un arreglo y un entero, getNthElement devuelve el valor según el entero dado, dentro del arreglo dado. Notas: Si el arreglo tiene una longitud de 0, debería devolver' undefined'.

const getNthElement = (array, n) => {
  if (array.length === 0) {
    return undefined
  } else {
    return array[n]
  }  
}
getNthElement([1,2,3,4,5], 1)


//Escribe una función llamada convertDoubleSpaceToSingle. Dada una cadena, convertDoubleSpaceToSingle devuelve la cadena pasada en cadena con todos los espacios dobles convertidos a espacios simples. 

const convertDoubleSpaceToSingle = (str) => {
  let unEspacio = str.split("  "); //metodo split divide un string en subcadenas mediante un separador especifico, devuelve un nuevo array
  console.log(unEspacio);
  let newString = unEspacio.join(" ");//metodo join une todoos los elementos en una cadena y la devuelve
  return newString;
} 
let test = convertDoubleSpaceToSingle('habia  una  vez  una  maria  muy  distraida');
console.log(test);



//Escribe una función llamada areValidCredentials. Dando un nombre y una contraseña, areValidCredentials, devuelve true si el nombre es superior a 3 caracteres, Y, la contraseña tiene al menos 8 caracteres de longitud. De lo contrario, devuelve false. Ejemplo de entrada:

const areValidCredentials = (name, password) => {
  if (name.length > 3 && password.length > 8) {
    return true;
  } else {
    return false;
  }
}
let test = areValidCredentials('holamajo', 'estaesmicontraseña');
console.log(test);


//Dada una lista de números enteros no negativos y una suma objetivo, encuentre un par de números que sumen a la suma objetivo.
// Ejemplo de entrada: var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9); console.log(pair); --> [4, 5] 

const findPairForSum = (array, number) => {
  
  for (var i = 0 ; i < array.length ; i++) {
    let pair = array[i] 
    let sub_arr = (array.slice(0, i)).concat(array.slice(i+1, array.length));
    
    for (var j = 0; j < sub_arr.length ; j++) {
      if (pair + sub_arr[j] === number) {
        return [pair, sub_arr[j]];
      }
    }
  }
}
let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair);






