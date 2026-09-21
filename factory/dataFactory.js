const {faker} = require('@faker-js/faker')

const createUser=()=>{
    return {
        firstName  : faker.person.firstName(),
        lastName : faker.person.lastName(),
        email : faker.internet.email(),
        company: faker.company.name(),
        password:faker.internet.password(),

        day: faker.number.int({min:1,max:30}).toString(),
        month: faker.number.int({min:1,max:12}).toString() , 
        year: faker.number.int({min:1950,max:2026}).toString(),

        address1: faker.location.streetAddress(),
        address2: faker.location.secondaryAddress(),
        city:faker.location.city(),
        state:faker.location.state(),
        zipcode: faker.location.zipCode(),
    
        //mobileNumber: '9'+faker.phone.number('9')
    }
}
module.exports= {createUser}