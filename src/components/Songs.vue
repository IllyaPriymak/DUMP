<template lang="html">
  <div>
    <div class="">
      <h1>songs</h1>
      <hr>
      <AddSongs
      @add-todo="AddTodo"
      />
      <div class="song_contant">
          <router-link id="song_contant_link" to="/tyler">1. Tyler, The Creator - November</router-link>
          <router-link id="song_contant_link" to="/drake">2. Drake - Hotline Bling</router-link>
          <router-link id="song_contant_link" to="/asap">3. Asap Rocky - LSD</router-link>
          <router-link id="song_contant_link" to="/mac">4. Mac Miller - Dang! (feat. Anderson .Paak)</router-link>
          <router-link id="song_contant_link" to="/kanye">5. Kanye West - Runaway (feat. Pusha T)</router-link>
          <router-link id="song_contant_link" to="/nirvana">6. Nirvana - Smells Like Teen Spirit</router-link>
          <router-link id="song_contant_link" to="/kendrick">7. Kendrick Lamar - Bitch, Don`t Kill My Vibe</router-link>
          <router-link id="song_contant_link" to="/thai">8. Slowthai - Jiggle</router-link>
          <router-link id="song_contant_link" to="/">9. BROCKHAMOTON - NO HALO</router-link>
          <router-link id="song_contant_link" to="/">10. The Drums - Money</router-link>
          <router-link id="song_contant_link" to="/">11. 6LACK - PRBLMS</router-link>
          <router-link id="song_contant_link" to="/">12. Frank Ocean - Chanel</router-link>
          <router-link id="song_contant_link" to="/">13. Bones - HDMI</router-link>
          <router-link id="song_contant_link" to="/">14. Childish Gambino - Zombies</router-link>
          <router-link id="song_contant_link" to="/">15. Ivan Dorn - Such a Bad Surprise</router-link>
          <router-link id="song_contant_link" to="/">16. Saba - Life</router-link>
          <router-link id="song_contant_link" to="/">17. Kid Cudi - Man on the Moon</router-link>
          <router-link id="song_contant_link" to="/">18. Queen - Another One Bites the Dust</router-link>
          <router-link id="song_contant_link" to="/">19. Travis Scott - goosedumps</router-link>
          <router-link id="song_contant_link" to="/">20. Yung Lean - Hurt</router-link>
      </div>
      <h3>more soon :)</h3>

      <SongsList
      v-bind:todos="todos"
      @remove-todo="removeTodo"
      />
    </div>
    <router-view />
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
      ]
    }
    // https://jsonplaceholder.typicode.com/todos/?_limit=10
  },
//   mounted() {
//     fetch(`http://api.chartlyrics.com/apiv1.asmx`)
//       .then(response => response.json())
//       .then(json => {
//         this.todos = json
//   })
// },
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

#song_contant_link {
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
  text-decoration: none;
  color: black;
  font-size: 30px;
}

#song_contant_link:hover {
  color: #5c5cd6;
  background-color: #e9e9e9;
}

h1 {
  font-size: 60px;
  color: #5c5cd6;
}
</style>
