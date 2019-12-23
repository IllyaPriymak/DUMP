<template lang="html">
  <div>
    <SongsItem
      v-for="song of songs"
      v-bind:song="song"
    />
  </div>
</template>

<script>
import SongsItem from "@/components/Songs.Compon/SongsItem"

export default {
  props: ["songs"],
  components: {
    SongsItem
  }
}
</script>

<style lang="css" scoped>
</style>
