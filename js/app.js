function listarEstudiantes() {
	var datos="";
	var tablaLlena= $("#datos");

	for (var i=0; i<localStorage.length; i++) {
		clave= localStorage.key(i);
		estudiante= $.parseJSON(localStorage.getItem(clave));

		datos+= "<tr>";
		datos+= "<td>" +estudiante.codigo+ "</td>";
		datos+= "<td>" +estudiante.nombre+ "</td>";
		datos+= "<td>" +estudiante.nota+ "</td>";
		datos+= '<td><input type="button" value="Editar" onclick="editarEstudiante(\'' + estudiante.codigo + '\');"></td>';
        datos+= '<td><input type="button" value="Eliminar" onclick="eliminarEstudiante(\'' + estudiante.codigo + '\');"></td>';
        datos+= "</tr>";
	}
	tablaLlena.html(datos);//FUNCION QUE MUESTRA LOS RESULTADOS EN PANTALLA
}

function eliminarEstudiante(codigo){
	localStorage.removeItem(codigo);
	listarEstudiantes();//FUNCION QUE ELIMINA EL ESTUDIANTE SELECCIONADO
}

function editarEstudiante(){

	var estudiante;

	for (var i=0; i<localStorage.length; i++) {
		var clave= localStorage.key(clave);
		estudiante= $.parseJSON(localStorage.getItem(clave));

		if (clave==estudiante.codigo) {
			

			$("#codigo").val(estudiante.codigo);
			$("#nombre").val(estudiante.nombre);
			$("#nota").val(estudiante.nota);
		}
	}//FUNCION QUE EDITA EL ESTUDIANTE SEGUN SU NUMERO DE ID
}

function restablecer(){
    $("#codigo").val("");
	$("#nombre").val("");
	$("#nota").val("");//FUNCION PARA BORRAR LOS CAMPOS UNA VEZ SE HAYAN GUARDADO LOS DATOS
}

$(document).ready(function(){
	$("#boton1").click(function(){
		var codigo= $("#codigo").val();
		var nombre= $("#nombre").val();
		var nota= $("#nota").val();

		var Estudiante={
			codigo: codigo,
			nombre: nombre,
			nota: nota
		};
		localStorage.setItem(codigo,JSON.stringify(Estudiante));
		listarEstudiantes();
		restablecer();		
	});

	$("#boton2").click(function(){//BOTON QUE CALCULA EL PROMEDIO DE LOS ESTDIANTES
		var promedio=0;
		var total=0;

		for (var i=0; i<localStorage.length; i++) {
			clave= localStorage.key(i);
			estudiante= $.parseJSON(localStorage.getItem(clave));
			promedio= promedio + parseInt(estudiante.nota);
		}
		total= promedio/i;
		alert("El promedio general de los estudiantes ingresados es: " +total);
	});

	$("#boton3").click(function(){//BOTON QUE CALCULA LA MAYOR NOTA
		var pos=0;
		var result="";

		for(i=0; i<localStorage.length; i++){
			clave= localStorage.key(i);
			estudiante= $.parseJSON(localStorage.getItem(clave));

			if (estudiante.nota >= 3.8) {				
				result= result + estudiante.nombre + ", ";
			}		
		}
		alert("Los estudiantes con mayor nota son: " + result);
	});

	$("#boton4").click(function(){//BOTON QUE CALCULA LA MENOR NOTA
		var pos=0;
		var result="";

		for(i=0; i<localStorage.length; i++){
			clave= localStorage.key(i);
			estudiante= $.parseJSON(localStorage.getItem(clave));

			if (estudiante.nota < 3.8) {				
				result= result + estudiante.nombre + ", ";
			}		
		}
		alert("Los estudiantes con mayor nota son: " + result);
	});

	listarEstudiantes();
})