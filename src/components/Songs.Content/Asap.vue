<template lang="html">
  <div>
    <div id="lyrics">
      <div id="name_cover">
        <h1 id="track_name"><router-link id="artist_link" to="/track">
        Asap Rocky - LSD</router-link></h1>
        <img id="cover" src="images/asap-y-lsd-cover.jpg" alt="november">
        <p id="discription">Produced: by Hector Delgado, A$AP Rocky, FnZ & Jim Jonsin <br>
          Album: AT.LONG.LAST.A$AP</p>
        <br>
      </div>
      <div id="lyrics_content">
        <p id="text">
          <span id="word">LYRICS:</span><br>
          [Verse]<br>
I know I dream about her all day <br>
I think about her with her clothes off <br>
I'm ridin' 'round with my system bumpin' LSD <br>
I look for ways to say "I love you" <br>
But I ain't into makin' love songs <br>
Baby, I'm just rappin' to this LSD <br>
She ain't a stranger to the city life <br>
I introduced her to this hippy life <br>
We make love under pretty lights, LSD (Acid)<br>
I get a feelin' it's a trippy night <br>
Them other drugs just don't fit me right <br>
Girl, I really fuckin' want love, sex, dream <br>
Another quarter to the face system <br>
Make no mistakes, it's all, a leap of faith for love <br>
 It takes a place in, feelin' that you crave doin' love, sex, dreams <br>
<br>
[Chorus]<br>
It started in Hollywood <br>
Dreamin' of sharin' love <br>
My tongue at a loss for words <br>
Cause my feelings just said it all <br>
Party just started up Dreamin' of sharin' worlds  <br>
Held this feeling for way too long Said, "I really wanna let it go" <br>
<br>
[Bridge 1]<br>
I've been gettin' fly because the gimmick's so dope I've been getting high cause I  figured Lord told me <br>
I've been drinking, driving, now we'll never go home <br>
I gon' stay in doubt because the weather's so cold, oh <br>
 <br>
[Bridge 2]<br>
Feeling low sometimes when the light shines down <br>
Makes me high <br>
Can you feel it?<br>
Can you feel it?<br>
Feeling low sometimes when the light shines down <br>
Makes me high <br>
Can you feel it?<br>
Can you feel it?<br>
<br>
[Chorus]<br>
It started in Hollywood <br>
Duh, duh-duh <br>
Dreamin' of sharin' love <br>
Duh, duh-duh <br>
My tongue at a loss for words <br>
Cause my feelings just said it all <br>
<br>
[Outro]<br>
I look for ways to say, "I love you"<br>
But I ain't into makin' love songs <br>
Baby, I'm just rappin' to this LSD <br>
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
  width: 70%;
  /* font-family: 'Concert One', cursive; */
  /* font-family: 'Fredoka One', cursive; */
  font-family: 'Sawarabi Mincho', sans-serif;
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
  background-color: #165a6e;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  width: 100%;
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
