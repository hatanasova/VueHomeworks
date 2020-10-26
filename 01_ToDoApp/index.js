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
      event.target.parentNode.children[1].classList.add(
        "text-gray-500",
        "line-through"
      );
      event.target.disabled = true;
    },
    newItem(event) {
      let inputFieldValue = event.target.parentNode.children[0].value;
      if (!inputFieldValue == "") {
        this.items.push({
          text: inputFieldValue,
          done: false,
        });
      }
      event.target.parentNode.children[0].value = "";
    },
  },
};

Vue.createApp(ToDoApp).mount("#app");
