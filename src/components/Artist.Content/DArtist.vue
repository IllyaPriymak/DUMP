<template lang="html">
  <div>
    <div id="artist_images">
      <img id="images" src="images/cd513a85d9f5245981ea0ac1ce705fcf.png" alt="thedrums">
      <p>First track or album: <br>
      Summertime! - 2009 <br>
      Last trak or album: <br>
      I Didn`t Realize B/W You Lied - 2019 <br> <br>
      <span id="size_viewes">299813 <img id="viewes" src="images/viewes.png" alt="viewes"> off oll time </span> </p>
    </div>
    <div id="artist_information">
      <p id="name">The Drums are an American indie pop band from New York City. </p>
      Most popular track of this artist:
      <div id="artist_track">
        <div id="first_block">
          <ol>
            <li><router-link id="track_link" to="/drums"> Money</router-link></li>
            <li><router-link id="track_link" to="/track"> Lets Go Surfing</router-link></li>
            <li><router-link id="track_link" to="/track"> Days</router-link></li>
            <li><router-link id="track_link" to="/track"> I Don`t Know How to Love</router-link></li>
          </ol>
        </div>
        <div id="second_block">
          <ol>
            <li value="5"><router-link id="track_link" to="/track"> Down By the Water</router-link></li>
            <li><router-link id="track_link" to="/track"> Hard to Love</router-link></li>
            <li><router-link id="track_link" to="/track"> What You Were</router-link></li>
            <li><router-link id="track_link" to="/track"> Book of Revelation</router-link></li>
          </ol>
        </div>
      </div>
      <div id="artist_album">
        Albums of this artist:
        <div class="albums">
          <div class="first_album">
            <router-link id="album_link" to="/album"><img id="cover" src="images/The-Drums-Brutalism-Album.jpg" alt="brutalism"> </router-link>
            <router-link id="album_link" to="/album"><img id="cover" src="images/R-10436404-1504009607-9388.jpeg.jpg" alt="abysmal_thoughts"> </router-link>
            <router-link id="album_link" to="/album"><img id="cover" src="images/53154.jpg" alt="encyclopedia"> </router-link>
            <router-link id="album_link" to="/album"><img id="cover" src="images/737f8f8019a84c4c8e2189da7ab1f8dd.jpg" alt="portamento"> </router-link>
            <router-link id="album_link" to="/album"><img id="cover" src="images/1326146360_cov99er.jpg" alt="thedrums"> </router-link>
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
  height: 370px;
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
