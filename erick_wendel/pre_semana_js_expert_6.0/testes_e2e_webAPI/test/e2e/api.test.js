import {
    jest,
    expect,
    test,
    describe
} from '@jest/globals'

import superTest from 'supertest'
import Server from '../../src/server.js'

describe('API E2E Test Suite', () => {
    test('GET /  - should return an array', async () => {

        const response = await superTest(Server)
            .get('/')
        const data = JSON.parse(response.text)
        expect(data).toBeInstanceOf(Array)
        expect(data.length).toEqual(0)
        console.log('text', response.text)
    })
    test('POST /  - should save an item e return ok', async () => {

        const response = await superTest(Server)
            .post('/')
            .send({
                nome: 'guilherme',
                age: 25,
            })
        const expectedRespone = { ok: 1 }
        expect(JSON.parse(response.text)).toStrictEqual(expectedRespone)

    })
    test.todo('DELETE /  - should delete an item an return ok')
})

//PROBLEMA - um teste tá dependendo o outro, um teste ta sujando o outro 