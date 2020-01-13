<template lang="html">
  <div>
    <div id="lyrics">
      <div id="name_cover">
        <h1 id="track_name"><router-link id="artist_link" to="/track">
        Childish Gambino - Zombies</router-link></h1>
        <img id="cover" src="images/gambino.jpg" alt="zombies">
        <p id="discription">Produced: by Childish Gambino & Ludwig Göransson <br>
          Album: “Awaken, My Love!”
        </p>
        <br>
      </div>
      <div id="lyrics_content">
        <span id="word">LYRICS:</span><br>
        <p id="text">
          [Intro: Kari Faux] <br>
(That's right) <br>
(That's right) <br>
 <br>
[Verse 1: Childish Gambino & Kari Faux] <br>
All I see is zombies <br>
Walking all around us <br>
You can hear them coming <br>
(They come to take your life) <br>
You can hear them breathing <br>
Breathing down your spine, oh <br>
 <br>
[Verse 2: Childish Gambino] <br>
All I see is zombies <br>
Hear them screaming at her <br>
They can smell your money <br>
And they want your soul <br>
Here they come behind you <br>
Try to stay alive <br>
 <br>
[Chorus: Kari Faux & Childish Gambino] <br>
We're coming out to get you <br>
We're all so glad we met you <br>
We're eating you for profit <br>
There is no way to stop it <br>
You will find there is no safe place to hide, hide <br>
(That's right, that's right) <br>
(That's right, that's right) <br>
 <br>
[Verse 3: Childish Gambino & Kari Faux] <br>
All I see is zombies <br>
Feeding all around us <br>
All they eat are people <br>
(And you won't survive) <br>
They don't know what happened <br>
They just stay alive <br>
 <br>
[Chorus: Kari Faux & Childish Gambino] <br>
We're coming out to get you <br>
We're all so glad we met you <br>
We're eating you for profit <br>
There is no way to stop it <br>
There is no way to stop it <br>
You will find there is no safe place to hide <br>
(That's right, that's right) <br>
 <br>
[Bridge: Kari Faux] <br>
We're coming out to get you <br>
We're all so glad we met you <br>
We're eating you for profit <br>
There is no way to stop it <br>
There is no way to stop it <br>
 <br>
[Outro: Childish Gambino] <br>
Do you feel alive, yeah? <br>
Do you feel alive, yeah? <br>
Doo-doo, doo-doo-doo <br>
Do you feel alive? <br>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
div {
  font-size: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

#lyrics {
  background-color: white;
  /* e9e9e9; */
}

#cover_info {
  display: flex;
  justify-content: space-around;
}

#track_name {
  color: white;
  padding-right: 30rem;
}

#name_cover {
  background-color: #1d4171;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  width: 110%;
}



#cover {
  width: 650px;
  height: 250px;
  padding-left: 25rem;
}
#lyrics_content {
  color: white;

}

#artist_link{
  color: white;
  font-size: 40px;
  text-decoration: none;
}

#discription {
  font-size: 25px;
  color: white;
}

#word {
  font-size: 35px;
}

#text {
  font-size: 20px;
  color: black;
}

</style>
