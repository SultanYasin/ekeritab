<template>
  <div class="container">
    <div class="txt">
      <h3>Ekerit AB</h3>
      <h4>Organisationsnummer 559065-5766</h4>
    </div>

    <div class="social">
<!--       <button class="button facebook"></button>
      <button class="button linkedin"></button>
      <button class="button instagram"></button> -->
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  position: sticky;
  bottom: 0;
  width: 100vw;
  justify-content: space-around;
  background: linear-gradient(to right, #010109, #000000);
  bottom: 0;
  height: 10vh;
}
.social {
  display: flex;
}

.button {
  width: 45px;
  height: 45px;
  background-color: #18243c;
  border: none;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.185),
    0px 3px 3px rgba(255, 255, 255, 0.178) inset,
    0px -3px 3px rgba(0, 0, 0, 0.281) inset;
  transition: all 0.3s;
  cursor: pointer;
  padding-bottom: 3px;
  margin: 10px;
}

.button::before {
  background-color: transparent;
  content: "";
  font-size: 1.6em;
  font-weight: 700;
  color: white;
  z-index: 5;
  transition: all 0.3s;
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
}

.button::after {
  content: "acebook";
  background-color: transparent;
  font-size: 0;
  opacity: 0;
  font-weight: 700;
  color: white;
  z-index: 5;
  transition: all 0.3s;
  transform: translateX(60px);
  font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif;
}

.button:hover {
  width: 160px;
  border-radius: 30px;
}

.button:hover::after {
  opacity: 1;
  font-size: 1.6em;
  transform: translateX(0px);
}

.button:hover .shine {
  transform: translate(-70px, 10px);
}

.button.facebook {
  background-color: #25324c;
}

.button.facebook::before {
  content: "f";
}

.button.facebook::after {
  content: "acebook";
}

/* LinkedIn Button */
.button.linkedin {
  background-color: #25324c;
}

.button.linkedin::before {
  content: "in";
}

.button.linkedin::after {
  content: "LinkedIn";
}

/* Instagram Button */
.button.instagram {
  background-color: #25324c;
}

.button.instagram::before {
  content: "i";
}

.button.instagram::after {
  content: "nstagram";
}

@media only screen and (max-width: 768px) {
  .container {
    position: sticky;
    top: 100vh;
    display: grid;
    grid-gap: 20px;
    text-align: center;
    height: 16vh;
  }
  .social {
    justify-content: center;
    width: 280px;
    height: 200px;
    margin: auto auto;
  }
}
</style>
