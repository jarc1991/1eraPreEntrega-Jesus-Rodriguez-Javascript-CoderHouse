// Inicio nombre de usuario y contraseña.

let nombreUsuario = prompt ("Nombre de usuario a registrar") .toUpperCase()
let contador = 0
const bienvenida = "Bienvenido/a a Adele's Store "

while (contador <=3){

if ((isNaN (nombreUsuario)) && nombreUsuario != " ") {

    alert ("Su usuario fue registrado como: "+ nombreUsuario + " " + "¡RECUERDELO!") 
    break

} else {

    alert ("Debe ingresar un usuario correcto. Ejemplo: Jesus") 
    const nombreUsuario = prompt ("Nombre de usuario a registrar")
    contador++
}}

let contrasenia = Number (prompt ("Ingrese una contraseña"))

while (contador <=3){

if ((isNaN (contrasenia)) || contrasenia == " ") {

    alert ("Debe ingresar una contraseña númerica. Ejemplo: 1234")
    const contrasenia = Number (prompt ("Ingrese una contraseña"))
    contador++
    
} else {

    alert ("Su contraseña fue registrada con éxito. "+ "¡RECUERDELA!")
    break
  
}}

let usuarioIngresado = prompt ("Ingrese su usuario registrado") .toUpperCase()
let contraseniaIngresada = Number (prompt("Ingrese la contraseña registrada"))

for (i = 0; i < 2; i++){

if (usuarioIngresado === nombreUsuario && contraseniaIngresada === contrasenia && isNaN (usuarioIngresado) && usuarioIngresado != " ") {

    alert (bienvenida + " " + usuarioIngresado)
    break

}

else if (usuarioIngresado !== nombreUsuario && contraseniaIngresada !== contrasenia && contador <= 3 || usuarioIngresado == " " || isNaN (contraseniaIngresada)) {

    alert ("Debe ingresar el usuario y contraseña registrados.")
    usuarioIngresado = prompt ("Ingrese su usuario registrado")
    contraseniaIngresada = Number (prompt("Ingrese la contraseña registrada"))
    
}

else {

    alert ("Intente nuevamente más tarde")
} }

let menu = "1- Saber un poco de Adele.\n2- Discos de Adele.\n3- Precios Discos. \n4- Compra. \n5- Compra en cuotas.\n6- Salir."
let opcion = 0
let compra = 50

// Función

function precioDiscos () {

    alert ("El precio del disco es: $50")

}

do {

    alert (menu)

    opcion = Number (prompt ("Ingrese la opción: "))
    
    if (opcion === 1) {

        alert ("Adele Laurie Blue Adkins (Londres, 5 de mayo de 1988), conocida simplemente como Adele, es una cantautora y multinstrumentista británica. Es una de las artistas musicales con mayores ventas del mundo, con más de 120 millones de ventas entre discos y sencillo.")
    }

    else if (opcion === 2) {

        alert ("Los discos de Adele son: 19, 21, 25, 30.")
    }

    else if (opcion === 3) {

        let selectDisc = prompt ("¿Cual cd quieres comprar, debes indicar 19 o 21 o 25 o 30? También pues introducir 0 para salir")

        switch (selectDisc) {

            case "19": precioDiscos()

            break

            case "21" : precioDiscos()

            break

            case "25" : precioDiscos()

            break

            case "30" : precioDiscos()

            break

            case "0" : 

            break

            default:

            alert ("Debes introducir una opción")

            break

        }
    
    } 

    else if (opcion === 4) {

        let numDisc = Number (prompt("¿Cuántos discos desea comprar?"))

        for (i = 0; i < numDisc; i++) {
        
        let compraDisc = Number (prompt ("Introduce el cd que desea comprar ejemplo: 19, 21, 25 o 30"))
        
        alert ("Tiene un valor de " + " $ " + compra)
    
    }

    alert ("Tu total a pagar es : " + (numDisc * compra))

    }

    else if (opcion === 5) {

        numDisc = Number (prompt("¿Cuántos discos desea comprar?"))

        let cantCuotas = Number (prompt ("Diga en cuántas cuotas (sólo se permiten hasta 12). ADVERTENCIA: RECARGO DEL 25% anual"))
        let interesCuota = Number (25/100)/12
        
        let calCuotas = ((((numDisc * compra) * interesCuota) * cantCuotas) + (numDisc * compra)) .toFixed(2)

        alert ("Su total a pagar en: " + cantCuotas + " " + "cuotas es de: " + calCuotas)

    }
}

while (opcion != 6) 







//Otra forma para hacer la opción 3 del menú

    /*if (selectDisc == "19") {

            precioDiscos ()
        }
        
        else if (selectDisc == "21") {
        
            precioDiscos ()
        }
        
        else if (selectDisc == "25") {
        
            precioDiscos ()
        }
        
        else if (selectDisc == "30") {
        
            precioDiscos ()
        }
        
        else if (selectDisc == "0") {
        
            alert ("Volver")
        }
        
        else {
        
            alert ("Debes introducir una opción.")*/