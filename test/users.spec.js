const { findUserById, findUserByEmail } = require('../users')
 

describe('The findUserByEmail funciton', () => {
    it('finds a user by email', (done) => {
        findUserByEmail('dima@gmail.com').then((response) => {
           //assert.equal(response.message, 'User found successfully')
            expect(response.message).toBe('User found successfully.')
        })
        done()
    })

    it('finds a user by email (Using async/await)', async () => {
        const response = await findUserByEmail('dima@gmail.com')
        //assert.equal(response.message, 'User found successfully')
        expect(response.message).toBe('User found successfully.')
    })

    it('rejects with error if user email was not found', () => {
        // return findUserByEmail('x@gmail.com').then(() => {
        //     assert.fail('Expected findUserByEmail function to reject.')
        // }, (error) => {
        //     assert.equal(error.message, 'User with email:x@gmail.com was not found')
        // })

        const actual = findUserByEmail('x@gamil.com')

        expect(actual).rejects.toEqual(new Error("User with email: x@gmail.com was not found."))

    })
})


describe('The findUserById function', () => {
    it('should find a user by id', async () => {
        const response = await findUserById(1)

        // assert.equal(response.message, 'User found successfully') -- mocha

        expect(response.message).toBe('User found successfully') // JEST
    })

    it('should reject if user is not found by id', () => {
        // return findUserById(90).then((response) => {
        //     assert.fail("Expected findUserById function to throw")                      ------ MOCHA
        // }, (error) => {
        //     assert.equal(error.message, "User with id: 90 was not found")
        // })


        // - JEST
        const actual = findUserById(90)     
        expect(actual).rejects.toEqual(new Error('User with id: 90 was not found'))
    })
})

