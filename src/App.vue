<template>
  <div id="app">
    <div id="header">
      <h1>DUMP - lyrics track platform.  </h1>
      <div>
        <router-link id="header_nav__link" to="/">Home</router-link>
        <router-link id="header_nav__link" to="/topcharts">Top Charts</router-link>
        <router-link id="header_nav__link" to="/songs">Songs</router-link>
        <router-link id="header_nav__link" to="/artist">Artist</router-link>
      </div>
      <div>
        <form>
          <input id="nav_search" type="search" placeholder="Type here...">
          <button id="btn_search" type="search">Search</button>
        </form>
      </div>
    </div>
    <router-view />
    </div>
</template>

 <script>

  export default {
  name: 'app',
  components: {
  },
}

// let input = document.getElementById("nav_search");
// input.addEventListener("keyup", ()=>{
//   let filter = input.value.toUpperCase();
//   console.log(filter);
//   let div = document.getElementById("song_contant")
//   console.log(div);
// })
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Sawarabi Mincho', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction:column;

}

 body {
  margin: 0px;
}

#header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: lightgreen;
  height: 90px;
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
#btn_search {
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
  color: #5c5cd6;
}


</style>
