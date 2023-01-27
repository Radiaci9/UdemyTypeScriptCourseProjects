import User from "../modules/User";
import { UserProps } from "../types";
import UserDetail from "./UserDetail";
import UserForm from "./UserForm";
import View from "./View";

class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string; } {
    return {
      userDetail: '.user-detail',
      userFrom: '.user-form',
    };
  }

  onRender(): void {
    new UserDetail(this.regions.userDetail, this.model).render();
    new UserForm(this.regions.userFrom, this.model).render();
  }

  template(): string {
    return `
      <div>
        <div class="user-detail"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}

export default UserEdit;
