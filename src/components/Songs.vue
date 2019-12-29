<template lang="html">
  <div class="">
    <h1>Artist songs:</h1>
    <hr>
    <AddSongs
    @add-todo="AddTodo"
    />
    <SongsList
    v-bind:todos="todos"
    @remove-todo="removeTodo"
    />
  </div>
</template>

<script>
import SongsList from "@/components/Songs.Compon/SongsList"
import AddSongs from "@/components/Songs.Compon/AddSongs"

export default {
  name: 'app',
  data() {
    return {
      todos: [
        // {id: 1, title: "Tyler, The Creator", completed: false},
        // {id: 2, title: "Drake", completed: false},
        // {id: 3, title: "Asap Rocky", completed: false},
      ]
    }
    // https://jsonplaceholder.typicode.com/todos/?_limit=10
  },
  mounted() {
    fetch(`https://jsonplaceholder.typicode.com/todos/?_limit=10`)
      .then(response => response.json())
      .then(json => {
        this.todos = json
  })
},
methods: {
  removeTodo(id) {
    this.todos = this.todos.filter(t => t.id !== id)
  },
  AddTodo(todo) {
    this.todos.push(todo)
  }
},
  components: {
    SongsList,
    AddSongs
  }
}
</script>

<style lang="css" scoped>
div {
  text-align: center;
}

h1 {
  font-size: 60px;
  color: #5c5cd6;
}
</style>
