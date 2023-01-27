import User from "../modules/User";
import { UserProps } from "../types";
import CollectionView from "./CollectionView";
import UserDetail from "./UserDetail";

class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserDetail(itemParent, model).render();
    // const templateElement = document.createElement('li');

    // templateElement.innerHTML = `${model.get('name')} - ${model.get('id')}`;

    // itemParent.append(templateElement);
  }
}

export default UserList;
