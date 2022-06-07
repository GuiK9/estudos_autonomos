const readline = require('readline')

const client = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


//  Escreva um programa que pede o raio de um círculo, e em seguida exiba o perímetro e área do círculo.


function calc1(x) {

    const valorRaio = x

    let p = 2 * Math.PI * valorRaio

    console.log(p, "raio")

}


//  tranformando fahrenheit em graus


function calc2(x) {

    const valorC = x
    const valorF = (9 * valorC / 5) * valorC + 32

    console.log(valorF, "fahrenheit")
}


//  tranformando graus em fahrenheit 


function calc3(x) {

    const valorF = x
    const valorC = 5 * (valorF - 32) / 9

    console.log(valorC, "fahrenheit")

}

//  Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort.

function calc4(x) {

    if (x[0] < x[1]) {

        console.log(x)
    } else {

        let temp = [...x]
        x[0] = x[1]
        x[1] = temp[0]
        console.log(x)
    }
}

//Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria função para isso.

function calc5(x) {

    x.sort((a, b) => { return a - b })
    console.log(x)

}

function calc6() {

    client.question("give to me 3 numbers", (threeNum) => {
        const x = threeNum.split('')
        for (let i = 0; i < x.length; i++) {
            const e = Number(x[i])
            x[i] = e

        }

        x.reverse()
        console.log(x)
        client.close()

    })
}

/*Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array.
Depois, o usuário vai preenchendo elemento por elemento do vetor.
Ao final, exiba o array e o array ao contrário (generalização do script anterior)*/

function calc7() {

    client.question("how many numbers do you want in your array? \n", (answer) => {

        let num = Array(Number(answer)).fill(1)

        console.log(num)

        client.close()

    })


    function questions(num) {

        console.log(num)

        for (let i = 0; i < num.length; i++) {
            const e = num[i];
            client.question(`what is your ${num[i].indexOf}° element?`)
        }
    }


}


//Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na ordem crescente. Faça sua função na mão, não invoque nenhum método de sorting. Dica: pesquise sobre bubble sort.

function calc8(arr) {

    let ctrl = 0

    for (let i = 0; ctrl === 0; i++) {

        if (arr[i] > arr[i + 1]) {

            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp

            
        } else if (ctrl == 0) {

            i = -1

             let final = () => {
                let finalTemp = []
                for (let j = 0; j < arr.length; j++) {

                    let temp = arr[j] < arr[j + 1]

                    finalTemp.push(temp)

                }
                return finalTemp 
            }

            let testFinal = Array(arr.length).fill(true, 0, arr.length -1)
            testFinal.pop()
            testFinal.push(false)

            let arrfinal = final()

            JSON.stringify(testFinal) === JSON.stringify(arrfinal) ? ctrl = 1 : ctrl = 0
           
            if(arrfinal == testFinal) {
                ctrl = 1
            }
            
        }
        console.log(arr)

    }
}

let arr = [10, 9, 8, 7, 6, 5]

calc8(arr)