var dbJornalero = localStorage.getItem("dbJornalero"); //Obtener datos de localStorage

dbJornalero = JSON.parse(dbJornalero); // Covertir a objeto

if (dbJornalero === null){ // Si no existe, creamos un array vacio.
	dbJornalero = [];
}

jQuery(document).ready(function($) {
	
	$("#btnGuardar").on("click", function(){

		agregarJornalero();

	});

	console.log(dbJornalero);
	listar();

	$(document).on("click", ".btnEliminar", function() {
    var id = $(this).data("id"); // Obtener el índice del array
    dbJornalero.splice(id, 1); // Eliminar el elemento del array
    localStorage.setItem("dbJornalero", JSON.stringify(dbJornalero)); // Actualizar localStorage
    listar(); // Volver a listar para reflejar el cambio
});

});

function listar() {

	$("#tblJornaleros tbody").empty();
	
	$.each(dbJornalero, function(index, val) {

		var jornalero = JSON.parse(val);

		var columnaID = '<td>' + index + '</td>';
		var columnaNombre = '<td>' + jornalero.Nombre + '</td>';
		var columnaCorreo = '<td>' + jornalero.Correo + '</td>';
		var columnaFechaNacimiento = '<td>' + jornalero.FechaNacimiento + '</td>';
		var columnaPeso = '<td>' + jornalero.Peso + '</td>';
		var columnaCarrera = '<td>' + jornalero.Carrera + '</td>';
		var columnaSemestre = '<td>' + jornalero.Semestre + '</td>';7
		var columnaBotonEditar = '<td><button type="button" class="btn btn-primary"><i class="glyphicon glyphicon-pencil"></i></button></td>';
		var columnaBotonEliminar = '<td><button type="button" class="btn btn-danger btnEliminar" data-id="' + index + '"><i class="glyphicon glyphicon-trash"></i></button></td>';

		var columnas = columnaID + columnaNombre + columnaCorreo + columnaFechaNacimiento + columnaPeso + columnaCarrera + columnaSemestre + columnaBotonEditar + columnaBotonEliminar;

		var fila = '<tr>' + columnas + '</tr>';

		$("#tblJornaleros tbody").append(fila);
	});

}


function limpiar() {
	$('#txtNombre').val("");
	$('#txtCorreo').val("");
	$('#txtFechaNacimiento').val("");
	$('#txtPeso').val("");
	$('#txtCarrera').val("");
	$('#txtSemestre').val("");

}

function agregarJornalero() {
	
	//var peso = document.getElementById('txtPeso').value;
	var nombre = $('#txtNombre').val();
	var correo = $('#txtCorreo').val();
	var fechaNacimiento = $('#txtFechaNacimiento').val();
	var peso = $('#txtPeso').val();
	var carrera = $('#txtCarrera').val();
	var semestre = $('#txtSemestre').val();
	

	var datos_jornalero = JSON.stringify({
		Nombre : nombre,
		Correo : correo,
		FechaNacimiento : fechaNacimiento,
		Peso : peso,
		Carrera : carrera,
		Semestre : semestre
	});

	dbJornalero.push(datos_jornalero);
	localStorage.setItem("dbJornalero", JSON.stringify(dbJornalero));

	limpiar();

	console.log(dbJornalero);

	console.log(datos_jornalero);

	console.log(nombre);
	console.log(correo);
	console.log(fechaNacimiento);
	console.log(peso);
	console.log(carrera);
	console.log(semestre);
}