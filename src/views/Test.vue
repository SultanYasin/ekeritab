<template>
  <section id="contact">
    <div class="section-header">
      <h4>Contact us and we'll talk more about how we can help you.</h4>
    </div>

    <div class="contact-wrapper">
      <!--  contact2  -->
      <form
        id="contact-form"
        class="form-horizontal"
        @submit.prevent="handleSubmit"
      >
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
            <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
          </div>
        </button>
      </form>

      <!-- contact1  -->
      <div class="direct-contact-container">
        <ul class="contact-list">
          <li class="list-item">
            <font-awesome-icon icon="city" size="2x" /><span
              class="contact-text place"
              >Värnamo </span
            >
          </li>
          <li class="list-item">
            <font-awesome-icon icon="location-dot" size="2x" /><span
              class="contact-text place"
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
              ><font-awesome-icon icon="fa-brands fa-linkedin"
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
  display: grid;
  width: 100%;
  height: 100%;
  gap: 20px;
}

#contact-form {
  width: 50%;
  height: 100%;

}

.section-header {
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  font: 200 20px "Oswald", sans-serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 840px;
}

.form-horizontal {
  width: 500px;
  font-family: "Lato";
  font-weight: 400;
  margin-left: 0 10vw;
  
}
.form-group {
  margin-bottom: 20px;
}

.form-control,
textarea {
  width: 100%;
  max-width: 400px;
  background-color: #000;
  color: #fff;
  letter-spacing: 1px;
  padding: 10px;
  border: 1px solid #555;
  border-radius: 5px;
}

.send-button {
  margin-top: 15px;
  height: 34px;
  width: 400px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: ;
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

/* Begin Right Contact Page */
.direct-contact-container {
  max-width: 500px;
}

/* Location, Phone, Email Section */
.contact-list {
  list-style-type: none;
  margin-left: 40px;
}

.list-item {
  line-height: 4;
  color: #aaa;
}

.contact-text {
  font: 300 18px "Lato", sans-serif;
  letter-spacing: 1.9px;
  color: #bbb;
}

.place {
  margin-left: 62px;
}

.phone {
  margin-left: 56px;
}

.gmail {
  margin-left: 53px;
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

/* Begin Media Queries*/
@media screen and (max-width: 850px) {
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
    max-width: 300px;
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
}

@media screen and (max-width: 569px) {
  .direct-contact-container,
  .form-wrapper {
    float: none;
    margin: 0 auto;
  }
  .form-control,
  textarea {
    margin: 0 auto;
  }

  .name,
  .email,
  textarea {
    width: 280px;
  }

  .direct-contact-container {
    margin-top: 60px;
    max-width: 280px;
  }
  .social-media-list {
    left: 0;
  }
  .social-media-list li {
    height: 55px;
    width: 55px;
    line-height: 55px;
    font-size: 2rem;
  }
  .social-media-list li:after {
    width: 55px;
    height: 55px;
    line-height: 55px;
  }
}

@media screen and (max-width: 780px) {
  .contact-wrapper {
    width: 100vw;
  }
  .send-button {
    width: 99%;
  }
  .form-horizontal,
  .contact-list li {
    width: 100%;
  }

}
</style>