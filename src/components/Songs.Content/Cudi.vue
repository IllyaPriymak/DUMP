<template lang="html">
  <div>
    <div id="lyrics">
      <div id="name_cover">
        <h1 id="track_name">Kid Cudi - Man on the Moon</h1>
        <img id="cover" src="images/a9c1e229fe264ff9951e4587690f34c5.jpg" alt="moon">
        <p id="discription">Produced: by Nosaj Thing <br>
          Album: A Kid Named Cudi</p>
        <br>
      </div>
      <div id="lyrics_content">
        <p id="text">
          <span id="word">LYRICS:</span><br>
          [Intro] <br>
Alright, run it <br>
I never gave a fuck <br>
I never gave a fuck about what niggas thought about me <br>
I mean, I did, but like, fuck it, you know what I'm saying? <br>
You gon' love me, man <br>
You gon' love me, man <br>
 <br>
[Verse 1] <br>
They can't comprehend <br>
Or even come close to understanding him <br>
I guess if I was boring they would love me more <br>
Guess if I was simple in the mind, everything would be fine <br>
Maybe if I was a jerk to girls <br>
Instead of being nice and speaking kind words <br>
Then maybe it would be OK to say then <br>
I wasn't a good guy to begin with <br>
 <br>
[Pre-Chorus 1] <br>
But my mind is all crazy, crazy, crazy, crazy <br>
They got me thinking I ain't human <br>
Like I came in from above, above, above, above <br>
Feeling like an airplane in the sky <br>
But then they say I'm crazy, crazy, crazy, crazy <br>
They got me thinking I ain't human <br>
Like I came in from above, above, above, above <br>
Feeling like a bird sitting high, high <br>
 <br>
[Chorus] <br>
I be that man on the moon, I'm that man on the moon <br>
And I'mma do what I do, so do you, hey-hey <br>
I be posted with my blunt and a brew, my dude <br>
I'm that man on the moon, I'm up-up on the moon <br>
 <br>
[Interlude] <br>
It's like, I'mma play all my stuff for everybody <br>
And you know, and all my people they give me feedback <br>
You know, and they'll be like"Yo, yo, why your shit sound so different?" <br>
You know what I'm saying? <br>
"Why your shit, like on another level-- <br>
Why's, why's it sound so different?" <br>
Like that's a bad thing <br>
And I be like <br>
"Why not? Nigga" <br>
 <br>
[Verse 2] <br>
Close my eyes, high in the dark <br>
It's a curtain call; come one, come all <br>
All I do is try to make it simple <br>
The ones that make it complicated <br>
Never get congratulated <br>
I'm something different, all aspects <br>
Don't want a woman just to love her assets <br>
I'll still wife her up, even with her flat chest <br>
The type to get hurt, but that's the past tense <br>
 <br>
[Pre-Chorus 2] <br>
My mind is all hazy, hazy, hazy, hazy <br>
I be thinkin' that I'm wrong <br>
'Cause they used to call me lame, lame, lame, lame <br>
My swag was a little different <br>
But then my mind is hazy, hazy, hazy, hazy <br>
I be thinkin' that I'm wrong <br>
But they the ones who lame, lame, lame, lame <br>
I got the last laugh, nigga <br>
 <br>
[Chorus] <br>
I be that man on the moon, I'm that man on the moon <br>
And I'mma do what I do, so do you, hey-hey <br>
I be posted with my blunt and a brew, my dude <br>
I'm that man on the moon, I'm up-up on the moon <br>
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
  width: 105%;
}



#cover {
  width: 650px;
  height: 250px;
  padding-right: 25rem;
}
#lyrics_content {
  color: white;

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
