//Calcular IMC

let imc = 0;
function validarFormularioIMC() {
    let error = false;
    let inputPeso = document.getElementById("txtPeso");
    let inputEstatura = document.getElementById("txtEstatura");

    if (inputPeso.value == "") {
        error = true;
        inputPeso.classList.add("input-error");
    } else {
        inputPeso.classList.remove("input-error");
    }
    if (inputEstatura.value == "") {
        error = true;
        inputEstatura.classList.add("input-error");
    } else {
        inputEstatura.classList.remove("input-error");
    }
    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'No se puede calcular el IMC',
            text: 'Por favor, complete todos los campos',
        });
    } else {
        calcularIMC();
    }
}

function calcularIMC() {
    let peso = document.getElementById("txtPeso").value;
    let estatura = document.getElementById("txtEstatura").value;

    imc = peso / Math.pow(estatura, 2);

    document.getElementById("txtIMC").value = imc.toFixed(2);

    let clasificacion = clasificarImc();

    document.getElementById("txtClasificacionImc").value = clasificacion;
}

document.getElementById("btnCalcularIMC").addEventListener("click", validarFormularioIMC);

function clasificarImc() {
    let clasificacionImc = "";
    if (imc < 18.5) {
        clasificacionImc = "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        clasificacionImc = "Peso normal";
    } else if (imc >= 24.9 && imc < 29.9) {
        clasificacionImc = "Sobrepeso";
    } else {
        clasificacionImc = "Obesidad";
    }
    return clasificacionImc;
}

// Area de figuras geometricas

function calcularArea() {
    let opcion = document.getElementById("sltFigura").value;
    let area = 0;

    //Valores de prueba
    let lado = document.getElementById("txtLado").value;
    let base = document.getElementById("txtBase").value;
    let altura = document.getElementById("txtAltura").value;
    let radio = document.getElementById("txtRadio").value;

    switch (opcion) {
        case "1": //cuadrado
            area = lado * lado;
            break;
        case "2": // rectangulo
            area = base * altura;
            break;
        case "3": //círculo
            area = Math.PI * Math.pow(radio, 2);
            break;
    }
    document.getElementById("txtArea").value = area.toFixed(2);

}

document.getElementById("btnCalcularArea").addEventListener("click", calcularArea);