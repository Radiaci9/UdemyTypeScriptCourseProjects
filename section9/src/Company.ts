import { faker } from '@faker-js/faker';
import { Location, Mappable } from './types';

class Company implements Mappable {
  public name: string;
  private catchPhrase: string;
  public location: Location;

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }

  public markerContent(): string {
    return `
      <div>
        <h2>Company Name: ${this.name}</h2>
        <h4>Catch phrase: ${this.catchPhrase}</h4>
      </div>
    `;
  }
}

export default Company;
