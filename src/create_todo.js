import { category } from "./category";

const todoModule = (() => {
  let list = [];
  let id = 0;

  return {
    addTodoList: (title, descritpion, dueDate, priority, notes, category) => {
      this.title = title;
      this.descritpion = descritpion;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;
      this.entryId = id;
      category.currentCategory = category;

      list.push({ title, descritpion, dueDate, priority, notes, id, category });
      id++;
      return list;
    },

    removeTodoList: (i) => {
      list.splice(i, 1);
    },

    listContents: list,
  };
})();

export { todoModule };
