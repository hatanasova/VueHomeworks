const ToDoApp = {
  data() {
    return {
      items: [
        { text: "Learn HTML", done: false },
        { text: "Learn CSS", done: false },
        { text: "Learn JavaScript", done: false },
        { text: "Learn Vue.js", done: false },
        { text: "Make $$$", done: false },
      ],
    };
  },
  methods: {
    itemDone(event) {
      event.target.value = true;
      event.target.parentNode.children[1].classList.add("text-gray-500", "line-through");
      event.target.disabled = true;
    },
  },
};

Vue.createApp(ToDoApp).mount("#app");
