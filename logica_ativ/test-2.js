function ep1(){
    let a = 10
    let b = 20

    let c = a
    a = b 
    b = c
    console.log(a,"a")
    console.log(b,"b")
}

function ep2() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    console.log(arr.length)

    for (let i = arr.length - 1; i >= 0; i--) {
        const element = arr[i]
        console.log(element, i)
    }

    arr.reverse()
    console.log(arr, "== reverse ==")
}

function test1(){
    let arr = [1, 2, 3, 4]
    arr.length = 2

    console.log(arr)
}

ep2()