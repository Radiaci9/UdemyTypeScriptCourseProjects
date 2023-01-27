import User from "../modules/User";
import { UserProps } from "../types";
import View from "./View";

class UserDetail extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <h2>User Detail</h2>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
      </div>
    `;
  }
}

export default UserDetail;
