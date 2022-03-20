import http from 'http'
import { Readable } from 'stream'
import { randomUUID } from 'crypto'

function * run () {
    for(let i = 0; i<= 200; i++){
        const data = {
            id : randomUUID(),
            name:`Guilherme-${i}`
        }
        yield data
    }
} 


function handler(request, response) {
    const readable = new Readable({
        read() {

        for(const data of run()){
        console.log(`sending`, data)
        this.push(JSON.stringify(data) + "\n")
        }
        //para informar que os dados acabaram 
        this.push(null)
        }
    })

    readable
      .pipe(response)

}


http.createServer(handler).listen(3000).on('listening', () => console.log('server running at 3000'))