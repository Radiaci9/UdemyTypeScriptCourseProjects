import { USER_ROOT_URL } from "./constants";
import Collection from "./modules/Collection";
import User from "./modules/User";
import UserEdit from "./views/UserEdit";
import UserList from "./views/UserList";

const user = User.buildUser({name: 'Name', age: 24});

const root = document.getElementById('root')

if (!root) throw new Error('Div with id="root" doesn\'t exists')

const collection = User.buildUserCollection();

// const userEdit = new UserEdit(root, user);
const userList = new UserList(root, collection);

// userEdit.render();
collection.on('change', () => {
  setTimeout(() => {
    userList.render();
  }, 1111)
});

collection.fetch();