<template lang="html">
  <div>
    <SongsItem
      v-for="(todo, i) of todos"
      v-bind:todo="todo"
      v-bind:index="i"
      v-on:remove-todo="removeTodo"
    />
  </div>
</template>

<script>
import SongsItem from "@/components/Songs.Compon/SongsItem"

export default {
  props: ["todos"],
  components: {
    SongsItem
  },
  methods: {
    removeTodo(id) {
      // console.log(id);
      this.$emit("remove-todo", id)
    }
  }
}
</script>

<style lang="css" scoped>

</style>
