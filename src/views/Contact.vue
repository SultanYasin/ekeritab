<!-- <template>
  <section id="contact">
    <div class="contact container">
      <div class="contact-items">
        <div class="contact-item">
          <img
            src="../assets/icons8-call-96.png"
            alt="phone"
            class="icon"
          />
          <div class="contact-info">
            <h1>Telefon</h1>
            <h2><a href="tel:0370 - 34 11 55">0370 - 34 11 55</a></h2>
          </div>
        </div>
        <div class="contact-item">
          <img src="../assets/icons8-mail-94 (1).png" alt="email" class="icon" />
          <div class="contact-info">
            <h1>E-post</h1>
            <h2><a href="mailto:info@ekerit.se">info@ekerit.se</a></h2>
          </div>
        </div>
        <div class="contact-item">
          <img src="../assets/icons8-region-96.png" alt="location" class="icon" />
          <div class="contact-info">
            <h1>Ekerit AB</h1>
            <h2>Järnvägsgatan 3</h2>
            <h2>331 37 Värnamo</h2>
            <p>Koordinater: 57.1838, 14.0366</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
 -->
<template>
  <div class="container">
  <div class="card">
    <div class="header">
      <div class="icon-container" >  
        <img src="../assets/icons8-call-96.png" alt="phone" class="icon"/>
      </div>
      <h1 class="head" >Telefon</h1>
    </div>
    <div class="txt"><h2><a href="tel:0370 - 34 11 55">0370 - 34 11 55</a></h2></div>
  </div>
  <div class="card">
    <div class="header">
      <div class="icon-container" > 
        <img src="../assets/icons8-mail-94 (1).png" alt="email" class="icon" />
      </div>
          <h1 class="head">E-post</h1>
    </div>
    <h2><a href="mailto:info@ekerit.se">info@ekerit.se</a></h2>
  </div>
  <div class="card">
    <div class="header">
      <div class="icon-container" > 
        <img src="../assets/icons8-region-96.png" alt="location" class="icon" />
      </div>
      <h2 class="adress head">Adress</h2>
      <h4></h4>
       
    </div>
    <div class="address-txt"><h4>Järnvägsgatan 3 <br> 331 37 Värnamo</h4></div>
  </div>
</div>

</template>

<style scoped>

.container{
  display: flex;
  gap: 20px;
  text-align: center;
  height: 100vh;
}

.card{
  width: 400px;
  height: 250px;
 
  border-radius: 5%;
  padding: 1%;
  display: grid;
  place-items: center;
  background-image: linear-gradient(60deg, #29323c 0%, #000000 100%);


}
.adress{
  font: 30px inter;
}
.address-txt{
  margin-bottom: 0;
  padding-bottom: 0;
  font: 18px inter;
}
.card:hover{
  border: 3px solid rgb(6, 6, 119);
  transition: all 1s ease-in;
}

.header{
align-self: center;
justify-self: center;
}


@media only screen and (max-width: 768px) {
  .container{
    display: grid;
    grid-gap: 20px;
    text-align: center;
  }
  .card{
    width: 280px;
    height: 200px;
    margin: auto auto; 
  }
}



</style>
