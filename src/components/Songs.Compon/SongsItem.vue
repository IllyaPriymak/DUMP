<template lang="html">
  <div>
      <span>
      <!-- <strong>{{index + 1}}.</strong> -->
      {{todo.title}}
    </span>
    <button
        v-on:click="$emit('remove-todo', todo.id)"
    >&times;</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  }
}
</script>

<style lang="css" scoped>
div {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
}

span {
  font-size: 20px;
}

button {
  border-radius: 50%;
  padding-left: 10px;
  padding-right: 10px;
  background-color: black;
  color: white;
}


</style>
