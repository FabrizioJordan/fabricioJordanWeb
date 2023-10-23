

//  #$$$$$$$$$$$$$$$$##
// parte 1



const input = document.getElementById("inputEdad");
const btnEnviar1 = document.getElementById("btnEnviar1");
const text = document.getElementById("text")


const img = document.getElementById("img_Person");

btnEnviar1.addEventListener('click', enviado);

function enviado() {
  
  let valueEdad = input.value;

  switch (true) {
      
    case (valueEdad > 0 && valueEdad < 13): // niñez
      
      valor = "Estas en la niñez cabron";
      añadir("!bg-green-500");
      ponerImg("/assets/img/ejercicios-js/niño.avif");

      // remover()

      remover("lime");
      remover("amber");
      remover("orange");
      remover("red");

      break;
    case (valueEdad > 12 && valueEdad < 18): // adolescencia
      valor = "Estas en la adolescencia cabron";

      añadir("!bg-lime-400");
      ponerImg("/assets/img/ejercicios-js/adolescente.avif");

      // remover()
      remover("amber");
      remover("orange");
      remover("red");
      remover("green");
      break;
    case (valueEdad > 17 && valueEdad < 26): // juventud
      valor = "Estas en la juventud cabron";

      añadir("!bg-amber-500");
      ponerImg("/assets/img/ejercicios-js/juventud.jpg");


      remover("lime");
      remover("orange");
      remover("red");
      remover("green");
      break;
    case (valueEdad > 27 && valueEdad < 41): // madurez
      valor = "Estas en la madurez cabron";
      añadir("!bg-orange-500");
      ponerImg("/assets/img/ejercicios-js/madurez.jpg");


      remover("lime");
      remover("amber");
      remover("red");
      remover("green");
      break;
    case (valueEdad > 41): // vejez
      valor = "Estas en la vejez cabron";
      añadir("!bg-red-700");
      ponerImg("/assets/img/ejercicios-js/vejez.jpeg");


      remover("lime");
      remover("amber");
      remover("orange");
      remover("green");
      break;
    default:

      valor = "Escriba un valor correcto";

      remover("lime");
      remover("amber");
      remover("orange");
      remover("red");
      remover("green");
      break;
  }

  document.getElementById("text").innerHTML = valor;

}


function remover(b) {
  switch (b) {
    case "green":
      text.classList.remove("!bg-green-500");
      break;
    case "lime":
      text.classList.remove("!bg-lime-400")
      break;
    case "amber":
      text.classList.remove("!bg-amber-500")
      break;
    case "orange":
      text.classList.remove("!bg-orange-500")
      break;
    case "red":
      text.classList.remove("!bg-red-700")
      break;
  }
}

function añadir(c) {
  text.classList.add(c);
}


function ponerImg(a) {
  img.src = a;
}





//  #$$$$$$$$$$$$$$$$##
// parte 2


let distancia = document.getElementById("txt__Distancia");
let tiempo = document.getElementById("txt__Tiempo");

let ejecutar2 = document.getElementById("btnEnviar2");
ejecutar2.addEventListener("click", clicked);

function clicked() {
  let velocidad = distancia.value / tiempo.value;
  document.getElementById("resultado2").innerHTML = velocidad;
}




//  #$$$$$$$$$$$$$$$$##
// parte 3




let montoTxt = document.getElementById("txt__Monto");
let ivaTxt = document.getElementById("txt__Imp");

let ejecutar3 = document.getElementById("btnEnviar3");
ejecutar3.addEventListener("click", clicked2);

function clicked2() {
  monto = montoTxt.value;
  iva = ivaTxt.value;

  let aPagar = monto * iva / 100;

  aPagar = parseFloat(aPagar);
  monto = parseFloat(monto);
  let pago = monto + aPagar;

  document.getElementById("resultado3").innerHTML = pago;
}

