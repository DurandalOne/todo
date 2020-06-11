const todoModule = (() => {
  let list = [];

  return {
    addTodoList: (title, descritpion, dueDate, priority, notes) => {
      this.title = title;
      this.descritpion = descritpion;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;

      list.push({ title, descritpion, dueDate, priority, notes });
      return list;
    },

    removeTodoList: (i) => {
      list.splice(i, 1);
    },

    listContents: list,
  };
})();

export { todoModule };
