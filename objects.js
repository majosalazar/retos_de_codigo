//ejercicio de objetos n°9

const aTransformar = [[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]];

function transformToObject(arreglo){
	const retorno = [];
	for(let aTransformar of arreglo){
		const objetoARetornar = {};
		for(let llaveValor of aTransformar){
			objetoARetornar[llaveValor[0]] = llaveValor[1]; 
		}
		retorno.push(objetoARetornar);
    }
	return retorno;
}


//Dado un objeto como parámetro, contar la cantidad de propiedades que este contiene y retornarlo.
// Ejemplo: const output = objectPropertiesCounter({ 'name': 'John', 'lastname': 'Doe' }); console.log(ouput); // -> 2*/

const objectPropertiesCounter = {
  name: 'John',
  lastname: 'Doe',
  age: '33'
 };
   
 let output = Object.keys(objectPropertiesCounter).length;  // objects.keys para sacar las propiedades de los objetos
 console.log(output);
 console.log(Object.keys(objectPropertiesCounter));


// Escribe una función llamada "removeStringValuesLongerThan". Dado un número y un objeto,"removeStringValuesLongerThan" elimina cualquier propiedad en el objeto dado cuyos valores son cadenas de texto más largas que el número dado.  

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
 console.log(obj); 
 
function removeStringValuesLongerThan (num, obj) {
  for (str in obj) { //sentencia que itera en todas las propiedades de un objeto
    if (typeof(obj[str]) === 'string' && obj[str].length >= num){ //devuelve un string con el tipo de operando
    delete obj[str]; //delete es un operador de que elimina la propiedad de un objeto
    }
  }
}


// Dado un objeto, una clave y un índice numérico, getElementOfArrayProperty devuelve el valor del elemento en el índice dado del arreglo localizado dentro del objeto dado en la clave dada. Notas: Si el arreglo está vacío, debería devolver undefined; Si el índice dado está fuera de rango del arreglo ubicado en la clave dada, debería devolver undefined; Si la propiedad en la clave dada no es un arreglo, debería devolver undefined; Si no hay ninguna propiedad en la clave, debería devolverse undefined.

let obj = {
  key: ['Jamil', 'Albrey']
};
const getElementOfArrayProperty = (obj, key, index) => {
  if ( obj[key] && obj[key].length && Array.isArray(obj[key]) && index >= 0 && index < obj[key].length ){ //isArray determina si el valor es un array
    return undefined;
  }
}
console.log(getElementOfArrayProperty); 


//Escribir una función llamada "getAllKeys" que devuelve un array de todas las claves del objeto de entrada.

let obj = {
  'name': 'Sam',
  'age': 25,
  'hasPets': true
};
console.log(Object.keys(obj)); //object.keys saca las propiedades de los objetos

let getAllKeys = (obj) => {
  let result=[ ];
  for (let key in obj){ //itera en todas las propiedades del objeto
    result.push(key); //agrega elementos a un array
  }
  return result;
}

console.log(getAllKeys(obj));



