
import { faker } from '@faker-js/faker'

const firstName = faker.person.firstName()
const email = faker.internet.email()
const password = faker.internet.password()

export const UserProfile = {

  //signup page
  signupname: firstName,
  signupemail: email,

  //account registration page
  accountname: firstName,
  //accountemail: email,
  password: password,


  day: faker.number.int({ min: 1, max: 28 }).toString(),
  month: faker.number.int({ min: 1, max: 12 }).toString(),
  year: faker.number.int({ min: 1900, max: 2021 }).toString(),


  firstName: firstName,
  lastName: faker.person.lastName(),
  company: faker.company.name(),
  address: faker.location.streetAddress(),
  address2: faker.location.street(),
  //country: faker.location.country(), - passed the value in the method
  state: faker.location.state(),
  city: faker.location.city(),
  zipcode: faker.location.zipCode(),
  mobile: `9${faker.string.numeric(9)}`,

};


