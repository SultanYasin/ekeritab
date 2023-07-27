<!-- <template>
    <section id="contact">
      <div class="contact container">
        <div>
          <h1 class="section-title">Contact <span>info</span></h1>
        </div>
        <div class="contact-items">
          <div class="contact-item">
            <img width="64" height="64" src="../assets/icons8-call-96.png" alt="phone" style="height: 70px; width: 70px; " />
            <div class="contact-info">
              <h1>Telefon</h1>
              <h2><a href="tel:0370 - 34 11 55">0370 - 34 11 55</a></h2>
            </div>
          </div>
          <div class="contact-item">
            <div class="icon"><img src="../assets/icons8-mail-94 (1).png" style="height: 70px; width: 70px; " /></div>
            <div class="contact-info">
              <h1>E-post</h1>
              <h2> <a href="mailto:info@ekerit.se">info@ekerit.se</a> </h2>
            </div>
          </div>
          <div class="contact-item">
            <div class="icon"><img src="../assets/icons8-region-96.png" style="height: 70px; width: 70px; " /></div>
            <div class="contact-info">
              <h1>Ekerit AB</h1>
              <h2>Järnvägsgatan 3</h2>
              <h2>331 37 Värnamo</h2>
              <p>Koordinater: 57.1838, 14.0366 </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  #contact .contact {
    display: grid;
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }
  #contact .contact-items {
    display: flex; /* Updated: Use flex display */
    justify-content: space-between; /* Updated: Distribute items evenly */
    width: 100%;
  }
  #contact .contact-item {
    width: 30%;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 18px 0 #0000002c;
    transition: 0.3s ease box-shadow;
  }
  #contact .contact-item:hover {
    box-shadow: 0px 0px 5px 0 #0000002c;
  }
  #contact .icon {
    width: 70px;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  #contact .contact-info h1 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 5px;
  }
  #contact .contact-info h2 {
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: 500;
  }
  
  /* Media Query For Small and Medium Screens */
  @media only screen and (max-width: 767px) {
    #contact .contact-item {
      width: 100%;
    }
  }
  </style>
   -->

   <template>
    <section id="contact">
      <div class="contact container">
        <div>
          <h1 class="section-title">Contact <span>info</span></h1>
        </div>
        <div class="contact-items">
          <div class="contact-item">
            <img width="64" height="64" src="../assets/icons8-call-96.png" alt="phone" style="height: 70px; width: 70px; " />
            <div class="contact-info">
              <h1>Telefon</h1>
              <h2><a href="tel:0370 - 34 11 55">0370 - 34 11 55</a></h2>
            </div>
          </div>
          <div class="contact-item">
            <div class="icon"><img src="../assets/icons8-mail-94 (1).png" style="height: 70px; width: 70px; " /></div>
            <div class="contact-info">
              <h1>E-post</h1>
              <h2> <a href="mailto:info@ekerit.se">info@ekerit.se</a> </h2>
            </div>
          </div>
          <div class="contact-item">
            <div class="icon"><img src="../assets/icons8-region-96.png" style="height: 70px; width: 70px; " /></div>
            <div class="contact-info">
              <h1>Ekerit AB</h1>
              <h2>Järnvägsgatan 3</h2>
              <h2>331 37 Värnamo</h2>
              <p>Koordinater: 57.1838, 14.0366</p>
            </div>
          </div>

        </div>
      </div>
      <div class="form"></div>
    </section>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>

  .form{
    background: #623a3a;
  }
  #contact .contact {
    display: grid;
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }
  
  #contact .contact-items {
    
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
    gap: 20px; 
    margin-top: 10vh;
    background-color: inherit;
    width: 35%;
  }
  
  #contact .contact-item {
    /* width: 30%; */ /* Remove this line */
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    padding: 15px; /* Reduced padding */
    margin: 15px; /* Reduced margin */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 18px 0 #0000002c;
    transition: 0.3s ease box-shadow;
  }
  
  #contact .contact-item:hover {
    box-shadow: 0px 0px 5px 0 #0000002c;
  }
  
  #contact .icon {
    width: 70px;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  
  #contact .contact-info h1 {
    font-size: 1.5rem; /* Reduced font size */
    font-weight: 500;
    margin-bottom: 5px;
  }
  
  #contact .contact-info h2 {
    font-size: 1rem; /* Reduced font size */
    line-height: 1.5rem; /* Reduced line height */
    font-weight: 500;
  }
  
  /* Media Query For Small and Medium Screens */
  @media only screen and (max-width: 767px) {
    #contact .contact-item {
      width: 100%;
    }
  }

  </style>
  