<template lang="html">
  <div>
    <div id="lyrics">
      <div id="name_cover">
        <h1 id="track_name"><router-link id="artist_link" to="/track">
        Travis Scott - goosedumps</router-link></h1>
        <img id="cover" src="images/1567438285_6a1753313ed6cf3515b78ae38e1cdaa1.jpg" alt="goos">
        <p id="discription">Featuring: Kendrick Lamar <br>
          Produced: by Yung Exclusive, CuBeatz & Cardo <br>
          Album: Birds in the Trap Sing McKnight</p>
        <br>
      </div>
      <div id="lyrics_content">
        <p id="text">
          <span id="word">LYRICS:</span><br>
          [Intro: Travis Scott] <br>
Yeah <br>
7:30 in the night, yeah <br>
Ooh-oooh, ooh <br>
 <br>
[Chorus: Travis Scott] <br>
I get those goosebumps every time, yeah, you come around, yeah <br>
You ease my mind, you make everything feel fine <br>
Worried 'bout those comments <br>
I'm way too numb, yeah, it's way too dumb, yeah <br>
I get those goosebumps every time, I need the Heimlich <br>
Throw that to the side, yeah <br>
I get those goosebumps every time, yeah <br>
When you're not around (Straight up) <br>
When you throw that to the side, yeah (It's lit) <br>
I get those goosebumps every time, yeah <br>
 <br>
[Verse 1: Travis Scott] <br>
7-1-3 <br>
Through the 2-8-1, yeah, I'm ridin', why they on me? <br>
Why they on me? I'm flyin', sippin' low-key <br>
I'm sippin' low-key in Onyx, rider, rider <br>
When I'm pullin' up right beside ya <br>
Pop star, lil' Mariah <br>
When I text a cute game, wildness <br>
Throw a stack on the Bible <br>
Never Snapchat or took molly <br>
She fall through plenty, her and all her ginnies, yeah <br>
We at the top floor, right there off Doheny, yeah <br>
Oh no, I can't fuck with y'all <br>
Yeah, when I'm with my squad I cannot do no wrong <br>
Yeah, saucin' in the city, don't get misinformed <br>
Yeah, they gon' pull up on you (Brr, brr, brr) <br>
Yeah, we gon' do some things, some things you can't relate <br>
Yeah, 'cause we from a place, a place you cannot stay <br>
Oh, you can't go, oh, I don't know <br>
Oh, back the fuck up off me (Brr, brr, brr) <br>
 <br>
[Chorus: Travis Scott] <br>
I get those goosebumps every time, yeah, you come around, yeah <br>
You ease my mind, you make everything feel fine <br>
Worried 'bout those comments <br>
I'm way too numb, yeah, it's way too dumb, yeah <br>
I get those goosebumps every time, I need the Heimlich <br>
Throw that to the side, yeah <br>
I get those goosebumps every time, yeah <br>
When you're not around <br>
When you throw that to the side, yeah <br>
I get those goosebumps every time <br>
 <br>
[Verse 2: Kendrick Lamar] <br>
I want to press my like, yeah, I wanna press my <br>
I want a green light, I wanna be like <br>
I wanna press my line, yeah <br>
I wanna take that ride, yeah <br>
I'm gonna press my line <br>
I want a green light, I wanna be like, I wanna press my— <br>
Mama, dear, spare your feelings <br>
I'm relivin' moments, peeling more residual <br>
(I can) buy the building, burn the building <br>
Take your bitch, rebuild the building just to fuck some more <br>
(I can) justify my love for you <br>
And touch the sky for God to stop, debating war <br>
Put the pussy on a pedestal (Ayy) <br>
Put the pussy on a high horse <br>
That pussy to die for <br>
That pussy to die for <br>
Peter, piper, picked a pepper <br>
So I could pick your brain and put your heart together <br>
We depart the shady parts and party hard <br>
The diamonds yours, the coupe forever <br>
My best shots might shoot forever like (Brr) <br>
 <br>
[Chorus: Travis Scott] <br>
I get those goosebumps every time, yeah, you come around, yeah <br>
You ease my mind, you make everything feel fine <br>
Worried 'bout those comments <br>
I'm way too numb, yeah, it's way too dumb, yeah <br>
I get those goosebumps every time, I need the Heimlich <br>
Throw that to the side, yeah <br>
I get those goosebumps every time, yeah <br>
When you're not around <br>
When you throw that to the side, yeah <br>
I get those goosebumps every time <br>
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
  background-color: #906d67;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  width: 110%;
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
