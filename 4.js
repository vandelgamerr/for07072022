//There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
// Sample array:
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output:
// [4, 5, 8, 10, 12, 13]

// Declaracion de los Arreglos
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];

// Se recorre el arreglo mas largo y se suman al valor del indice al valor del indice del otro arreglo
for (var i = 0; i < array2.length; i++){
if(i < array1.length){
    console.log(array2[i] + array1[i]);
    }else{
       console.log(array2[i]);
    }
}