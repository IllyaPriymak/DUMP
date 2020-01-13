<template lang="html">
  <div>
    <div id="lyrics">
      <div id="name_cover">
        <h1 id="track_name"><router-link id="artist_link" to="/track">
        Bones - HDMI</router-link></h1>
        <img id="cover" src="images/96f67adf1a17c429f3572f5193c39d0a.500x500x1.jpg" alt="hdmi">
        <p id="discription">Produced: by Antonio <br>
          Album: Rotten
        </p>
        <br>
      </div>
      <div id="lyrics_content">
        <p id="text">
          <span id="word">LYRICS:</span><br>
          [Video Intro] <br>
SESHOLLOWATERBOYZ <br>
SESHOLLOWATERBOYZ <br>
SESHOLLOWATERBOYZ <br>
SESHOLLOWATERBOYZ <br>
SESHOLLOWATERBOYZ <br>
 <br>
[Intro] <br>
SESH <br>
 <br>
[Verse 1] <br>
Smoking like a motherfucker, higher than a motherfucker <br>
Bitch, please stop the playing <br>
SESHOLLOWATERBOYZ, death to them other boys <br>
We can't hear a word you saying <br>
We don't know your name, can't hang with the gang <br>
Crowd jumping when the bass get banging <br>
All I need is dope, so I gotta get paid <br>
Never see me on the stage unless the money is arranged <br>
My hair 1080, my teeth 240, my blunts 4K <br>
And my dope you couldn't load it <br>
If they ain't calling with a price, we don't answer that <br>
Trying to fuck around, bitch, we gon' handle that <br>
 <br>
[Hook] <br>
If they ain't calling with a price, we don't answer that <br>
Trying to fuck around, bitch, we gon' handle that <br>
We gon' handle that bitch, we gon' handle that <br>
Trying to fuck around, bitch, we gon' handle that <br>
If they ain't calling with a price, we don't answer that <br>
Trying to fuck around, bitch, we gon' handle that <br>
We gon' handle that bitch, we gon' handle that <br>
Trying to fuck around, bitch, we gon' handle that <br>
 <br>
[Verse 2] <br>
Bitch, I'm smoking sacrificial, back to back <br>
Blink, you might miss it <br>
Boy, my team made up of legends <br>
And my ring made out of crystal <br>
They ask me how I been living since these labels out to get me <br>
But the only reason they want to meet me is just to say they fucking met me <br>
 <br>
[Bridge] <br>
I got money on the table but— <br>
I ain't count it yet <br>
I ain't count it yet <br>
I ain't, I ain't count it yet <br>
Money on the table but— <br>
I ain't count it yet <br>
I ain't count it yet <br>
I ain't, I ain't count it yet <br>
 <br>
[Outro] <br>
Bones... <br>
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
  padding-left: 30rem;
}

#name_cover {
  background-color: black;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  width: 135%;
}



#cover {
  width: 650px;
  height: 250px;
  padding-right: 25rem;
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
