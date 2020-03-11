const { findUserById, findUserByEmail } = require('../users')
const assert = require('assert')

describe('The findUserByEmail funciton', () => {
    it('finds a user by email', (done) => {
        findUserByEmail('dima@gmail.com').then((response) => {
            assert.equal(response.message, 'User found successfully')
        }) 
        done()
    })

    it('finds a user by email (Using async/await)', async () => {
        const response = await findUserByEmail('dima@gmail.com') 
        assert.equal(response.message, 'User found successfully')
    })
})



