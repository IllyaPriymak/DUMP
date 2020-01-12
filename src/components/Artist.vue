<template lang="html">
  <div class="">
    <h1>most viewed artist</h1>
    <div id="content">
      <div class="first_artist">
        <router-link id="artist_link" to="/tartist"><img id="artist_foto" src="images/bc8374e5bd2169cfcdce87353001dd27.jpg" alt="tyler"><br>
        Tyler, the Creator</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="css" scoped>
div {
  text-align: center;
}

#artist_link{
  color: black;
  font-size: 20px;
  text-decoration: none;
}

#artist_link:hover{
  color: green;
}

#artist_foto {
  width: 15%;
  height: 50%;
}

h1 {
  font-size: 60px;
  color: #5c5cd6;
}

</style>
