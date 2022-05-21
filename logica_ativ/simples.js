//Escreva um programa que pede o raio de um círculo, e em seguida exiba o perímetro e área do círculo.

document.getElementById("answer1").addEventListener("click", calc1)

function calc1() {

    const valorRaio = document.getElementById("text1").value

    let p = 2 * Math.PI * valorRaio

    console.log(p, "raio")

}


// tranformando fahrenheit em graus

document.getElementById("answer2").addEventListener("click", calc2)

function calc2(){

    const valorC = document.getElementById("text2").value

    const valorF = (9 * valorC / 5) * valorC + 32 

    console.log(valorF, "fahrenheit")
}


// tranformando graus em fahrenheit 

document.getElementById("answer3").addEventListener("click", calc3)

function calc3(){

    const valorF = document.getElementById("text3").value

    const valorC = 5*(valorF - 32) / 9

    console.log(valorC, "fahrenheit")

}
