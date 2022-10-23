



/* let miNombreCompleto = 'Patricio Barera';

let fraseFavorita = 'Aguante La Renga';

let palabraFavorita = 'Tortilla';

let peso = 75;

let altura = 1.77;

let apellido = 'Barera';

const TATUAJE = 'mama te amo';

let numeroA = 4;
let numeroB = 9;    

let suma = numeroA + numeroB;
let resta = numeroB - numeroA;

let palabra1 = 'casa'; 

 let nombreUsuario = prompt ('Ingresa tu nombre');
let edadActual = parseInt (prompt('Ingresa tu edad actual')); */

/*let nombreUsuario = prompt ('Ingresa tu nombre');
alert ('Bienvenido a mi sitio. Ya nunca podras salir' + nombreUsuario); 

console.log ('el valor de la variable resta es'+ resta) 
*/

/* let condicion = true; 
let otraCondicion = false;
let edad = 17

if (condicion) {
console.log ('la condicion es verdadera')

}

/* if (edad==37){
console.log ('la edad es 37')
}
*/

/* if (edad>18){
alert ('podes salir de jerga')
} else {
alert ('no pasarás')
} */

/* const edadObligatoria = 18 ;
let edadOptativa = 16;

let edadUser= parseInt(prompt ('ingresa tu edad')) ;

if(edadUser>=edadObligatoria){
    alert ('podes votar si queres');
} else if (edadUser>=edadOptativa){
    alert ('debes votar');  
} else {
    alert ('no podes votar');
}
*/


/*
let peso = prompt("Ingrese su peso en Kg");
let altura = prompt ("Ingrese su altura en metros (Ej: 1.75)");
let indice = peso / (altura **2 );
alert("Tu IMC es " + indice)
if (indice <= 18.4) {
    alert("Estas bajo/a de peso");
}
if (indice >= 18.5 && indice <= 24.9) {
    alert("Estas en el peso adecuado amigo/a")
}
if (indice >= 25.0 ) {
    alert("Estas un poco pasado en tu peso amigo/a")

} */


/*
class Disco {

    constructor(titulo, banda, anio, genero, puntaje, id) {
        this.titulo = titulo;
        this.banda = banda;
        this.anio = parseInt(anio);
        this.genero = genero;
        this.puntaje = parseInt(puntaje);
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;

    }

    valorar(puntaje) {
        this.puntaje = parseInt(puntaje);

    }

}

const discos = [
    new Disco('Llegando los Monos', 'Sumo', 1986, 'rock alternativo', 7, 1),
    new Disco('Hermanos de Sangre', 'Viejas Locas', 1997, 'rock and roll', 8, 2),
    new Disco('The Dark Side of the Moon', 'Pink Floyd', 1973, 'rock progresivo', 10, 3),
    new Disco('Esquivando Charcos', 'La Renga', 1991, 'hard rock', 8, 4),
    new Disco('Nevermind', 'Nirvana', 1991, 'grunge', 9, 5),
    new Disco('Sticky Fingers', 'The Rolling Stones', 1971, 'rock and blues', 7, 6),
    new Disco('The Wall', 'Pink Floyd', 1979, 'rock progresivo', 9, 7)

]

console.log(discos);

//---- Nuevos discos ingresados por el usuario ----//

let continuar = true;

while (continuar){
    let ingreso = prompt ('ingresa los datos del disco: titulo, banda, año, género, puntaje del 1 al 10, separados por una barra diagonal (/). Ingresa X para finalizar');

    if (ingreso.toUpperCase() == 'X') {
        continuar = false;
        break;
    }

    let datos = ingreso.split ('/');
    console.log(datos);
    const disco = new Disco (datos[0], datos[1], datos[2], datos[3], datos[4]);

    discos.push(disco);
    disco.asignarId(discos);
    console.log(discos);

}

let criterio = prompt('Elegí el criterio deseado: \n1 - Título (A a Z) \n2 - Título (Z a A) \n3 - Mejor a peor puntuado \n4 - Fecha de publicación (Mas viejo a mas nuevo)');
function ordenar (criterio, array) {
 let arrayOrdenado = array.slice (0);   

 switch (criterio) {
      
    case '1': 
        let nombreAscendente = arrayOrdenado.sort((a,b)=>a.titulo.localeCompare(b.titulo));   
        return nombreAscendente;

    case '2':
        let nombreDescendente = arrayOrdenado.sort((a,b)=>b.titulo.localeCompare(a.titulo));    
        return nombreDescendente;

    case '3': 
        return arrayOrdenado.sort((a,b) => b.valoracion - a.valoracion);

    case '4': 
        return arrayOrdenado.sort((a,b)=> a.anio - b.anio );
    
    default:
        alert('criterio inválido');
        break;

 }
    
}

//--- Separación ---//

function crearStringResultado (array) {
let info= '';

array.forEach(elemento=>{

info += 'Título: ' + elemento.titulo + '\nBanda: ' + elemento.banda + '\nAño de publucación: ' + elemento.anio + '\nValoración: ' + elemento.puntaje + ' puntos.\n\n'


})

return info;


} 

alert (crearStringResultado( ordenar(criterio, discos))) */



/*
function suma(numeroUno, numeroDos) {
    let resultado = numeroUno + numeroDos;
    return resultado;
}

function resta(numeroUno, numeroDos) {
    let resultado = numeroUno - numeroDos;
    return resultado;
}

function multiplicacion(numeroUno, numeroDos) {
    let resultado = numeroUno * numeroDos;
    return resultado;
}

function division(numeroUno, numeroDos) {
    let resultado = numeroUno / numeroDos;
    return resultado;
}

function mostrarResultado(resultado) {
    alert("El resultado es: " + resultado)
}

function mostrarMenu() {
    let opcion = prompt("Bievenido, seleccione una opción. Si no, escribí (cerrar) para salir \n 1 Sumar \n2 Restar \n3 Multiplicar \n4 Dividir");
    return opcion
}


    
function calculadora() {
    let opcionSeleccionada = mostrarMenu()
    while (opcionSeleccionada.toUpperCase() !== "CERRAR") {
        if (opcionSeleccionada !== "") {
            let numeroUno = parseFloat(prompt("Ingrese el primer número "))
            let numeroDos = parseFloat(prompt("Ingrese el segundo número "))

            opcionSeleccionada = parseInt(opcionSeleccionada)

            switch (opcionSeleccionada) {
                case 1:
                    let resultadoSuma = suma(numeroUno, numeroDos);
                    mostrarResultado(resultadoSuma);
                    break;

                case 2:
                    let resultadoResta = resta(numeroUno, numeroDos);
                    mostrarResultado(resultadoResta)
                    break;

                case 3:
                    let resultado = multiplicacion(numeroUno, numeroDos)    
                    mostrarResultado(resultado);
                    break;

                case 4:
                        let resultadoDivision = division(numeroUno, numeroDos)
                        mostrarResultado (resultadoDivision);
                    break;
  

                    default:
                        alert("Opción incorrecta")
                        break;
            }
            // SWITCH PARA SELECCIONAR OPCION
        } else {
            alert("seleccione la opción")
        }
        opcionSeleccionada = mostrarMenu()
    }
}

calculadora()  */




// Fake Databases de Usuarios y Mascotas (A esta DB realmente se accede por Backend)

const usuarios = [{

    nombre: 'Luli',
    mail: 'luli.baiter@mail.com',
    pass: 'luliluliluli'

},

{
    nombre: 'Pato',
    mail: 'patobarera@mail.com',
    pass: 'pato123'

},

{
    nombre: 'Ignacio',
    mail: 'ignaciowitting@mail.com',
    pass: 'ignacio123'

}]

const mascotas = [{

    nombre: 'Veintidos',
    especie: 'gato',
    edad: 2,
    peso: 6
},

{
    nombre: 'Fermin',
    especie: 'perro',
    edad: 14,
    peso: 12
},

{
    nombre: 'Pepe',
    especie: 'sapo',
    edad: 5,
    peso: 1
}]

// Elementos del DOM que voy a necesitar
const mailLogin = document.getElementById('emailLogin'),
    passLogin = document.getElementById('passwordLogin'),
    recordar = document.getElementById('recordarme'),
    btnLogin = document.getElementById('login'),
    modalEl = document.getElementById('modalLogin'),
    modal = new bootstrap.Modal(modalEl),
    contTarjetas = document.getElementById('tarjetas'),
    toggles = document.querySelectorAll('.toggles');


function validarUsuario(usersDB, user, pass) {
    let encontrado = usersDB.find(userDB => userDB.mail == user);

    if (typeof encontrado === 'undefined') {
        return false;
    } else {
        if (encontrado.pass != pass) {
            return false;
        } else {
            return encontrado;
        }

    }

}


//funcion guardar datos que recuperamos de la database en el storage
function guardarDatos(usuarioDB, storage) {
    const usuario = {
        'name': usuarioDB.nombre,
        'user': usuarioDB.mail,
        'pass': usuarioDB.pass
    }

    storage.setItem('usuario', JSON.stringify(usuario));
}

//Cambio el DOM para mostrar el nombre del usuario logueado, usando los datos del storage.
function saludar(usuario) {
    nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}<span>`
}

//Limpiar los storages
function borrarDatos() {
    localStorage.clear();
    sessionStorage.clear();
}

function recuperarUsuario() {
    let usuarioEnStorage = JSON.parse(storage.tegItem('usuario'));
    return usuarioEnStorage;
}

//Funcion para revisar si hay usuarios guardados en el storage, y en ese caso evitar todo el proceso de login.
function estaLogueado(usuario) {
    if (usuario) {
        saludar(usuario);
        mostrarMascota(mascotas);
        presentarInfo(toggles, 'd-none');
    }
}


//
function presentarInfo(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    })
}


//Creo HTML dinamico para mostrar la informacion de las mascotas a partir del array fake DB
function mostrarInfoMascota(array) {
    contTarjetas.innerHTML = '';
    array.forEach(element => {
        let html = 

    })
}

btnLogin.addEventListener('click', (e) => {

    e.preventDefault();

    //validamos que los campos mail y pass esten completos  
    if (!mailLogin.value || !passLogin.value) {
        alert('todos los campos son requeridos');
    } else {
        let data = validarUsuario(usuarios, mailLogin.value, passLogin.value);
        if (!data) {
            alert('Usuario y/o contraseña erroneos');
        } else {
            if (recordar.checked) {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            } else {
                guardarDatos(data, localStorage);
                saludar(recuperarUsuario(localStorage));
            }

            modal.hide();

            mostrarInfoMascota(mascotas);
            presentarInfo(toggles, 'd-none');
        }
    }


})

btn.Loguot.addEventListener()

