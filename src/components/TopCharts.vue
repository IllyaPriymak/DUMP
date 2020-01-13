<template lang="html">
  <div class="everything">
    <h1>charts</h1>
    <div id="contant">
      <div id="first_main_card">
        <p id="word_card">Most viewed of this month <br>
        Top 8 lyrics : </p>
        <div id="card_contant">
          <router-link id="song_contant_link" to="/kendrick">1. Kendrick Lamar - Bitch, Don`t Kill My Vibe <span id="views">1350 <img id="viewes" src="images/viewes.png" alt="viewes"></span></router-link>
          <router-link id="song_contant_link" to="/queen">2. Queen - Another One Bites the Dust <span id="views">1284 <img id="viewes" src="images/viewes.png" alt="viewes"></span></router-link>
          <router-link id="song_contant_link" to="/drums">3. The Drums - Money <span id="views">1282 <img id="viewes" src="images/viewes.png" alt="viewes"></span></router-link>
          <router-link id="song_contant_link" to="/kanye">4. Kanye West - Runaway (feat. Pusha T) <span id="views">1240 <img id="viewes" src="images/viewes.png" alt="viewes"></span></router-link>
          <router-link id="song_contant_link" to="/drake">5. Drake - Hotline Bling <span id="views">1200 <img id="viewes" src="images/viewes.png" alt="viewes"></span></router-link>
          <router-link id="song_contant_link" to="/cudi">6. Kid Cudi - Man on the Moon <span id="views">1155 <img id="viewes" src="images/viewes.png" alt="viewes"></span></router-link>
          <router-link id="song_contant_link" to="/gambino">7. Childish Gambino - Zombies <span id="views">1135 <img id="viewes" src="images/viewes.png" alt="viewes"></span></router-link>
          <router-link id="song_contant_link" to="/frank">8. Frank Ocean - Chanelm <span id="views">987 <img id="viewes" src="images/viewes.png" alt="viewes"></span></router-link>
        </div>
      </div>
      <div id="second_main_card">
        <p id="word_card">Most viewed of oll time <br>
        Top 5 : </p>
        <div id="card_contant">
          <router-link id="song_contant_link" to="/tyler">1. Tyler, The Creator - November <span id="views">10388 <img id="viewes" src="images/viewes.png" alt="viewes"></span></router-link>
          <router-link id="song_contant_link" to="/frank">2. Frank Ocean - Chanel <span id="views">10088 <img id="viewes" src="images/viewes.png" alt="viewes"></span></router-link>
          <router-link id="song_contant_link" to="/queen">3. Queen - Another One Bites the Dust <span id="views">9088 <img id="viewes" src="images/viewes.png" alt="viewes"></span></router-link>
          <router-link id="song_contant_link" to="/cudi">4. Kid Cudi - Man on the Moon <span id="views">9012 <img id="viewes" src="images/viewes.png" alt="viewes"></span></router-link>
          <router-link id="song_contant_link" to="/kendrick">5. Kendrick Lamar - Bitch, Don`t Kill My Vibe <span id="views">8921 <img id="viewes" src="images/viewes.png" alt="viewes"></span></router-link>
        </div>
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
}

#contant {
  display: flex;
  justify-content: space-around;
}

#views {
  font-size: 20px;
  padding-left: 3rem;
  color: green;
}

#song_contant_link {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
  text-decoration: none;
  color: black;
  font-size: 15px;
  align-items: center;
  background-color: white;
}

#song_contant_link:hover {
  color: #5c5cd6;
  background-color: #e9e9e9;
}

#first_main_card {
  /* border: 2px solid black; */
  /* background-color: lightgreen; */
}

#word_card {
  font-size: 30px;
  padding: 20px;
  background-color: #40bf80;
  color: white;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
}

#card_contant {
  display: flex;
  flex-direction: column;
  padding-top: 15px;
}

#viewes {
  width: 20px;
  height: 13px;
}

h1{
  font-size: 60px;
  color: #5c5cd6;
}
</style>
