<template lang="html">
  <div>
    <div id="lyrics">
      <div id="name_cover">
        <h1 id="track_name">The Drums - Money</h1>
        <img id="cover" src="images/thedrums-money.jpeg" alt="money">
        <p id="discription">Produced: by Connor Hanwick, Jacob Graham & Jonny Pierce <br>
          Album Portamento
        </p>
        <br>
      </div>
      <div id="lyrics_content">
        <p id="text">
          <span id="word">LYRICS:</span><br>
          [Verse 1] <br>
Before I die I'd like to do something nice <br>
Take my hand and I'll take it for a ride <br>
You hit me yesterday because I made you cry <br>
So before we die let me do something nice <br>
 <br>
[Chorus] <br>
I want to buy you something <br>
But I don't have any money <br>
No, I don't have any money <br>
 <br>
[Verse 2] <br>
And if I had a car I would trade in my car <br>
If I had a gun I would trade in my gun <br>
Honey, we ran from the country and we rushed to the city <br>
And now there's nothing to be done <br>
There's nothing to be done <br>
 <br>
[Chorus] <br>
I want to buy you something <br>
But I don't have any money <br>
No, I don't have any money <br>
           <br>
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
  padding-right: 30rem;
}

#name_cover {
  background-color: #220e0f;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  width: 125%;
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
