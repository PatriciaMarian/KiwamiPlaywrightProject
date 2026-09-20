
import { faker } from '@faker-js/faker';

export interface UserProfile {
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobile: string;
}

export function generateFakeProfile(): UserProfile {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const company = faker.company.name();
  const address = faker.location.streetAddress();
  const address2 = faker.location.street();
  const country = faker.location.country();
  const state = faker.location.state();
  const city = faker.location.city();
  const zipcode = faker.location.zipCode();
  const mobile = faker.phone.number();


  
  return {
    firstName,
    lastName,
    company,
    address,
    address2,
    country,
    state,
    city,
    zipcode,
    mobile: faker.phone.number({ style: 'national' }),
  };
}

   