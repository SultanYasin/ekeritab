<template>
  <div class="container">
    <div class="wrapper">

      <div class="card">
        <img src="../assets/icons8-call-96.png" alt="phone" class="icon" />
        <h2><a href="tel:0370 - 34 11 55">0370 - 34 11 55</a></h2>
      </div>
      <div class="card">
        
        <img src="../assets/icons8-mail-94 (1).png" alt="email" class="icon"/>
        <h2><a href="mailto:info@ekerit.se">info@ekerit.se</a></h2>
      </div>
     
<!--       <div class="card">
        <div class="header">
          <div class="icon-container">
          </div>
          <img src="../assets/icons8-mail-94 (1).png" alt="email" class="icon"/>
          <h2><a href="mailto:info@ekerit.se">info@ekerit.se</a></h2>
        </div>
      </div>
      <div class="card">
        <div class="header">
          <div class="icon-container">
            <img
              src="../assets/icons8-region-96.png"
              alt="location"
              class="icon"
            />
          </div>
          <h3>
            Järnvägsgatan 3 <br />
            331 37 Värnamo
          </h3>
        </div>
        <div class="address-txt"></div>
      </div>
      <div class="card">
        <div class="header">
          <div class="icon-container">
            <img
              src="../assets/icons8-address-96.png"
              alt="location"
              class="icon"
            />
          </div>
          <h3>
            <a :href="getMapsLink(57.1838, 14.0366)" target="_blank"
              >57.1838, 14.0366</a
            >
          </h3>
        </div>
        <div class="address-txt">
          <h4></h4>
        </div>
      </div> -->
    </div>
    <div class="form">
      <form style="display: grid">
        <input type="text" /><input type="text" /><input type="text" />
        <button>send</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    getMapsLink() {
      return `https://www.google.com/maps?q=57.1838,%2014.0366`;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  margin: 0 10vw;
  flex-wrap: wrap;
}
.wrapper {
  display: grid;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 800px;
}
.address-txt {
  color: whitesmoke;
}

/* .card {
  width: 250px;
  height: 150px;
  border-radius: 5%;
  display: grid;
  place-items: center;
  font-size: 0.7rem;
} */
.card{
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
}

a {
  text-decoration: none;
  color: whitesmoke;
}
.adress {
  font: 30px inter;
}
.head {
  font-size: 1.5rem;
}
.address-txt {
  margin-bottom: 0;
  padding-bottom: 0;
  font: 18px inter;
}
.card:hover {
  border: 3px solid rgb(6, 6, 119);
  transition: all 0.1s ease-in;
}

.header {
  display: flex;
  align-self: center;
  align-items: center;
  justify-self: center;
}
img {
  width: 50px;
}

@media only screen and (max-width: 768px) {
  .container {
    padding: 15vh 0 7vh 0;
  }
  .wrapper {
    padding: 5vh 0;
  }
  .card {
    width: 240px;
    height: 160px;
    margin: 1vh auto;
  }

  .head {
    font-size: 1.5rem;
  }

  img {
    width: 50px;
    height: 50px;
  }
  .wrapper:last-child {
    margin-bottom: 10vh;
  }
}
</style>
