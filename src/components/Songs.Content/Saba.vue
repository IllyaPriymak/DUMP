<template lang="html">
  <div>
    <div id="lyrics">
      <div id="name_cover">
        <h1 id="track_name"><router-link id="artist_link" to="/track">
        Saba - Life</router-link></h1>
        <img id="cover" src="images/care-for-me.jpg" alt="life">
        <p id="discription">Produced: by Saba, daedaePIVOT & Daoud <br>
          Album: CARE FOR ME</p>
        <br>
      </div>
      <div id="lyrics_content">
        <p id="text">
          <span id="word">LYRICS:</span><br>
          [Verse 1] <br>
I got angels runnin' 'way, I got demons huntin' me <br>
I know 'Pac was 25, I know Jesus 33 <br>
I tell Death to keep a distance, I think he obsessed with me <br>
I say, "God, that's a woman," I know she would die for me <br>
They want a barcode on my wrist (barcode on my wrist) <br>
To auction off the kids <br>
That don't fit their description of a utopia (black) <br>
Like a problem won't exist if I just don't exist <br>
If I grew up without a single pot to piss in <br>
Pardon me for ventin' <br>
Congress got the nerve to call theyself religious <br>
Rich just gettin' richer, we just tryna live our life <br>
 <br>
[Chorus] <br>
Momma mixed the vodka with the Sprite <br>
They killed my cousin with a pocket knife <br>
While my uncle on the phone <br>
He was gone for more than half my life <br>
He got out a year and then he died <br>
I was honor roll, talking to my father on the phone <br>
Left the city when I was just four <br>
None of them will get along <br>
Momma beggin' him for winter coats <br>
I was chillin' with my nigga Spook now they tryna take his— <br>
 <br>
[Post-Chorus] <br>
Life don't mean shit to a nigga that ain't never had shit, yeah <br>
Light don't mean lit in the dark, fight don't mean fists, ooh <br>
Eyes don't see, eyes don't see, ice don't freeze <br>
Light don't leave, I don't mean lie to me <br>
 <br>
[Bridge] <br>
Tell me it'll be okay, tell me happier days <br>
Tell me that she my bae, that I won't be alone <br>
Tell 'em I'll be okay when he ask, "How's my day?" <br>
Tell 'em that we the same, tell em' that we not safe <br>
 <br>
[Verse 2] <br>
I got my grandaddy soul, I'm at war, that's on my mind <br>
I seen Walter body cold, wish I could switch it with mine <br>
I'm not worried 'bout no rap shit, distractions or waste-of-times <br>
I still go to social functions even though I'm so anti— <br>
No, I'm no Rihanna, the court gonna throw it like Donovan <br>
Down a bit, I just been modelin' my whole career <br>
As if 'Pac was here, studio monitors shakin' <br>
I raise the apartments, I'm Bono with profit <br>
I made what I made in allotted <br>
Amount of time, the same amount of time you was watchin' <br>
So stop comparing me to people; no, I am not them <br>
A lot of people dream until they shit'll get—*gunshot* <br>
 <br>
[Chorus] <br>
That's life, momma mixed the vodka with the Sprite <br>
They killed my cousin with a pocket knife <br>
While my uncle on the phone <br>
He was gone for more than half my life <br>
He got out a year and then he died <br>
I was honor roll, talking to my father on the phone <br>
Left the city when I was just four <br>
None of them will get along <br>
Momma beggin' him for winter coats <br>
I was chillin' with my nigga Spook, now they tryna take his life <br>
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
  background-color: #3d3d3d;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  width: 155%;
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
