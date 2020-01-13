<template lang="html">
  <div>
    <div id="artist_images">
      <img id="images" src="images/3ec5542ff520ee74e2befdaba32ef2ef--nirvana-kurt-cobain-kurt-cobain-photos.jpg" alt="nirvana">
      <p>First track or album: <br>
        Love Buzz - 1970 <br>
      Last trak or album: <br>
      In Utero (20th Anniversary Deluxe Edition) - 1993 <br> <br>
      <span id="size_viewes">303064 <img id="viewes" src="images/viewes.png" alt="viewes"> off oll time</span> </p>
    </div>
    <div id="artist_information">
      <p id="name">Nirvana. American rock band formed in Aberdeen, Washington in 1987.</p>
      Most popular track of this artist:
      <div id="artist_track">
        <div id="first_block">
          <ol>
            <li><router-link id="track_link" to="/nirvana"> Smells Like Teen Spirit</router-link></li>
            <li><router-link id="track_link" to="/track"> Come As You Are</router-link></li>
            <li><router-link id="track_link" to="/track"> Lithium</router-link></li>
            <li><router-link id="track_link" to="/track"> The Man Who Sold the World</router-link></li>
          </ol>
        </div>
        <div id="second_block">
          <ol>
            <li value="5"><router-link id="track_link" to="/track"> In Bloom</router-link></li>
            <li><router-link id="track_link" to="/track"> Polly</router-link></li>
            <li><router-link id="track_link" to="/track"> Rape Me</router-link></li>
            <li><router-link id="track_link" to="/track"> Something In the Way</router-link></li>
          </ol>
        </div>
      </div>
      <div id="artist_album">
        Albums of this artist:
        <div class="albums">
          <div class="first_album">
            <router-link id="album_link" to="/album"><img id="cover" src="images/4513.300x300.jpg" alt="inutero"> </router-link>
            <router-link id="album_link" to="/album"><img id="cover" src="images/Incesticide_cover.jpg" alt="incesticide"> </router-link>
            <router-link id="album_link" to="/album"><img id="cover" src="images/NirvanaNevermindalbumcover.jpg" alt="neverminda"> </router-link>
            <router-link id="album_link" to="/album"><img id="cover" src="images/Bleach_cover.jpg" alt="bleach"> </router-link>
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
  align-items: center;
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
