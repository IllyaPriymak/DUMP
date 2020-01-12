<template lang="html">
  <div>
    <div id="lyrics">
      <div id="name_cover">
        <h1 id="track_name">Mac Miller - Dang! (feat. Anderson .Paak)</h1>
        <img id="cover" src="images/m1000x1000.jpeg" alt="bang">
        <p id="discription">Produced: by Nineteen85 <br>
          Album: Views<br></p>
        <br>
      </div>
      <div id="lyrics_content">
        <p id="text">
          <span id="word">LYRICS:</span><br>
          [Chorus: Anderson .Paak]<br>
I can't keep on losing you over complications <br>
Gone too soon, wait! We was just hangin' <br>
I can't seem to hold onto, dang <br>
The people that know me best <br>
The key that I won't forget, too soon <br>
I can't keep on losing you, you, you, you, you, you <br>
I can't keep on losing you, you, you, you, you, you <br>
 <br>
[Verse 1: Mac Miller & Anderson .Paak] <br>
Yeah, yeah, yeah <br>
How many mistakes do it take 'til you leave <br>
When I'm left with my hand on my face all red <br>
In the face looking at you like ("Wait!") <br>
I know I ain't a saint, if it ain't too late, well... <br>
(I can't keep on losing you) I run away so fast <br>
But my heart like gold, but it break like glass <br>
Know my shit get old when I act so young <br>
Baby you so cold, never have no sun <br>
You don't wanna grow up, yeah, that shit no fun <br>
So when I get home, I'mma give you some <br>
Make you feel like woo when I hit that drum <br>
Yeah the dick ain't free, I don't give no fucks <br>
Yeah it's complicated, got you frustrated <br>
Get home late and you don't trust me, baby <br>
You way too drunk, you don't know what I'm saying <br>
You can drive my car, don't drive me crazy <br>
Complicated, got you frustrated <br>
Every single night, I keep you waiting <br>
You say you don't care, is what you saying <br>
We both know that's some bullshit <br>
Okay, we be fighting, we be reuniting <br>
Kiss me, touch me, tease me, me excited <br>
God, the devil, who is who? <br>
Tryna get through to you because... <br>
 <br>
[Chorus: Anderson .Paak] <br>
I can't keep on losing you over complications <br>
Gone too soon, wait! We was just hangin' <br>
I guess I need to hold onto, dang <br>
The people that know me best <br>
The key that I won't forget, too soon <br>
I can't keep on losing you <br>
 <br>
[Post-Chorus: Mac Miller] <br>
Can't keep losing you, I can't keep losing you <br>
Can't keep losing you, I can't keep losing you <br>
Can't keep losing you, I can't keep losing you <br>
Can't keep losing you, I can't keep losing you <br>
 <br>
[Verse 2: Mac Miller] <br>
Well, you can't go away girl, I'mma need you <br>
Play your games like they my ticket to an Ivy league school <br>
Won't get Hall of Fame dick from a minor league dude <br>
I just eat pussy, other people need food <br>
Only got a little time and I ain't tryna spend it <br>
Arguing about who ain't giving who attention <br>
Starting up the engine, need to reboot <br>
I just eat pussy, other people need food <br>
And I use every bone in my body <br>
To keep on holding on to your trust <br>
I know you don't want nothin' to do with me <br>
But just one more time, let's make love <br>
One more time, it ain't much <br>
Fuck 'em all, let's be us, summer's soft sweetness <br>
Call late drunk, you hang up <br>
What a mess I made us, sense, I make none <br>
It's complicated, keeping me up late <br>
Can't concentrate, you're always on my brain <br>
If it's love, then why the fuck it come with pain? <br>
I just think that's some bullshit <br>
Okay, it seems inviting, trust me, she's a titan <br>
This week she like him, next week they fightin' <br>
Need protection, all your dresses bulletproof <br>
You're safe with me, girl <br>
 <br>
[Bridge: Anderson .Paak & Mac Miller] <br>
I can't keep on losing you <br>
Where the hell you going? <br>
Where you taking this trip to? <br>
Wait! <br>
Don't move, don't stay, too <br>
I can't keep on losing you <br>
Where the hell you going? <br>
Wait! <br>
Where the hell you going? <br>
 <br>
[Chorus: Anderson .Paak] <br>
I can't keep on losing you over complications <br>
Gone too soon, wait! We was just hangin' <br>
I guess I need to hold onto, dang <br>
The people that know me best <br>
The key that I won't forget, too soon <br>
I can't keep on losing you <br>
 <br>
[Post-Chorus: Mac Miller] <br>
Can't keep losing you, I can't keep losing you <br>
Can't keep losing you, I can't keep losing you <br>
Can't keep losing you, I can't keep losing you <br>
Can't keep losing you, I can't keep losing you <br>
Can't keep losing you, I can't keep losing you <br>
Can't keep losing you, I can't keep losing you <br>
Can't keep losing you, I can't keep losing you <br>
Can't keep losing you, I can't keep losing you <br>
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
  background-color: #ddc1c0;
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
