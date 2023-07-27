<template>
  <div class="body">
    
    
    <div class="hero">
      <div class="brand">
        <div>EKER<span class="it">IT/&gt;</span></div>
      </div>

      <div class="headline">
        <h2>Your complete IT-solution</h2>
      </div>
    </div>

    <div class="wrapper">
      <span class="first-text">WE CAN </span>
      <ul class="sec-texts">
        <li><span>Frontend</span></li>
        <li><span>Backend</span></li>
        <li><span>Database</span></li>
        <li><span>IT-Consulting</span></li>
        <li><span>Linux</span></li>
      </ul>
    </div>

    <div class="Btn">
      <button>See What we can offer you</button>
    </div>
    <div class="view2" >xx</div>
  </div>
</template>

<script></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

.body {
  display: block;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background: #000;
  margin-right: 0;
}
.viwe2{
  background-color: #fff;
  width: 200px;
  height: 100vh;
}
.Btn {
  margin: 0 12vw;
  width: 25vw;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(
    to right,
    #77530a,
    #ffd277,
    #77530a,
    #77530a,
    #ffd277,
    #77530a
  );
  background-size: 250%;
  background-position: left;
  color: #ffd277;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 1s;
  overflow: hidden;
}

.Btn::before {
  position: absolute;
  content: "See What we can offer you";
  color: #ffd277;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 97%;
  height: 90%;
  border-radius: 8px;
  transition-duration: 1s;
  background-color: rgba(0, 0, 0, 0.842);
  background-size: 200%;
}

.Btn:hover {
  background-position: right;
  transition-duration: 1s;
}

.Btn:hover::before {
  background-position: right;
  transition-duration: 1s;
}

.Btn:active {
  transform: scale(0.95);
}

.wrapper {
  display: flex;
  width: 65vw;
  margin: 10vh 12vw;

  background: #000;
}
.hero {
  font-size: 2rem;
  margin: 20vh 12vw 0 12vw;
}
.brand {
  font-size: 3rem;
  text-transform: uppercase;
  color: silver;
  align-items: center;
  width: fit-content;
}
.it {
  color: rgb(199, 116, 116);
  padding-left: 6px;
  font-weight: 700;
}

.headline h2 {
  display: inline-block;
  margin: 0;
  font-size: 2rem;
  width: fit-content;
  color: silver;
}

.wrapper .first-text {
  font-size: 3rem;
  color: silver;
}

.wrapper .sec-texts {
  height: 85px;
  line-height: 88px;
  overflow: hidden;
}

.sec-texts li {
  position: relative;
  top: 0;
  font-size: 3rem;
  color: whitesmoke;
  list-style: none;
  text-shadow: 0 0 10px rgb(0, 2, 14);
  animation: slide 12s steps(4) infinite, colorful 6s infinite;
}

@keyframes slide {
  100% {
    top: -360px;
  }
}

@keyframes colorful {
  100% {
    filter: hue-rotate(360deg);
  }
}

.sec-texts li span {
  position: relative;
}

.sec-texts li span::before {
  content: "";
  position: absolute;
  left: 0;
  width: 400px;
  height: 90px;
  background: #000;
  border-left: 2px solid #0ef;
  animation: typing 1.5s steps(10) infinite alternate;
}

@keyframes typing {
  100% {
    left: 100%;
    margin: 0 -35px 0 35px;
  }
}
</style>
