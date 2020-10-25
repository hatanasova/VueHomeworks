const ToDoApp = {
  data() {
    return {
      item: "test item",
    };
  },
};

Vue.createApp(ToDoApp).mount("#app");