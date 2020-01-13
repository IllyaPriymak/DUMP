<template lang="html">
  <div>
    <div id="lyrics">
      <div id="name_cover">
        <h1 id="track_name"><router-link id="artist_link" to="/nartist">
        Nirvana - Smells Like Teen Spirit</router-link></h1>
        <img id="cover" src="images/274px-Smells_Like_Teen_Spirit.jpg" alt="smells">
        <p id="discription">Produced: by Nirvana & Butch Vig <br>
          Album: Nevermind</p>
        <br>
      </div>
      <div id="lyrics_content">
        <p id="text">
          <span id="word">LYRICS:</span><br>
          [Verse 1] <br>
Load up on guns, bring your friends <br>
It's fun to lose and to pretend <br>
She's over-bored and self-assured <br>
Oh no, I know a dirty word <br>
 <br>
[Pre-Chorus] <br>
Hello, hello, hello, how low <br>
Hello, hello, hello, how low <br>
Hello, hello, hello, how low <br>
Hello, hello, hello <br>
 <br>
[Chorus] <br>
With the lights out, it's less dangerous <br>
Here we are now, entertain us <br>
I feel stupid and contagious <br>
Here we are now, entertain us <br>
A mulatto, an albino <br>
A mosquito, my libido <br>
 <br>
[Post-Chorus] <br>
Yeah, hey, yay <br>
 <br>
[Verse 2] <br>
I'm worse at what I do best <br>
And for this gift, I feel blessed <br>
Our little group has always been <br>
And always will until the end <br>
 <br>
[Pre-Chorus] <br>
Hello, hello, hello, how low <br>
Hello, hello, hello, how low <br>
Hello, hello, hello, how low <br>
Hello, hello, hello <br>
 <br>
[Chorus] <br>
With the lights out, it's less dangerous <br>
Here we are now, entertain us <br>
I feel stupid and contagious <br>
Here we are now, entertain us <br>
A mulatto, an Albino <br>
A mosquito, my libido <br>
 <br>
[Post-Chorus] <br>
Yeah, hey, yay <br>
 <br>
[Guitar Solo] <br>
 <br>
[Verse 3] <br>
And I forget just why I taste <br>
Oh yeah, I guess it makes me smile <br>
I found it hard, it's hard to find <br>
Oh well, whatever, nevermind <br>
 <br>
[Pre-Chorus] <br>
Hello, hello, hello, how low <br>
Hello, hello, hello, how low <br>
Hello, hello, hello, how low <br>
Hello, hello, hello <br>
 <br>
[Chorus] <br>
With the lights out, it's less dangerous <br>
Here we are now, entertain us <br>
I feel stupid and contagious <br>
Here we are now, entertain us <br>
A mulatto, an albino <br>
A mosquito, my libido <br>
 <br>
[Outro] <br>
A denial, a denial, a denial, a denial, a denial <br>
A denial, a denial, a denial, a denial <br>

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
  background-color: #a2c1bb;
  box-shadow: 0 0 10px rgba(0,0,0,0.4);
  width: 110%;
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
