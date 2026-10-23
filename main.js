function sumar(){
    let n1, n2, suma;

    alert("algoritmo suma de dos numeros");
    n1=parseFloat(promt("ingrese el primer valor"));
    n2=parseFloat(promt("ingrese el segundo valor"));

    (suma = n1 + n2);

    alert("el resultado de la suma es" + suma);

    sumar();
}

function operacionesBasicasS(){
    let n1, n2, suma, resta, multiplicacion, division;

    alert("algoritmo que resuleva operaciones basicas");
    n1=parseFloat(promt("ingrese el primer valor"));
    n2=parseFloat(promt("ingrese el segudo valor"));

    suma = n1 + n2;
    resta = n1 - n2;
    multiplicacion  =n1 * n2;
    division = n1 / n2;

    alert(
        "suma: " + suma + "\n" +
        "resta: " + resta + "\n" +
        "division: " + division +
        "multiplicacion: " + multiplicacion + "\n" + 

        operacionesBasicas();
}
   
function areaPerimetro(){
    let base,altura, area, perimetro

    alert("algoritmo que calcule el area de un perimetro");
    base=parseFloat(promt("ingrese la base (metros)"));
    altura=parseFloat(promt("ingrese la altura (metros)"));

    area = base * altura;
    perimetro = 2 * (base + altura);

    alert(
        "area disponible: " + area + "n²" + "\n"
        "perimetro (contorno): " + perimetro + "\m"
    )

    areaPerimetro();
}

function calcularPromedio(a, b, c){
    return (a + b + c) / 3;

let n1=parseFloat(promt("ingrese el primer numero"));
let n2=parseFloat(promt("ingrese el segundo numero"));
let n3=parseFloat(promt("ingrese el tercer numero"));

let promedio = calcularPromedio (n1, n2, n3);

alert("el promedio es " + n1 + "," + n2 + "y" + n3 + "es: " + promedio);

calcularPromedio();
}

function conversionUnidades(){
    let peso;
alert("algoritmo que convierta unidades de peso");
peso=parseFloat(promt("ingrese el peso en kilogramos"));

let gramos = peso * 1000;
let libras = peso * 2.20462;
let toneladas = peso / 1000;

alert("peso en gramos: " + gramos " g\n");
     ("peso en libras: " + libras(2) + "lb\n");
     ("peso en toneladas: " + toneladas + "\t");

     conversionUnidades();
}

function conversionTiempo(){
    let segundos
    alert("algoritmo que convierta tiempo");
    segundos=parseFloat(promt("ingrese el tiempo en segundos"));

    let minutos = segundos / 60;
    let horas = segundos / 3600;

alert("tiempo en minutos: " + minutos(2) + "min\n");
     ("tiempo en horas: " + horas(2) + "h");

     conversionTiempo();
}

function pesoPlanetas(){
    let pesoTierra
    alert("algoritmo que calcule el peso en la tierra, en la luna y emlos otros planetas");
    pesoTierra=parseFloat(promt("ingrsr su peso en la tierra"));

    let luna = pesoTierra * 0.065;
    let mercurio = pesoTierra * 0.38;
    let venus = pesoTierra * 0.91;
    let marte = pesoTierra * 0.38;
    let jupiter = pesoTierra * 2.34;
    let saturno = pesoTierra * 1.06;
    let urano = pesoTierra * 0.92;
    let neptuno = pesoTierra * 1.19;
    
    alert("peso en la tierra: " + pesoTierra + "kg\n");
         ("peso en la luna: " + pesoTierra + "kg\n");
         ("peso en mercurio: " + pesoTierra + "kg\n");
         ("peso en venus: " + pesoTierra + "kg\n");    
         ("peso en marte: " + pesoTierra + "kg\n")
         ("peso en jupiter: " + pesoTierra + "kg\n");
         ("peso en saturno: " + pesoTierra + "kg\n");
         ("peso en urano: " + pesoTierra + "kg\n");
         ("peso en neptuno: " + pesoTierra + "kg\n");

        pesoPlanetas();
}

function calculoCompra(){
    let precio
    alert("algoritmo que calcule una compra");
    precio=parseFloat(promt("ingrese el precio el producto"));
    cantidad=parseFloat(promt("ingrese la cantidad que desea comprar"));

    let total = precio * cantidad;

    alert("precio delproducto: " + precio + "\ncantidad: " + cantidad + "\ntotal de la compra: " + total;

    calculoCompra();
}

function calcularSalario(){
    let salario
    alert("algoritmo que calcule el salario de un trabajador");
    salarioMensual=parseFloat(promt("ingrese el salario mensual"));
    diasTrabajados=parseFloat(promt("ingrese los dias trabajados"));
    bonificaciones=parseFloat(promt("ingrese el valor de las bonificaciones"));
    descuentos=parseFloat(promt("ingrse el valor de los descuentos"));

    let salarioDiario = salarioMensual / 30;
    let pagoDias = salarioDiario * diasTrabajados;

    let totalDevengado = pagoDias + horasExtras + bonificaciones;
    let salarioNeto = totalDevengado - descuentos;

    alert(
        "pago por dias trabajados: " + pagoDias +
         "\nHoras esxtras: " + horasExtras + 
         "\nbonificaciones: " + bonificaciones +
         "\ntotalDevengado: " + totalDevengado +
         "\ndescuentos: " + descuentos +
         "\nsalarioNeto: " + salarioNeto
    );

    calcularSalario();
}

function costoViajeVehiculo(){
    let costo
    alert("algoritmo que determine el costo del viaje en vehiculo");
    distancia=parseFloat(promt("ingrese la distancia en kilometros"));
    consumo=parseFloat(promt("ingrese el cunsumo en km por litro"));
    precioGasolina=parseFloat(promt("ingrese el precio por litro"));
    otrosGastos=parseFloat(promt("ingrese los otros gastos en el viaje"));

    let litros = distancia / consumo;
    let costoGasolina = litros * precioGasolina;
    let costoTotal = costoGasolina + otrosGastos;

    alert(
        "distancia: " + distancia + "km\n" + "gasolina necesaria : " litros + "litros\n"
        "costo gasolina: " + costoGasolina + "\n" + "otros gastos: " + otrosGastos "\n"
        "costo total del viaje: " + costoTotal 
        );

        costoViajeVehiculo();
}


    





































switch (mesesN) {
    case 1:
        nombreMes = "Enero";
        break;
    case 2:
        nombreMes = "Febrero";
        break;
    case 3:
        nombreMes = "Marzo";
        break;
    case 4:
        nombreMes = "Abril";
        break;
    case 5:
        nombreMes ="Mayo";
        break;
    case 6:
        nombreMes = "Junio";
        break;
    case 7:
        nombreMes = "Julio";
        break;
    case 8:
        nombreMes = "Agosto";
        break;
     case 9:
        nombreMes = "Septiembre";
        break;
    case 10:
        nombreMes = "Octubre";
        break;
    case 11:
        nombreMes = "Noviembre";
        break;
    case 12:
        nombreMes = "Diciembre";       
    default:
    
}

function mayorMenorIgual() {
let N1 = parseFloat(promt("ingrese el mayor numero"));
let N2 = parseFloat(promt("ingrese el segundo valor"));
}
if (N1 + N2) {
    alert(N1 + "es mayor que" + N2);
} else if (N1 + N2) {
    alert(N1 + "es menor que" + N2);
} else if (N1 - N2) {
    alert(N1 + "es igual que" + N2);
} else if (N1 = N2) {
}

function accesoAtraccion() {
    let edad = parseFloat(promt("tener al menos 12 años"));
    let estatura = parseFloat(promt("medir al menos 1.40"));

    if (edad >= 12 && estatura >= 1.40) {
         alert("acceso permitido")
    } else {
        alert("acceso denegado, no cumple requisitos");
    }
}

function descuentoCliente() {
    let tipoCliente = parseFloat(promt("cliente normal o frecuente"));
    let compra = parseFloat(promt("ingrese el valor de compra"));

    let descuento = 0;
    
    if (compra >= 200.000) {
        if (tipoCliente === "normal") {
            descuento = compra * 0.05;
        } else if (tipoCliente === "frecuente") {
            descuento= compra 0.10;
        }
    }

    let total = compra - descuento;
     
    alert("valor de compra: $" + compra +
        "\nDescuento: $" + descuento +
        "\ntotal a Pagar: $" + total);
}

function cajeroAutomatico() {
    let saldo = parseFloat(promt("ingrese el saldo disponible"));
    let retiro = parseFloat(promt("ingrese el valor del retiro"));

    if (retiro <= 0) {
        alert(retiro invalido: debe ser mayor a $0);
        
    }





}





