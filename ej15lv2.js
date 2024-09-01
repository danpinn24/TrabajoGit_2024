

function generarIp(){
    //los valores estan estre 0 y 255
    // IP ---> 10.255.11.45
    let ip = ''
    for ( let cont=0; cont<4;  cont++){
        let num = Math.floor((Math.random()*2000))
        ip+= num + "."
    }
    return ip
}
console.log (generarIp())

/**
 * crea una funcion que dado dos arreglos cuente cuantas palabras de un arreglo se repiten en el otro
 */

/**
 * '1'== 1 ==> true
 * '1' === 1 ==> false
*/

function cantRepeat(array1,array2){
    let cont = 0
    for (let i1 = 0; i1 < array1.length; i1++) {
        const element1 = array1[i1];
        for (let i2 = 0; i2 < array2.length; i2++) {
            const element2 = array2[i2];
            if(element1 === element2){
                cont++
                break
            }
            
        }
        
    }
    return cont;
}
console.log (cantRepeat([1,5,6,8],[5,8,4,5,7,6,10]));


/**
 * recorrer matriz
 */
 function showMatrix(matriz){
    for (let fila = 0; fila < matriz.length; fila++) {
        const datoFila = matriz[fila];
        for (let column = 0; column < datoFila.length; column++) {
            const element = datoFila[column];
            console.log(element + "**");
            
            
            
        }
        
    }

 }

 console.log (showMatrix([[5,2,8],[7,6,3],[4,1,3]]))

 