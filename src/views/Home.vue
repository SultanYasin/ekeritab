<template>
  <div class="body">
    <div class="viwe1">
      <div class="hero">
        <div class="brand">
          <div>EKER<span class="it">IT</span> &nbsp;AB</div>
          <!--<div>EKER<span class="it">IT/&gt;</span></div> -->
        </div>

        <div class="headline">
          <!-- <h2>Your complete IT-solution</h2> -->
          <h2>{{ $t("Home.subTitle") }}</h2>
        </div>
      </div>

      <div class="wrapper">
        <span class="first-text">{{ $t("Home.heroMsg") }}</span>
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
    </div>

    <div class="viwe2">
      <img src="../assets/code11.jpg" alt="" srcset="" class="pc"/>
      <img src="../assets/bg.png" alt="" srcset="" class="mob"/>
    </div>
  </div>
</template>

<script>


export default {


  data() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");

.body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
  max-width: 100vw;
  background: linear-gradient(to right, #010109, #000000, #20202b);
  overflow-y: hidden;
}
/* #20202b */
.viwe1 {
  width: 63vw;
}

img {
  width: 100%;
  height: 100vh;
}
.mob{
  display: none;
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
  width: 40vw;
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
  padding-left: 6px;
  font-weight: 600;
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
  margin-right: -25px;
}
.wrapper {
  display: flex;
  text-align: center;
  align-items: center;
}

.wrapper .sec-texts {
  height: 90px;
  line-height: 90px;
  overflow: hidden;
}

.sec-texts li {
  position: relative;
  top: 0;
  font-size: 3rem;
  color: whitesmoke;
  list-style: none;
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
/* _______________________________________________________________________________________________________________________________________________________ */
@media only screen and (max-width: 821px) {
  .body {
    position: relative;
    background: #000;
    display: block;
    width: 100vw;
    min-height: 70vh;
    overflow: hidden;



  }

  .viwe1 {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 6vw;
    opacity: 1;
    z-index: 2;
    opacity: .6;
    background-color: #000;
    color: whitesmoke;

  }
  .pc{
    display: none;
  }

  .mob{
    display: flex;
    z-index: 1;


  }
  img {
    position: absolute;
    right: 0;
    width: 100vw;
    
    min-height: 90vh;
    top: 0;
    
  }


  .wrapper .first-text {
    font-size: 2rem;
    color: silver;

  }
  .wrapper {
    text-align: center;
    align-items: center;
    margin-left: 0;
    padding-left: 0;
    width: 100%;
  
  }

  .wrapper .sec-texts {
    height: 85px;
    line-height: 90px;
    overflow: hidden;
  }

  .sec-texts li {
    position: relative;
    top: 0;
    font-size: 2rem;
    color: whitesmoke;
    list-style: none;
    animation: slide 12s steps(4) infinite, colorful 6s infinite;
  }

  .hero {
  font-size: 2rem;
  margin: 5vh 12vw 0 12vw;
}
  .brand {
    font-size: 2rem;
    text-transform: uppercase;
    color: silver;
  }
  .it {
    padding-left: 6px;
    font-weight: 600;
  }

  .headline h2 {
    display: inline-block;
    margin: 0;
    font-size: 1.5rem;
    width: fit-content;
    color: silver;
  }
}
</style>
