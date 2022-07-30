function submitTotal() {
    var total;

    //Obtener selección de habitación
    var habit = document.getElementById("selRoom").value;

    if (habit == "standar") {
        total = 100
    } else if (habit == "juniorSuite") {
        total = 120
    } else {
        total = 150
    }


    //Obtener spa
    var spa = document.getElementById("spa").checked;

    total = spa != true ? total : total + 20;


    //Obtener tipo de habitación
    var type = document.getElementById("typeRoom").value;

    switch (type) {
        case "individual": total = total * 0.75; break;
        case "triple": total = total * 1.25; break;
        default: total = total; break;
    }


    //Obtener noches de estancia
    var noches = document.getElementById("noches").value;
    total = total * noches;



    //Obtener noches de parking
    var parking = document.getElementById("parking").value;
    total = total + parking * 10;


    //Resultado de la suma en el input total
    document.getElementById("resultado").value = total;


    console.log(total)
}



//Registrar la función submitTotal como evento del botón calcular

document.getElementById("total").addEventListener("click", () => submitTotal());



//OPCIONAL: Prescinde del botón calcular y muestra el resultado total a medida que el usuario va haciendo cambios en el formulario.

//NO ME FUNCIONA PERO HACE ACTO DE PRESENCIA EN EL INPUT RESULTADO


document.getElementById("selRoom").addEventListener("keyup", submitTotal());
document.getElementById("spa").addEventListener("keyup", submitTotal());
document.getElementById("typeRoom").addEventListener("keyup", submitTotal());
document.getElementById("noches").addEventListener("keyup", submitTotal());
document.getElementById("parking").addEventListener("keyup", submitTotal());
