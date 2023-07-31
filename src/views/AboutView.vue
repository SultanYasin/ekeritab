<template>
  <div class="container">
    <div class="img">
      <img src="../assets/server.jpg" alt="server-room" />
    </div>
    <div class="txt">
      <p>
        Ekerit AB är ett konsultföretag som specialiserar sig på
        dokumenthantering. Företaget grundades 2016 och har sitt huvudkontor i
        Värnamo. Ekerit AB har ett team av erfarna konsulter som hjälper kunder
        att utforska och implementera dokumenthanteringssystem. Företaget
        erbjuder en mängd olika tjänster, inklusive: Utformning och utveckling
        av dokumenthanteringslösningar Implementering och underhåll av
        dokumenthanteringssystem Utbildning av användare i
        dokumenthanteringssystem Support för dokumenthanteringssystem
      </p>
      <button>Contact Us</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 90vh;
  overflow: hidden;
  background: linear-gradient(to right,#010109 ,#000000,);
  box-shadow: 5px 10px 27px 28px rgba(0, 0, 0, 0.62);
  -webkit-box-shadow: 5px 10px 27px 28px rgba(0, 0, 0, 0.62);
  -moz-box-shadow: 5px 10px 27px 28px rgba(0, 0, 0, 0.62);
}

.img {
  max-width: 65%; /* Image takes 65% width */
}
img {
  width: 65vw;
  height: 80vh;
}

.txt {
  max-width: 35%;
  padding: 20px;
  color: #fff;
  background: #000;
}

p {
  font-size: 16px;
  line-height: 1.6;
}

button {
  background-color: #fff; /* Button background color is white */
  color: #000; /* Button text color is black */
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
}
</style>
