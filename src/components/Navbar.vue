<template>
  <div id="app">
    <div id="header">
      <div class="header container">
        <div class="nav-bar">
          <img src="../assets/logo-white.png" alt="logo" class="logo" >
          <div class="nav-list">
            <div class="hamburger" @click="toggleMenu">
              <div class="bar"></div>
            </div>

            <ul :class="{ active: isMenuOpen }">
              <li>
                <RouterLink to="/" @click.stop="toggleMenu"> {{ $t('Header.home') }} </RouterLink>
              </li>
              <li>
                <RouterLink to="/services" @click.stop="toggleMenu"
                  >{{ $t('Header.services') }}</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/about" @click.stop="toggleMenu"
                  >{{ $t('Header.about') }}</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/contact" @click.stop="toggleMenu"
                  >{{ $t('Header.contact') }}</RouterLink
                >
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      const scroll_position = window.scrollY;
      const header = document.querySelector(".header.container");
      if (scroll_position > 250) {
        header.style.backgroundColor = "#29323c";
      } else {
        header.style.backgroundColor = "transparent";
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>


#header {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
}
#header .header {
  min-height: 8vh;
  background: linear-gradient(to right, #010109, #000000);
  transition: 0.3s ease;
  padding: 0;
  margin: 0;
}
#header .nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 1300px;
  padding: 0 10px;
}


.logo{
  padding-top: 10px;
  width: 180px;
  border-radius: 20px;
}
#header .nav-list ul {
  list-style: none;
  position: absolute;
  transition: 0.5s ease left;
  background-color: rgb(31, 30, 30);
  width: 100vw;
  height: 100vh;
  left: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow-x: hidden;
  transition: 0.5s ease left;
}
#header .nav-list ul.active {
  left: 0%;
  color: red;
}
#header .nav-list ul a {
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  padding: 20px;
  display: block;
}
#header .nav-list ul a::after {
  content: attr(data-after);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  color: rgb(65, 17, 17);

  font-size: 5rem;
  letter-spacing: 50px;
  z-index: -1;
  transition: 0.3s ease letter-spacing;
}
#header .nav-list ul li:hover a::after {
  transform: translate(-50%, -50%) scale(1);
  letter-spacing: initial;
}
#header .nav-list ul li:hover a {
  color: crimson;
}
#header .hamburger {
  height: 60px;
  width: 60px;
  display: inline-block;
  border: 3px solid white;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  cursor: pointer;
  transform: scale(0.8);
  margin-right: 20px;
}
#header .hamburger:after {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 3px solid white;
  animation: hamburger_puls 1s ease infinite;
}
#header .hamburger .bar {
  height: 2px;
  width: 30px;
  position: relative;
  background-color: white;
  z-index: -1;
}
#header .hamburger .bar::after,
#header .hamburger .bar::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  background-color: white;
  transition: 0.3s ease;
  transition-property: top, bottom;
}
#header .hamburger .bar::after {
  top: 8px;
}
#header .hamburger .bar::before {
  bottom: 8px;
}
#header .hamburger.active .bar::before {
  bottom: 0;
}
#header .hamburger.active .bar::after {
  top: 0;
}

/* Keyframes */
@keyframes hamburger_puls {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.4);
  }
}



  @media only screen and (min-width: 800px) {
    
    #header .hamburger {
      display: none;
    }
    #header .nav-list ul {
      position: initial;
      display: block;
      height: auto;
      width: fit-content;
      background-color: transparent;
    }
    #header .nav-list ul li {
      display: inline-block;
    }
    #header .nav-list ul li a {
      font-size: 1.1rem;
    }
    #header .nav-list ul a:after {
      display: none;
    }
 
  }


</style>
