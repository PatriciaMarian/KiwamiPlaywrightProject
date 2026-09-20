
import { faker } from '@faker-js/faker'


const firstName = faker.person.firstName()
const email = faker.internet.email()

export const UserProfile = {


  signupname: firstName,
  signupemail: email,
  accountname: firstName,
  accountemail: email,
  password: faker.internet.password(),


  day: faker.number.int({ min: 1, max: 28 }).toString(),
  month: faker.number.int({ min: 1, max: 12 }).toString(),
  year: faker.number.int({ min: 1900, max: 2021 }).toString(),


  firstName: firstName,
  lastName: faker.person.lastName(),
  company: faker.company.name(),
  address: faker.location.streetAddress(),
  address2: faker.location.secondaryAddress(),
  country: faker.location.country(),
  state: faker.location.state(),
  city: faker.location.city(),
  zipcode: faker.location.zipCode(),
  mobile: `9${faker.string.numeric(9)}`,
  //mobile: '9' + faker.phone.number({ style: 'national' }),
};
