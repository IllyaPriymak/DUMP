<template>
  <div id="app">
      <h1>DUMP - its music platform. </h1>
      <div class="">
        <a id="header_nav__link" href="#Home">Home</a>
        <a id="header_nav__link" href="#Artist Songs">Track</a>
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
    </div>
</template>


<script>

export default {
  name: 'app',

  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  background-color: lightgreen;
  justify-content: space-around;
  align-items: center;

}

body {
  margin: 0px;
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
  width: 55px;
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
}


</style>
