
        const main = (params) => {
            let { arr, number } = params

            let answer1 = []
            let answer2 

        // Question 1

            function fatorial(x) {
                let fatorial = x
                for (var i = 1; i < x; i++) {
                    fatorial *= i;
                }
                return fatorial
            }

            for (let i = 0; i < arr.length; i++) {
                answer1.push(fatorial(arr[i]))

            }
 
        //Question 2

            for (let i = 0; i < answer1.length; i++) {
                number = number - answer1[i]
            }

            answer2 = number

            console.log(answer1, answer2)
        }

        let myParams = {
            arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            number: 500000
        }

        main(myParams)
