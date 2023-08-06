<template>
  <div class="body">
    <div class="viwe1">
      <div class="hero">
        <div class="brand">
          <div>EKER<span class="it">IT</span> &nbsp;AB</div>
          <!--<div>EKER<span class="it">IT/&gt;</span></div> -->
        </div>

        <div class="headline">
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
        <router-link to="/services">
          <button class="third">
            <h4>{{ $t("Home.buttonMsg") }}</h4>
          </button>
        </router-link>
      </div>
    </div>

    <div class="viwe2">
      <img src="../assets/code11.jpg" alt="" srcset="" class="pc" />
      <img src="../assets/bg.png" alt="" srcset="" class="mob" />
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
  min-height: 90vh;
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
.mob {
  display: none;
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
Button {
  margin: 0 12vw;
  width: 25vw;
  height: 40px;
  border: none;
  border-radius: 10px;
}

.third {
  border-color: #4d92fe;
  color: #fff;
  box-shadow: 0 0 40px 40px #4d92fe inset, 0 0 0 0 #4d92fe;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  background-color: transparent;
  cursor: pointer;

  font-size: 1.2rem;

  line-height: 1;
}
.third:hover {
  box-shadow: 0 0 10px 0 #4d92fe inset, 0 0 10px 4px #4d92fe;
}

.wrapper {
  display: flex;
  width: 40vw;
  margin: 10vh 12vw;
  background: #000;
  text-align: start;
  align-items: center;
}

.hero {
  font-size: 2rem;
  margin: 20vh 12vw 0 12vw;
}

.wrapper .first-text {
  font-size: 3rem;
  color: silver;
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
@media only screen and (max-width: 820px) {
  .body {
    position: relative;
    background: #000;
    display: block;
    width: 100vw;
    min-height: 75vh;
    overflow: hidden;
  }

  .wrapper {
    width: 100%;
  }
  .wrapper .first-text {
    display: flex;
    font-size: 3rem;
    color: silver;
  }

  .pc {
    display: none;
  }

  .mob {
    display: flex;
    z-index: 1;
  }
  img {
    position: absolute;
    right: 0;
    width: 100%;
    min-height: 100vh;
    top: 0;
  }
  .viwe1 {
    display: block;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    opacity: 1;
    z-index: 2;
    opacity: 0.8;
    background-color: #000;
    color: silver;
    padding: 10px;
  }

  .Btn {
    width: 50%;
  }
  button {
    width: 100%;
    font-size: large;
    font-weight: 600;
  }
}

/* ____________---------------____________________-------------____________________------------------------------------------------------------ */
@media only screen and (max-width: 621px) {
  .body {
    position: relative;
    background: #000;
    display: block;
    width: 100vw;
    min-height: 75vh;
    overflow: hidden;
  }

  .viwe1 {
    display: block;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    opacity: 1;
    z-index: 2;
    opacity: 0.8;
    background-color: #000;
    color: silver;
    padding: 10px;
  }
  .pc {
    display: none;
  }

  .mob {
    display: flex;
    z-index: 1;
  }
  img {
    position: absolute;
    right: 0;
    width: fit-content;
    min-height: 100vh;
    top: 0;
  }

  .Btn {
    width: 80%;
  }
  button {
    width: 100%;
  }
  .wrapper {
    text-align: start;
    margin-top: 25vh ;
    margin-bottom: 0 ;
  }
  .wrapper .first-text {
    display: flex;
    font-size: 1.8rem;
    color: silver;
  }

  .wrapper .sec-texts {
    height: 85px;
    line-height: 90px;
    overflow: hidden;
  }

  .sec-texts li {
    position: relative;
    top: 0;
    font-size: 1.8rem;
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
    letter-spacing: 2px;
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
