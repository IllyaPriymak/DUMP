<template lang="html">
  <div class="">
    <h1>most viewed artist</h1>
    <div id="content">
      <div id="artist">
        <router-link id="artist_link" to="/tartist"><img id="artist_foto" src="images/bc8374e5bd2169cfcdce87353001dd27.jpg" alt="tyler"><br>
        Tyler, the Creator</router-link>
      </div>
      <div id="artist">
        <router-link id="artist_link" to="/fartist"><img id="artist_foto" src="images/1fc2c184c3d86b3ba72c37b09d4795d2.jpg" alt="frank"><br>
        Frank Ocean</router-link>
      </div>
      <div id="artist">
        <router-link id="artist_link" to="/dartist"><img id="artist_foto" src="images/cd513a85d9f5245981ea0ac1ce705fcf.png" alt="thedrums"><br>
        The Drums</router-link>
      </div>
      <div id="artist">
        <router-link id="artist_link" to="/kartist"><img id="artist_foto" src="images/lamar.jpg" alt="kendrick"><br>
        Kendrick Lamar</router-link>
      </div>
      <div id="artist">
        <router-link id="artist_link" to="/nartist"><img id="artist_foto" src="images/3ec5542ff520ee74e2befdaba32ef2ef--nirvana-kurt-cobain-kurt-cobain-photos.jpg" alt="nirvana"><br>
        Nirvana</router-link>
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
  font-family: 'Sawarabi Mincho', sans-serif;
}

#artist {
  padding-bottom: 20px;
}

#artist_link{
  color: black;
  font-size: 25px;
  text-decoration: none;
}

#artist_link:hover{
color: #5c5cd6;
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
