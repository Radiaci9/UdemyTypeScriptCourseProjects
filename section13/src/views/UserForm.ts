import User from "../modules/User";
import { Callback, UserProps } from "../types";
import View from "./View";

class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: Callback } {
    return {
      'click:#set-name': this.onSetNameClick,
      'click:#set-age': this.onSetAgeClick,
      'click:#save-model': this.onSaveClick,
    }
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    const name = input?.value;

    this.model.set({name});
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  }

  onSaveClick = (): void => {
    this.model.save();
  }

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}" />
        <button id="set-name">Change name</button>
        <button id="set-age">Set Random age</button>
        <button id="save-model">Save</button>
      </div>
    `;
  }
}

export default UserForm;
