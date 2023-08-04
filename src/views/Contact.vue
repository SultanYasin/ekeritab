<template>
  <section id="contact">
    <div class="section-header">
      <h4>{{ $t('Contact.subTitle') }}</h4>
    </div>

    <div class="contact-wrapper">
      <!-- contact1  -->
      

        <div class="v1">
        <ul class="contact-list">
          <li class="list-item">
            <font-awesome-icon icon="city" size="2x" /><span
              class="contact-text place"
              >Värnamo </span
            >
          </li>
          <li class="list-item">
            <font-awesome-icon icon="location-dot" size="2x" /><span
              class="contact-text place_a"
              >Järnvägsgatan 3 </span
            >
          </li>
          <li class="list-item">
            <font-awesome-icon icon="map-location-dot" size="2x" />
            <span class="contact-text place">
              <a :href="getMapsLink()" target="_balnk" >57.1838, 14.0366</a>
            </span>
          </li>

          <li class="list-item">
            <font-awesome-icon icon="phone" size="2x" /><span
              class="contact-text phone"
            >
              <a :href="getTelLink()" title="Give me a call"
                >0370 - 34 11 55</a
              ></span
            >
          </li>

          <li class="list-item">
            <font-awesome-icon icon="envelope" size="2x" />
            <span class="contact-text gmail"
              ><a :href="getMailtoLink()" title="Send me an email"
                >info@ekerit.se</a
              ></span
            >
          </li>
        </ul>
       <hr />
        <ul class="social-media-list">
          <li>
            <a href="#" target="_blank" class="contact-icon"
              ><font-awesome-icon icon="fa-brands fa-facebook"
            /></a>
          </li>
          <li>
            <a href="#" target="_blank" class="contact-icon"
              ><font-awesome-icon icon="fa-brands fa-instagram"
            /></a>
          </li>
          <li>
            <a href="#" target="_blank" class="contact-icon"
              ><font-awesome-icon icon="fa-brands fa-linkedin"
            /></a>
          </li>
        </ul>
        <hr />
        <div class="copyright">&copy; Ekerit</div>
      </div>

    


      <form
        id="contact-form"
        class="form-horizontal"
        @submit.prevent="handleSubmit"
      >
     <!--  <h3 class="form-txt" >Contact us Directly </h3> -->
        <div class="form-group">
          <div class="col-sm-12">
            <input type="text" class="form-control" id="name" placeholder="NAME" name="name" v-model="formData.name" required/>
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-12">
            <input  type="email"  class="form-control"  id="email"  placeholder="EMAIL"  name="email"  v-model="formData.email"  required/>
          </div>
        </div>

        <textarea class="form-control" rows="13" placeholder="MESSAGE" name="message" v-model="formData.message" required></textarea>

        <button
          class="btn btn-primary send-button"
          id="submit"
          type="submit"
          value="SEND"
        >
          <div class="alt-send-button">
           <span class="send-text">SEND</span>
           <span class="send-text">SEND</span>
          </div>
        </button>
      </form>
    </div>

  </section>
</template>

<script>

export default {
  
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.formData.name = "";
      this.formData.email = "";
      this.formData.message = "";
    },
    getTelLink() {
      return "tel:0370 - 34 11 55";
    },
    getMailtoLink() {
      return "mailto:info@ekerit.se";
    },
    getMapsLink() {
      return `https://www.google.com/maps?q=57.1838,%2014.0366`;
    },
  },
};
</script>

<style scoped>
#contact {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;



}

#contact-form {
  width: 50%;
  height: 100%;

}
.form-horizontal {
  width: 800px;
  font-family: "Lato";
  font-weight: 400;

}
.section-header {
  text-align: center;
  margin: 0 auto;
  padding: 60px 10px;
  font: 200 15px "Oswald", sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
  max-width: 100vw;
}



.form-group {
  margin: 20px 0 ;
  width: 100%;
}

.form-control,
textarea {
  width: 100%;
  max-width: 700px;
  background-color: #000;
  color: #fff;
  letter-spacing: 1px;
  padding: 10px;
  border: 1px solid #555;
  border-radius: 5px;
}
.form-txt{
  text-align: center;
  font-weight: 500;
}

.send-button {
  margin-top: 15px;
  height: 34px;
  width: 100%;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  background-color: #007bff;
  color: #fff;
  border: none;
  text-align: center;

}

.alt-send-button {
  width: 400px;
  height: 34px;
  transition: all 0.2s ease-in-out;
}

.send-text {
  display: block;
  margin-top: 10px;
  font: 700 12px "Lato", sans-serif;
  letter-spacing: 2px;
}

.alt-send-button:hover {
  transform: translate3d(0px, -29px, 0px);
}




/* _________________________________________________________________________________________ */
.contact-list {
  list-style-type: none;
  margin-left: 40px;
}

.list-item {
  line-height: 4;
  color: #aaa;
}

.contact-text {
  font: 350 18px "Lato", sans-serif;
  letter-spacing: 1.9px;
  color: #bbb;
}

.place {
  margin-left: 65px;
}
.place_a {
  margin-left: 77px;
}

.phone {
  margin-left: 65px;
}

.gmail {
  margin-left: 65px;
}

.contact-text a {
  color: #bbb;
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  color: #fff;
  text-decoration: none;
}

/* Social Media Icons */
.social-media-list {
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.social-media-list li a {
  color: #fff;
}

.social-media-list li {
  position: relative;
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 10px 3px;
  line-height: 60px;
  border-radius: 50%;
  color: #fff;
  background-color: rgb(27, 27, 27);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.social-media-list li:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px #fff;
  transition: all 0.2s ease-in-out;
}

.social-media-list li:hover {
  background-color: #fff;
}

.social-media-list li:hover:after {
  opacity: 1;
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
}

.social-media-list li:hover a {
  color: #000;
}

.copyright {
  font: 200 14px "Oswald", sans-serif;
  color: #555;
  letter-spacing: 1px;
  text-align: center;
}

hr {
  border-color: rgba(255, 255, 255, 0.6);
}

/* ___________________________________________________________________________________________________Begin Media Queries*/
@media screen and (max-width: 850px) {


  #contact{
    height: auto;
    padding-top: 8vh;
  }
  .contact-wrapper {
    display: flex;
    flex-direction: column;
  }
  .direct-contact-container,
  .form-horizontal {
    margin: 0 auto;
  }

  .direct-contact-container {
    margin-top: 60px;
    max-width: 600px;
  }
  .social-media-list li {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .social-media-list li:after {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
  #contact-form {
  width: 80%;
  height: 100%;
  padding-top: 15px;
}

.send-button {
  margin-top: 15px;

  height: 34px;
  width: 100%;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  background-color: #007bff;
  color: #fff;
  border: none;
  display: flex;
}


}


</style>