import { UserProps } from "../types";
import Attributes from "./Attributes";
import Eventing from './Eventing';
import ApiSync from "./ApiSync";
import Model from "./Model";
import { USER_ROOT_URL } from "../constants";
import Collection from "./Collection";

class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(USER_ROOT_URL),
    )
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(USER_ROOT_URL, User.buildUser);
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);

    this.set({age});
  }
}

export default User;
