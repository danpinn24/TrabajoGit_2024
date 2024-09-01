# TrabajoGit_2024
Trabajo final. Git Hub. TECDA. Estudiantes: Valbuena Agustina; Olbeyra Franco; Pinna Dana. Profesora: Gisele Keime
soy franco y este es mi primer cambio
hola soy agus y este es el segundo cambio del README. CHAU
Hola soy la creadora del repositorio. Hago es tercer cambio. 

function generarIp(){
    //los valores estan estre 0 y 255
    // IP ---> 10.255.11.45
    let ip = ''
    for ( let cont=0; cont<4;  cont++){
        let num = Math.floor((Math.random()*256))
        ip+= num + "."
    }
    return ip
}
console.log (generarIp())