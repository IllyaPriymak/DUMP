<template lang="html">
  <div>
    <div id="lyrics">
      <div id="name_cover">
        <h1 id="track_name"><router-link id="artist_link" to="/track">
        6LACK - PRBLMS</router-link></h1>
        <img id="cover" src="images/dc1edb88717eb88883b219959accc6a1.jpg" alt="prblms">
        <p id="discription">Produced: by NOVA (Soundsbynova) <br>
          Album: FREE 6LACK
        </p>
        <br>
      </div>
      <div id="lyrics_content">
        <p id="text">
          <span id="word">LYRICS:</span><br>
          [Intro] <br>
Yeah, yeah <br>
Yeah, yeah <br>
Yeah, yeah <br>
Alright <br>
 <br>
[Verse 1] <br>
And she said... “You a goddamn lie” <br>
I ain't mean to say that shit, girl, I was goddamn high <br>
So we left the crib now we in the goddamn ride <br>
She lookin' goddamn fine <br>
I wanted a bitch who was down to Earth <br>
But she want the goddamn sky, uh <br>
List of my problems <br>
Got this one on my line that won't stop fucking callin' <br>
It's crazy I made her that way <br>
Every time I see her out, I see the hate in her face <br>
Like why you do that? <br>
Tell her you love her when next week you just want your space <br>
Why you do, why you do that? <br>
Tell her you want her but next week you do your own thing <br>
Why you do, why you do that? <br>
I can't explain it but just know it working for me <br>
She text me “I hate you, I hate you, I hate you, I hate you” <br>
But how the fuck can you hate me? <br>
When I ain't did shit, but be the real thang <br>
She know I'm the real, that'll never change <br>
I never been the one to try to explain <br>
While you catch them feels I'ma sip on this drank, it's easing my brain <br>
 <br>
[Chorus] <br>
I got real shit to stress about, girl, I ain't worried 'bout shit <br>
('Bout shit) <br>
Remember that I tried to build ya, now I ain't worried 'bout shit <br>
I got real shit to stress about, girl, I ain't worried 'bout shit <br>
('Bout shit) <br>
Remember that I tried to build ya, now I ain't worried 'bout shit <br>
So I found me a new thang, I'm not as lost as you think <br>
Got plenty queens in my hometown, all they need is drank and that dank <br>
So I found me a new thang, I'm not as lost as you think <br>
Got plenty queens in my hometown, all they need is drank and that dank <br>
 <br>
[Verse 2] <br>
Now I'm like <br>
It's a goddamn shame <br>
We done crashed, we done burned <br>
But baby you the goddamn blame <br>
See I wanted love but you wanted goddamn fame <br>
Every goddamn thang <br>
I wanted a bitch who was on the move <br>
But you want to goddamn lay <br>
Uh, list of my problems <br>
Got this one in my bed and she just wants to sleep <br>
Fucking up all of the sheets <br>
She only wake up to eat <br>
Do this shit every week <br>
Like, why you do that? <br>
Crying you want to be great, but sleepin' until the next day <br>
Why you do that? <br>
Don't got that much in the bank, we go out she order the steak <br>
Why you do, why you do that? <br>
She can't explain it but just know it working for her <br>
She claiming she down on her luck but really she don't give a fuck <br>
And I cannot make this shit up <br>
And I ain't did shit but be the real thang <br>
She know I'm the real, that'll never change <br>
I won't be the one to try to explain <br>
While you catch them feels, I'ma sip on this drank, it's easing the pain <br>
 <br>
[Chorus] <br>
I got real shit to stress about, girl, I ain't worried 'bout shit <br>
('Bout shit) <br>
Remember that I tried to build ya, now I ain't worried 'bout shit <br>
I got real shit to stress about, girl, I ain't worried 'bout shit <br>
('Bout shit) <br>
Remember that I tried to build ya, now I ain't worried 'bout shit <br>
So I found me a new thang, I'm not as lost as you think <br>
Got plenty queens in my hometown, all they need is drank and that dank <br>
So I found me a new thang, I'm not as lost as you think <br>
Got plenty queens in my hometown, all they need is drank and that dank <br>
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
