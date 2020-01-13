<template lang="html">
  <div>
    <div id="lyrics">
      <div id="name_cover">
        <h1 id="track_name"><router-link id="artist_link" to="/track">
        Slowthai - Jiggle</router-link></h1>
        <img id="cover" src="images/b5f31047498eb1e14a2534055806e94b.500x500x1.jpg" alt="jiggle">
        <p id="discription">Produced: by slowthai <br>
          Album: Jiggle</p>
        <br>
      </div>
      <div id="lyrics_content">
        <p id="text">
          <span id="word">LYRICS:</span><br>
          [Intro]<br>
   <br>
Slow it down  <br>
Slow it down  <br>
 и <br>
[Verse 1]  <br>
War with a dog, you’re a kitten  <br>
Your flows catted, my flow isn’t  <br>
Roll to the rave, what a mission  <br>
Ordered a taxi, everyones sniffin'  <br>
Barely stepped foot out the kitchen  <br>
Curtain twitchin’  <br>
Hop in the cab, tell the lads to put quids in  <br>
Feeling great, nothing great about Britain  <br>
Money made, made me change my opinion  <br>

 <br>
[Chorus]  <br>
No, that’s a L.I.E  <br>
Come to my ends, you must be crazy  <br>
Get pied no lie, you will D.I.E  <br>
Just a likkle man, likkle C.I.D  <br>
No, that’s an L.I.E  <br>
Come to my ends, you must be crazy  <br>
Get pied no lie, you will D.I.E  <br>
Just a likkle man, likkle C.I.D  <br>

 <br>
[Bridge]  <br>
That’s a L.I.E  <br>
Come to my ends, you must be crazy  <br>
Get pied no lie, you will D.I.E  <br>
Just a likkle man, likkle C.I.D  <br>
No, that’s a L.I.E  <br>
Come to my ends, you must be crazy  <br>
Get pied no lie, you will D.I.E  <br>
Just a likkle man, likkle  <br>

 <br>
[Verse 2]  <br>
Them man there laggin’  <br>
We do this, don’t need no backin’  <br>
Back in the day I was a gyalis  <br>
Now I’m on a vibe with my wife in a palace  <br>
Dressed in Palace  <br>
Smokin’ a zooby, no chalice  <br>
Go to the chippy, get a Mars Bar battered  <br>
Step in my way and get your jaw side shattered, pissed  <br>
I don’t wanna deal with none of this madness  <br>
Slave to the game getting chased, never captured  <br>
Hopped the fence, feeling tense  <br>
Put my life on the line for my rent, and expense  <br>
Had to dig myself out a trench, endz  <br>
I don’t deal with no tens  <br>
Two bills a z, yeah  <br>
Two bills a z, yeah  <br>
Two bills a z  <br>
Two bills a z, yeah  <br>
Two bills a z  <br>
 <br>
[Chorus]  <br>
No, that’s a L.I.E  <br>
Come to my ends, you must be crazy  <br>
Get pied no lie, you will D.I.E  <br>
Just a likkle man, likkle C.I.D  <br>
No, that’s a L.I.E  <br>
Come to my ends… you must be crazy  <br>
Get pied no lie, you will D.I.E  <br>
Just a likkle man... yah  <br>
 <br>
[Verse 3]  <br>
Jiggle…  <br>
Come like Malcom In The Middle  <br>
Leave Malcolm  <br>
You know the steez, so you dunno the outcome  <br>
I think I need some talcum  <br>
Swoop in like a falcon  <br>
Can’t stand their lies so I can’t stand around them  <br>
I only trust my bros I can count on  <br>
Most people wet they need tampons  <br>
Hop out the whip then it’s hands on  <br>
Asking me where my dank’s from  <br>
Cali pack, it’s not from Dam son  <br>
Dark alley like my name was Danson  <br>
It’s the Jiggle  <br>
You get robbed like Lidl  <br>

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
  background-color: #bfbab7;
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
