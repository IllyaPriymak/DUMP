<template lang="html">
  <div>
    <div id="artist_images">
      <img id="images" src="images/1fc2c184c3d86b3ba72c37b09d4795d2.jpg" alt="frank">
      <p>First track or album: <br>
      Nostalgia, Ultra - 2011 <br>
      Last trak or album: <br>
      In My Room - 2019 <br> <br>
     <span id="size_viewes">448209 <img id="viewes" src="images/viewes.png" alt="viewes"> off oll time </span> </p>
    </div>
    <div id="artist_information">
      <p id="name">Frank Ocean (born Christopher Edwin Cooksey on October 28, 1987. <br>
         Is an American singer, songwriter, record producer, and photographer</p>
      Most popular track of this artist:
      <div id="artist_track">
        <div id="first_block">
          <ol>
            <li><router-link id="track_link" to="/frank"> Chanel</router-link></li>
            <li><router-link id="track_link" to="/track"> Slide (feat. Migos)</router-link></li>
            <li><router-link id="track_link" to="/track"> No Church in the Wild (feat. Jay-Z & Kanye West)</router-link></li>
            <li><router-link id="track_link" to="/track"> RAF (feat. A$AP Rocky, Playboi Carti, Quavo, Lil Uzi Vert)</router-link></li>
          </ol>
        </div>
        <div id="second_block">
          <ol>
            <li value="5"><router-link id="track_link" to="/track"> CAROUSEL</router-link></li>
            <li><router-link id="track_link" to="/track"> Pink + White</router-link></li>
            <li><router-link id="track_link" to="/track"> Thinkin Bout You</router-link></li>
            <li><router-link id="track_link" to="/track"> In My Room</router-link></li>
          </ol>
        </div>
      </div>
      <div id="artist_album">
        Albums of this artist:
        <div class="albums">
          <div class="first_album">
            <router-link id="album_link" to="/album"><img id="cover" src="images/Фрэнк_Оушен_Blonde.jpg" alt="blonde"> </router-link>
            <router-link id="album_link" to="/album"><img id="cover" src="images/wddwq.png" alt="channel orange"> </router-link>
            <router-link id="album_link" to="/album"><img id="cover" src="images/f193a9a31a704d09a1fba42b40f13719.jpg" alt="nostalgia, ultra"> </router-link>
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
