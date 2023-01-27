import { faker } from '@faker-js/faker';
import { Location, Mappable } from './types';

class User implements Mappable {
  public name: string;
  public location: Location;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }

  public markerContent(): string {
    return `
      <div>
        <h2>Name: ${this.name}</h2>
      </div>
    `;
  }
}

export default User;
