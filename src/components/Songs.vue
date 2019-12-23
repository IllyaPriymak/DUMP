<template lang="html">
  <div class="">
    <h1>Songs</h1>
    <SongsList
    v-bind:songs="songs"
    />
  </div>
</template>

<script>
import SongsList from "@/components/Songs.Compon/SongsList"

export default {
  name: 'app',
  data() {
    return {
      songs: [
        {id: 1, title: "Koas", completed: false},
        {id: 2, title: "Snorkelmannen Ø Hans Vänner", completed: false},
        {id: 3, title: "Stockholm By Night", completed: false},
      ]
    }
  },
  components: {
    SongsList
  }
}
</script>

<style lang="css" scoped>
div {
  text-align: center;
}
</style>
