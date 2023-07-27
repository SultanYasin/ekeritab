<template>
  <section id="footer">
    <div class="footer container">
      <div class="brand">
        <h1>EKER<span>IT</span></h1>
      </div>
      <h2>Your Complete Web Solution</h2>
      <div class="social-icon">
        <a href="#" class="social-item">
          <img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" />
        </a>
        <a href="#" class="social-item">
          <img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" />
        </a>
        <a href="#" class="social-item">
          <img src="https://img.icons8.com/bubbles/100/000000/twitter.png" />
        </a>
        <a href="#" class="social-item">
          <img src="https://img.icons8.com/bubbles/100/000000/behance.png" />
        </a>
      </div>
      <p>&copy; {{ new Date().getFullYear() }} Ekerit.</p>
    </div>
  </section>
</template>

<script>

export default {};
</script>

<style scooped >
#footer {
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  text-align: center;

}

#footer .footer {
  min-height: 150px;
  
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 30px; 
}

#footer h2 {
  color: white;
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  margin-top: 10px;
  margin-bottom: 20px; 
  font-family: "Arial", sans-serif; }

#footer .social-icon {
  display: flex;
  justify-content: center; 
  margin-bottom: 20px; 
}

#footer .social-item {
  height: 50px;
  width: 50px;
  margin: 0 5px;
  border-radius: 50%; 
  overflow: hidden; 
}

#footer .social-item img {
  filter: grayscale(1);
  transition: 0.3s ease filter;
  width: 100%; 
  height: 100%;
}

#footer .social-item:hover img {
  filter: grayscale(0);
}

#footer p {
  color: white;
  font-size: 1.3rem;
  font-family: "Arial", sans-serif; 
}
</style>
