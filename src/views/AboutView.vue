<template>
  <div class="container">
    <div class="img">
      <img src="../assets/server.jpg" alt="server-room" />
    </div>
    <div class="txt-wrapper">
      <div class="txt">
        <h1>Ekerit AB</h1>
        <p>
          {{ $t('About.company_description') }}
        </p>
        <router-link to="/contact">
          <button>{{ $t('About.button') }}</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

span {
  text-decoration: underline;
  font-weight: 900;
}
.robert {
  font-weight: 600;
}
.img {
  position: absolute;
  top: 15vh;
  height: 80vh;
  width: 80vw;
  margin: 0 10vw 10vh 0;
}

img {
  height: 70vh;
  width: 50vw;
  position: inherit;
  border-radius: 10px;
}

.txt-wrapper {
  max-width: 40%;
  padding: 20px;

  border-radius: 10px;
  background-color: black;
  opacity: 0.7;
  margin: 0 0 10vh 25vw;
}

.txt {
  color: #fff;
}

p {
  font-size: 16px;
  line-height: 1.6;
}

button {
  background-color: #fff;
  color: #000;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
}

@media screen and (max-width: 850px) {
  .container{
    height: 90vh;
  }
  img {
    height: 65vh;
    width: 90vw;
    position: inherit;
    border-radius: 10px;
  }

  .txt-wrapper {
    max-width: 80%;
    padding: 20px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: black;
    opacity: 0.8;
  }
}
</style>