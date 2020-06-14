const category = (() => {
  let currentCategory = [];
  let categoryList = [];

  return {
    createCategory: function createCategory(name) {
      currentCategory.push(name);
    },

    deleteCategory: function deleteCategory(name) {
      let catIndex;
    },

    currentCategory: currentCategory,
  };
})();

export { category };
