const category = () => {
  let currentCategory = [];

  return {
    createCategory: function createCategory(name) {
      currentCategory.push(name);
    },
  };
};

export { category };
