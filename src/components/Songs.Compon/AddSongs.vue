<template lang="html">
  <form id="form_content" @submit.prevent="onSubmit">
    <input id="search_content" type="text" v-model="title">
    <button id="add_button" type="submit">find lyrics by first words</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    }
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }

        this.$emit("add-todo", newTodo)
        this.title = ""
      }
    }
  }
}
</script>

<style lang="css" scoped>
#form_content {
  display:flex;
  padding-bottom: 1rem;
  width: 350px;

}
#search_content{
  background-color: white;
}

#add_button {
  border-radius: 0 5px 5px 0;
  width: 100px;
  color: white;
  background-color: black;
}

</style>
