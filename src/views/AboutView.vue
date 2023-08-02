<template>
  <div class="container">
    <div class="img">
      <img src="../assets/server.jpg" alt="server-room" />
    </div>
    <div class="txt-wrapper">

    
    <div class="txt">
      <h1>Ekerit AB</h1>
      <p>
        Software development and consulting company based in
        Värnamo, Sweden. We were founded in 2016 by the passionate software
        engineers <span  > <i class="robert" > Robert Ekman </i></span>. <br> We are a team of
        highly skilled and experienced developers who are passionate about
        creating innovative and user-friendly software solutions. <br> Our mission is
        to help businesses of all sizes achieve their goals through the use of
        technology. We do this by providing our clients with a wide range of
        services, including: Software development Consulting Training Support
      </p>
      <button>Contact Us</button>
    </div>
  </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

}

span{
  text-decoration: underline;
  font-weight: 900;
}
.robert{
  font-weight: 600;
}
.img{
  position: absolute;
  top: 15vh;
  height: 80vh;
  width:80vw ;
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

.txt{
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
</style>
