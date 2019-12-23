<template lang="html">
  <div>
    <div id="">
      <h3>DUMP.</h3>
    </div>

    <div class="social_icon">
      <h3>If you whant contact me: </h3>
      <div class="">
        <button class="btn_footer" onclick=" window.open('https://lovkille@gmail.com','_blank')">
          <img id="icon" src="images/gmail-30-722694.png" alt="gmail">
        </button>
      </div>
      <div class="">
        <button class="btn_footer" onclick=" window.open('https://www.instagram.com/illiyhaaa/?hl=ru','_blank')">
          <img id="icon" src="images/philipp-dittberner-instagram-icon.png" alt="inst">
        </button>
      </div>
      <div class="">
        <button class="btn_footer" onclick=" window.open('https://soundcloud.com/lovkille','_blank')">
          <img id="icon" src="images/soundcloud-icon-1.svg" alt="sc">
        </button>
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
  background-color: black;
  position: relative;
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
}

.btn_footer {
  background-color: black;
}


.social_icon {
  display: flex;
  flex-direction: row;
}

#icon {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-right: 10px;
}

h3 {
  color: #5c5cd6;
}

</style>
