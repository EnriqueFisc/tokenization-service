const app = require('../app');
const request = require('supertest');


// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImRhdGEiOiJkYXRhIHRvIGJlIHN0b3JlIGluIHRva2VuIn0sImlhdCI6MTcwMjM0Mjg5Mn0.YzQo9FEjFBoVeZHJ1F5fgfyVFy156hC-eOFU8SV3QT0'

let token = ''
describe('Testing on Tokenization Service', () => { 
    test('should get token', async() => { 
        const resp = await  request(app)
                .post("/token/create")
                .send({
                    data:'data to be store in token'
                })
                .expect(200)
        
        token = resp._body.data
     })

     test('should decode', async() => { 
        let dataToMatch = 'data to be store in token'
        const resp = await  request(app)
        .post("/token/validate")
        .send({
            token
        })
        .expect(200)

        
     })
 })