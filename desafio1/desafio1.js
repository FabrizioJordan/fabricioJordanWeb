//              
//                    DESAFIO 1 - NUMEROS
// 


const btn1 = document.getElementById("btn1");
const text1 = document.getElementById("text1");

const btn2 = document.getElementById("btn2");
const text2 = document.getElementById("text2");

const btn3 = document.getElementById("btn3");
const text3 = document.getElementById("text3");

const btn4 = document.getElementById("btn4");
const text4 = document.getElementById("text4");

const btn5 = document.getElementById("btn5");
const text5 = document.getElementById("text5");

const btn6 = document.getElementById("btn6");
const text6 = document.getElementById("text6");

const btn7 = document.getElementById("btn7");
const text7 = document.getElementById("text7");


document.addEventListener('keydown', function (event) {

    let key = event.key;
    console.log(`La tecla ${key} fue presionada.`);

    switch (key) {
        case '1':
            clicked(text1, btn1)
            break;
        case '2':
            clicked(text2, btn2)
            break;
        case '3':
            clicked(text3, btn3)
            break;
        case '4':
            clicked(text4, btn4)
            break;
        case '5':
            clicked(text5, btn5)
            break;
        case '6':
            clicked(text6, btn6)
            break;
        case '7':
            clicked(text7, btn7)
            break;
        case 'Backspace':
            clear()
            break;
        default:
            // console.log('Otra tecla fue presionada: ' + key);
            break;
    }





});


function clicked(text, btn) {
    toggleView(text, btn);
}

function toggleView(a, b) {
    a.classList.toggle("opacity-0")
    b.classList.toggle("invert")
}

function clear(){
    btn1.classList.remove("invert")
    text1.classList.add("opacity-0")
    btn2.classList.remove("invert")
    text2.classList.add("opacity-0")
    btn3.classList.remove("invert")
    text3.classList.add("opacity-0")
    btn4.classList.remove("invert")
    text4.classList.add("opacity-0")
    btn5.classList.remove("invert")
    text5.classList.add("opacity-0")
    btn6.classList.remove("invert")
    text6.classList.add("opacity-0")
    btn7.classList.remove("invert")
    text7.classList.add("opacity-0")
    console.log("Reiniciado...")
}