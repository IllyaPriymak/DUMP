<template lang="html">
  <div>
    <!-- <div id="header">
      <h1>DUMP - lyrics track platform.  </h1>
      <div class="">
        <a id="header_nav__link" href="#Home">Home</a>
        <a id="he ader_nav__link" href="#Artist Songs">Track</a>
        <a id="header_nav__link" href="#Artist">Artist</a>
        <a id="header_nav__link" href="#Songs">Album</a>
        <a id="header_nav__link" href="#Songs">Lyrics</a>
      </div>
      <div class="">
        <form>
          <input type="search" placeholder="Type here...">
          <button type="search">Search</button>
        </form>
      </div>
    </div> -->
    <img id="back_foto" src="/images/elton-john-830x535.png" alt="backfoto">
    <div id="home_content">
      <h1>DUMP</h1>
      <h2>Its a catalog of song lyrics and translations. <br>
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
/*
#header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: lightgreen;

}

#header_nav__link {
  padding-left: 20px;
  padding-right: 20px;
  font-size: 20px;
  text-decoration: none;
  color: white;
}

#header_nav__link:hover{
  color: #5c5cd6;
}


* {box-sizing: border-box;}
form {
  position: relative;
  width: 200px;
  margin: 0 auto;
}
input {
  width: 80%;
  height: 30px;
  border: 2px solid black;
  border-radius: 5px;
  outline: none;
  background: lightgreen;
  color: black;
}
button {
  position: absolute;
  top: 0;
  right: 0px;
  width: 53px;
  height: 30px;
  border: none;
  background: #5c5cd6;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  color: white;
}
button:before {
  font-family: FontAwesome;
  font-size: 16px;
  color: #F9F0DA;
}




h1 {
  font-size: 40px;
  margin-right: 70px;
  color: #5c5cd6;
} */


#back_foto {
  position: absolute;
  opacity: .3;
  width: 100%;
  height: 100%;
}

#home_content {
  position: relative;
}

h1 {
  font-size: 50px;
  color: #5c5cd6;
}

h2 {
  font-size: 35px;
}
</style>
