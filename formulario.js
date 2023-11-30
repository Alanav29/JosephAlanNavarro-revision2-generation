// Se corrige querySelector, se cambia a const y se renombra
const formularioRef = document.querySelector("#formulario");

// se cambia "formulario.onsubmit" a declaración de una función
const enviarFormulario = () => {
	// Se quito para agregar en addEventListener
	// e.preventDefault();

	// Se cambian variables a const y se renombran
	const nombreInputRef = formularioRef.elements[0];
	const edadInputRef = formularioRef.elements[1];
	const nacionalidadSelectRef = formularioRef.elements[2];

	const nombre = nombreInputRef.value;
	const edad = edadInputRef.value;

	const indexNacionalidadSeleccionada = nacionalidadSelectRef.selectedIndex;
	const nacionalidad =
		nacionalidadSelectRef.options[indexNacionalidadSeleccionada].value;

	console.log(nombre, edad);
	console.log(nacionalidad);

	if (nombre.length === 0) {
		nombreInputRef.classList.add("error");
	}
	if (edad < 18 || edad > 120) {
		edadInputRef.classList.add("error");
	}

	if (nombre.length > 0 && edad > 18 && edad < 120) {
		agregarInvitado(nombre, edad, nacionalidad);
	}
};

// Se cambian de var a let
let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
let corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {
	// Se elimina este bloque ya que nacionalidad ya tiene el value deseado
	// if (nacionalidad === "ar") {
	// 	nacionalidad = "Argentina";
	// } else if (nacionalidad === "mx") {
	// 	nacionalidad = "Mexicana";
	// } else if (nacionalidad === "vnzl") {
	// 	nacionalidad = "Venezolana";
	// } else if (nacionalidad === "per") {
	// 	nacionalidad = "Peruana";
	// }

	// Se cambia de var a const todas las variables
	const lista = document.getElementById("lista-de-invitados");

	const elementoLista = document.createElement("div");
	// Se cambia a método add ya que added no existe
	elementoLista.classList.add("elemento-lista");
	lista.appendChild(elementoLista);

	// Se quita esta parte ya que se repite en las lineas siguientes
	// const spanNombre = document.createElement("span");
	// const inputNombre = document.createElement("input");
	// const espacio = document.createElement("br");
	// spanNombre.textContent = "Nombre: ";
	// inputNombre.value = nombre;
	// elementoLista.appendChild(spanNombre);
	// elementoLista.appendChild(inputNombre);
	// elementoLista.appendChild(espacio);

	// se saco la funcion crear elemento

	// Se cambio nombre de funcion a agregar apartado
	crearApartado("Nombre", nombre, elementoLista);
	crearApartado("Edad", edad, elementoLista);
	crearApartado("Nacionalidad", nacionalidad, elementoLista);

	const botonBorrar = document.createElement("button");
	botonBorrar.textContent = "Eliminar invitado";
	botonBorrar.id = "boton-borrar";
	const corteLinea = document.createElement("br");
	elementoLista.appendChild(corteLinea);
	elementoLista.appendChild(botonBorrar);

	botonBorrar.onclick = function () {
		// this.parentNode.style.display = 'none';
		botonBorrar.parentNode.remove();
	};
}

// Se agrego una un parámetro con referencia al elemento de lista al que se quieren agregar elementos
// Se cambia nombres de parámetros y variables para hacer mas descriptiva la funcion
function crearApartado(apartado, valor, elementoListaRef) {
	const spanApartado = document.createElement("span");
	const inputApartado = document.createElement("input");
	const espacio = document.createElement("br");
	spanApartado.textContent = apartado + ": ";
	inputApartado.value = valor;
	elementoListaRef.appendChild(spanApartado);
	elementoListaRef.appendChild(inputApartado);
	elementoListaRef.appendChild(espacio);
}

formularioRef.addEventListener("submit", (e) => {
	e.preventDefault();
	enviarFormulario();
});
