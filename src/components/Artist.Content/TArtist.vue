<template lang="html">
  <div>
    <div id="artist_images">
      <img id="images" src="images/bc8374e5bd2169cfcdce87353001dd27.jpg" alt="tyler">
    </div>
    <div id="artist_information">
      <p id="name">Tyler, the Creator - artist and creator </p>
      Most popular track of this artist:
      <div id="artist_track">
        <div id="first_block">
          <ol>
            <li><router-link id="track_link" to="/track"> EARFQUAKE</router-link></li>
            <li><router-link id="track_link" to="/track"> I THINK</router-link></li>
            <li><router-link id="track_link" to="/track"> Who Dat Boy (feat. A$AP ROCKY)</router-link></li>
            <li><router-link id="track_link" to="/track"> NEW MAGIC WAND</router-link></li>
          </ol>
        </div>
        <div id="second_block">
          <ol>
            <li value="5"><router-link id="track_link" to="/track"> IGOR`S THEME</router-link></li>
            <li><router-link id="track_link" to="/track"> See You Again (feat. Kali Uchis)</router-link></li>
            <li><router-link id="track_link" to="/track"> RUNNING OUT OF TIME</router-link></li>
            <li><router-link id="track_link" to="/track"> A BOY IS A GUN</router-link></li>
          </ol>
        </div>
      </div>
      <div id="artist_album">
        Albums of this artist:
        <div class="albums">
          <div class="first_album">
            <router-link id="album_link" to="/albums"><img id="cover" src="images/600x600bf.png" alt="igor"> </router-link>
            <router-link id="album_link" to="/albums"><img id="cover" src="images/91OeYnLoCJL._SL1500_.jpg" alt="flowerboy"> </router-link>
            <router-link id="album_link" to="/albums"><img id="cover" src="images/s-l300.jpg" alt="cheerybomb"> </router-link>
            <router-link id="album_link" to="/albums"><img id="cover" src="images/81xs2JI9grL._SX355_.jpg" alt="wolf"> </router-link>
            <router-link id="album_link" to="/albums"><img id="cover" src="images/274px-Tyler_The_Creator_Goblin.jpg" alt="goblin"> </router-link>
            <router-link id="album_link" to="/albums"><img id="cover" src="images/563e5b15bd4846fbb9c464fa8e1bd45a.jpg" alt="goblin"> </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

div{
  display: flex;
  justify-content: center;
}


#artist_images {
  display: flex;
  padding-top: 5rem;
  padding-right: 10rem;
}

#images {
  width: 300px;
  height: 350px;
}

#name {
  font-size: 30px;
}

#artist_information {
  font-size: 20px;
  padding-right: 10rem;
  display: flex;
  flex-direction: column;
  color: black;
  align-items: flex-start;
}


#track_link {
  text-decoration: none;
  color: black;
}

#track_link:hover {
  color: #5c5cd6;
}

#artist_album {
  display: flex;
  flex-direction: column;
}

#albums {
  display: flex;
  flex-direction: row;
}

#album_link {
  padding: 10px;
}

#cover {
  width:150px;
  height: 150px;
}

#cover:hover{
  box-shadow: 0 0 10px rgba(0,0,0,0.6);
}

</style>
