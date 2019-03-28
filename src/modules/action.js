// types of action
const Types = {
  CREATE_ITEM: "CREATE_ITEM",
  CREATE_ITEM_USER: "CREATE_ITEM_USER"
};
// actions
const createItem = task => ({
  type: Types.CREATE_ITEM,
  payload: task
});
const createItemForUsers = userdetails => ({
  type: Types.CREATE_ITEM_USER,
  payload: userdetails
});
export default {
  createItem,
  createItemForUsers,
  Types
};
