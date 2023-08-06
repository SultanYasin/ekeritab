<template>
  <div class="container">
    <div class="txt">
      <h3>Ekerit AB</h3>
      <h4>Organisationsnummer: 559065-5766</h4>
    </div>

    <div class="lang">
      <button @click="changeLocale('sv')"><p>sv <img src="../assets/sweden.png" alt="" /></p></button>
      <button @click="changeLocale('en')"><p>en <img src="../assets/usa.png" alt="" /></p></button>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    changeLocale(localeValue) {
      this.$i18n.locale = localeValue; 
    },
  },
};
</script>








<style scoped>
.container {
  display: flex;
  justify-content: space-around; 
  position: sticky;
  bottom: 0;
  width: 100vw;
  background: linear-gradient(to right, #010109, #000000);
  bottom: 0;
  height: 13dvh;

}

img {
  height: 15px;
  border-radius: 50%;
  padding-left: 10px;
}

button{
  background-color: inherit;
  color: silver;
  border: none;
  cursor: pointer;
}

.lang {
  display: flex;
  align-items: center;
  justify-content: center;

}

.lang p {
  display: flex;
  align-items: center;
  margin: 0 1vw;
}

@media only screen and (max-width: 850px) {
  .container {
    position: sticky;
    top: 100vh;
    display: block;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 9dvh;
  }

}
</style>
