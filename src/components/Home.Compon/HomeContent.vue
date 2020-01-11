<template lang="html">
  <div>
    <img id="back_foto" src="/images/elton-john-830x535.png" alt="backfoto">
    <div id="home_content">
      <h1>DUMP</h1>
      <h2>Its a catalog of song lyrics. <br>
         Search for songs by artist, title or lyrics. Receive the lyrics in return. <br>
         Also provides detailed metadata about the artists who performed it, the genre, influences, related artists and more. </h2>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
div {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 900px;
}

body {
  margin: 0px;
}


#back_foto {
  position: absolute;
  opacity: .3;
  width: 2000px;
  height: 900px;
}

#home_content {
  position: relative;
}

h1 {
  font-size: 60px;
  color: #5c5cd6;
}

h2 {
  font-size: 35px;
}
</style>
