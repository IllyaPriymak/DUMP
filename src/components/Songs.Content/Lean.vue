<template lang="html">
  <div>
    <div id="lyrics">
      <div id="name_cover">
        <h1 id="track_name"><router-link id="artist_link" to="/track">
        Yung Lean - Hurt</router-link></h1>
        <img id="cover" src="images/Unknown_Death_2002.jpg" alt="hurt">
        <p id="discription">Produced: by Suicideyear <br>
          Album: Unknown Death 2002</p>
      </div>
      <div id="lyrics_content">
        <p id="text">
          <span id="word">LYRICS:</span><br>
          [Intro] <br>
What's up, what's up <br>
Suicideyear, ooh <br>
Sadboys <br>
 <br>
[Hook] <br>
Shawty I'ma do things that you ain't never did <br>
Finna wake up next to you in my crib <br>
'Cause I'ma make you hurt <br>
I'ma, I'ma make you hurt <br>
I'ma make you hurt <br>
I'ma, I'ma make you hurt <br>
Shawty I'ma do things that you ain't never did <br>
Finna wake up next to you in my crib <br>
'Cause I'ma make you hurt <br>
I'ma, I'ma make you hurt <br>
I'ma make you hurt <br>
I'ma, I'ma make you hurt <br>
 <br>
[Verse 1] <br>
Sadboys, we on deck <br>
Am I awake? I gotta check <br>
Went to sleep, never came back <br>
I'm the same guy smoking loud pack <br>
Iced out, right back <br>
PCP attack, 3D pills <br>
Hoes on my ball sack <br>
They don't know how to act <br>
High tech watch, high tech locked <br>
Broken skies, fantastic fox <br>
Got keys, but I'll never find the lock <br>
Emotionalboys we in the UFO <br>
Skies pink when I'm on ecstasy <br>
In Tokyo, playing Mario <br>
Sadboys blastin' your stereos <br>
Sucking on my nuts like pistachios <br>
Mixing champagne with Carpaccio <br>
Slangin' dough, hoe I'm in that polo <br>
Stacks of money, more for you <br>
Milkshakes with the crushed up oreos <br>
I'm in Italy, Rodeo <br>
Forgive me after my death, Caravaggio <br>
Louis duffle bag filled with heroin <br>
Louis goons who finna trip on LSD acid tabs, let 'em in <br>
Louis duffle bag filled with heroin <br>
Louis goons who finna trip on LSD acid tabs, let 'em in <br>
 <br>
[Hook] <br>
I'ma make you hurt <br>
I'ma, I'ma make you hurt <br>
I'ma make you hurt <br>
I'ma, I'ma make you hurt <br>
 <br>
[Verse 2] <br>
Bitch I light up the sky, call me Charmeleon <br>
My life's on the line <br>
I ain't Charmander, but I'm nearly on <br>
Clearly on drugs <br>
That will make you hear, clearly wrong <br>
Longer than my yearly bong hit <br>
Shawty thinks she got style <br>
Leandoer dresses slicker <br>
I'm so iced out that it's winter <br>
Destroy my stupid liver <br>
I be on that Bape shit, you rocking Quicksilver <br>
Never hesitate shit, to pull the trigger <br>
Luxurious steak before my dinner <br>
Throw bodies down the river <br>
Yeah, you get that picture <br>
Gold and silver 'round my finger <br>
Shawty on that West Side, she a gold digger <br>
Wake up and I'm a winner <br>
Showering in five star <br>
Hoe take a look in the mirror <br>
I'm on my grind like all the time <br>
Bitch I'm Murakami <br>
Shawty sucking on my pastrami, get that salami <br>
I'ma make you hurt <br>
I'ma make you hurt <br>
I'ma, I'ma make you hurt <br>
I'ma make you hurt <br>
 <br>
[Hook] <br>
Shawty I'ma do things you ain't never did <br>
Finna wake up next to you in my crib <br>
'Cause I'ma make you hurt <br>
I'ma, I'ma make you hurt <br>
I'ma make you hurt <br>
I'ma, I'ma make you hurt <br>
Shawty I'ma do things that you ain't never did <br>
Finna wake up next to you in my crib <br>
'Cause I'ma make you hurt <br>
I'ma, I'ma make you hurt <br>
I'ma make you hurt <br>
I'ma, I'ma make you hurt <br>
 <br>
[Outro] <br>
Louis duffle bag filled with heroin <br>
Louis Louis Louis duffle bag filled with heroin <br>
Louis Louis Louis duffle bag filled with heroin <br>
I'ma I'ma I'ma make you hurt <br>
I'ma make you hurt <br>
Sadboys <br>
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
  font-family: 'Sawarabi Mincho', sans-serif;
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
  background-color: #586a7b;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  width: 130%;
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
