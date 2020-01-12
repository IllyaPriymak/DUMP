<template lang="html">
  <div>
    <div id="lyrics">
      <div id="name_cover">
        <h1 id="track_name">Queen - Another One Bites the Dust</h1>
        <img id="cover" src="images/R-706853-1510235933-2499.jpeg.jpg" alt="dust">
        <p id="discription">Produced: by Reinhold Mack, Josh MacRae & Queen <br>
          Album: The Game</p>
        <br>
      </div>
      <div id="lyrics_content">
        LYRICS:
        <p id="text">
          [Intro] <br>
Ooh, let's go! <br>
 <br>
[Verse 1] <br>
Steve walks warily down the street <br>
With the brim pulled way down low <br>
Ain't no sound but the sound of his feet <br>
Machine guns ready to go <br>
Are you ready? Hey, are you ready for this? <br>
Are you hanging on the edge of your seat? <br>
Out of the doorway the bullets rip <br>
To the sound of the beat, yeah <br>
 <br>
[Chorus] <br>
Another one bites the dust <br>
Another one bites the dust <br>
And another one gone, and another one gone <br>
Another one bites the dust, yeah <br>
Hey, I'm gonna get you too <br>
Another one bites the dust <br>
 <br>
[Verse 2] <br>
How do you think I'm going to get along <br>
Without you, when you're gone <br>
You took me for everything that I had <br>
And kicked me out on my own <br>
Are you happy, are you satisfied? <br>
How long can you stand the heat? <br>
Out of the doorway the bullets rip <br>
To the sound of the beat <br>
Look out <br>
 <br>
[Chorus] <br>
Another one bites the dust <br>
Another one bites the dust <br>
And another one gone, and another one gone <br>
Another one bites the dust <br>
Hey, I'm gonna get you, too <br>
Another one bites the dust <br>
 <br>
 <br>
[Bridge] <br>
Hey <br>
Oh, take it <br>
Bite the dust, hey <br>
Another one bites the dust <br>
Another one bites the dust, ow <br>
Another one bites the dust, hey hey <br>
Another one bites the dust, hey-eh-eh <br>
Ooh <br>
 <br>
[Verse 3] <br>
There are plenty of ways you can hurt a man <br>
And bring him to the ground <br>
You can beat him, you can cheat him, you can treat him bad <br>
And leave him when he's down, yeah <br>
But I'm ready, yes I'm ready for you <br>
I'm standing on my own two feet <br>
Out of the doorway the bullets rip <br>
Repeating the sound of the beat <br>
Oh yeah <br>
 <br>
[Chorus] <br>
Another one bites the dust <br>
Another one bites the dust <br>
And another one gone, and another one gone <br>
Another one bites the dust, yeah <br>
Hey, I'm gonna get you, too <br>
Another one bites the dust <br>
 <br>
 <br>
[Outro] <br>
Shoot out <br>
Ay-yeah <br>
Alright <br>
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
  width: 65%;
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
  background-color: #545686;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
}



#cover {
  width: 650px;
  height: 250px;
  padding-left: 25rem;
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
