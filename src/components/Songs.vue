<template lang="html">
  <div>
    <div  id="main_contant">
        <h1>songs</h1>
      <AddSongs
      @add-todo="AddTodo"
      />
      <select id="list">
        <option label="default" value="1" selected>default</option>
        <option>name (a-z)</option>
        <option disabled>most interest</option>
        <option>viewes (largest to smallest)</option>
      </select>
      <div id="song_contant">
        <ol>
          <router-link id="song_contant_link" to="/tyler"><li> Tyler, The Creator - November</li></router-link>
          <router-link id="song_contant_link" to="/drake"><li> Drake - Hotline Bling </li></router-link>
          <router-link id="song_contant_link" to="/asap"><li> Asap Rocky - LSD </li></router-link>
          <router-link id="song_contant_link" to="/mac"><li> Mac Miller - Dang! (feat. Anderson .Paak) </li></router-link>
          <router-link id="song_contant_link" to="/kanye"><li> Kanye West - Runaway (feat. Pusha T)</li></router-link>
          <router-link id="song_contant_link" to="/nirvana"><li> Nirvana - Smells Like Teen Spirit</li></router-link>
          <router-link id="song_contant_link" to="/kendrick"><li>Kendrick Lamar - Bitch, Don`t Kill My Vibe</li></router-link>
          <router-link id="song_contant_link" to="/thai"><li>Slowthai - Jiggle</li></router-link>
          <router-link id="song_contant_link" to="/brock"><li>BROCKHAMOTON - NO HALO</li></router-link>
          <router-link id="song_contant_link" to="/drums"><li>The Drums - Money</li></router-link>
          <router-link id="song_contant_link" to="/black"><li>6LACK - PRBLMS</li></router-link>
          <router-link id="song_contant_link" to="/frank"><li>Frank Ocean - Chanel</li></router-link>
          <router-link id="song_contant_link" to="/bones"><li>Bones - HDMI</li></router-link>
          <router-link id="song_contant_link" to="/gambino"><li>Childish Gambino - Zombies</li></router-link>
          <router-link id="song_contant_link" to="/dorn"><li>Ivan Dorn - Such a Bad Surprise</li></router-link>
          <router-link id="song_contant_link" to="/saba"><li>Saba - Life</li></router-link>
          <router-link id="song_contant_link" to="/cudi"><li>Kid Cudi - Man on the Moon</li></router-link>
          <router-link id="song_contant_link" to="/queen"><li>Queen - Another One Bites the Dust</li></router-link>
          <router-link id="song_contant_link" to="/travis"><li>Travis Scott - goosedumps</li></router-link>
          <router-link id="song_contant_link" to="/lean"><li>Yung Lean - Hurt</li></router-link>
        </ol>
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
  font-family: 'Sawarabi Mincho', sans-serif;
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
  font-size: 20px;
}

#list {
}

#song_contant_link:hover {
  color: #5c5cd6;
  background-color: #e9e9e9;
}

#song_contant {
  padding-right: 2.5rem;
  padding-left: 0rem;
}
h1 {
  font-size: 60px;
  color: #5c5cd6;
}
</style>
