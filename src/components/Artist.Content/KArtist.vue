<template lang="html">
  <div>
    <div id="artist_images">
      <img id="images" src="images/lamar.jpg" alt="kendrick">
      <p>First track or album: <br>
      Youngest Head Nigga in Charge (Hub City Threat: Minor of the Year) - 2003 <br>
      Last trak or album: <br>
      DAMN. - 2017 <br> <br>
      <span id="size_viewes">638922 <img id="viewes" src="images/viewes.png" alt="viewes"> off oll time</span> </p>
    </div>
    <div id="artist_information">
      <p id="name">Kendrick Lamar Duckworth (born June 17, 1987) is an American rapper, songwriter, and record producer. </p>
      Most popular track of this artist:
      <div id="artist_track">
        <div id="first_block">
          <ol>
            <li><router-link id="track_link" to="/track"> HUMBLE.</router-link></li>
            <li><router-link id="track_link" to="/track"> Pray For Me</router-link></li>
            <li><router-link id="track_link" to="/track"> DNA.</router-link></li>
            <li><router-link id="track_link" to="/track"> All The Stars</router-link></li>
          </ol>
        </div>
        <div id="second_block">
          <ol>
            <li value="5"><router-link id="track_link" to="/track"> King`s Dead</router-link></li>
            <li><router-link id="track_link" to="/track"> Swimming Pool (Drank)</router-link></li>
            <li><router-link id="track_link" to="/track"> LOYALTY (FEAT. RIHANNA)</router-link></li>
            <li><router-link id="track_link" to="/track"> LOVE. (FEAT. ZACARI)</router-link></li>
          </ol>
        </div>
      </div>
      <div id="artist_album">
        Albums of this artist:
        <div class="albums">
          <div class="first_album">
            <router-link id="album_link" to="/album"><img id="cover" src="images/Kendrick_Lamar_Damn_cover.jpg" alt="damn"> </router-link>
            <router-link id="album_link" to="/album"><img id="cover" src="images/untitled-unmastered.png" alt="untitled-unmastered"> </router-link>
            <router-link id="album_link" to="/album"><img id="cover" src="images/Kendrick-Lamar-To-Pimp-A-Butterfly-Vinyl.jpg" alt="topimpabutterflyvinyl."> </router-link>
            <router-link id="album_link" to="/album"><img id="cover" src="images/kendrick-lamar-good-kid-m-a-a-d-city.800x800.png" alt="goodkidmaadcity"> </router-link>
            <router-link id="album_link" to="/album"><img id="cover" src="images/577c15acd2949.jpg" alt="section.80"> </router-link>
            <router-link id="album_link" to="/album"><img id="cover" src="images/1351763789_20100904-kendrickod.jpg" alt="overlydedicated"> </router-link>
          </div>
        </div>
        <div id="discription">
          <p>New information about song and album lyrics soon!</p>
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
  font-family: 'Sawarabi Mincho', sans-serif;
}


#artist_images {
  display: flex;
  padding-top: 5rem;
  padding-right: 10rem;
  padding-left: 5rem;
  flex-direction: column;
  text-align: center;
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

#size_viewes {
  font-size: 20px;
}

#viewes {
  width: 20px;
  height: 13px;
}

</style>
