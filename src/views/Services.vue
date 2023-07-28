<template>
  <section id="services">
    <div class="services container">
      <div class="service-top">
        <h1 class="section-title">Serv<span>i</span>ces</h1>

        
        <h3>
          Vi hjälper er att utveckla era digitala processer och tjänster med
          innovativa systemlösningar.
        </h3>

      </div>
      <div class="service-bottom">
        <div class="service-item">
          <div class="icon">
            <img src="../assets/icons8-code-96.png" />
            <div class="title-container"><h2>Systemutveckling</h2></div>
          </div>
          <p>
            Med en genomtänkt och utbyggbar arkitektur kan vi utveckla
            systemlösningar som möter era krav idag såväl som i framtiden, allt
            efter era behov.
          </p>
        </div>
        <div class="service-item">
          <div class="icon">
            <img src="../assets/icons8-project-96.png" />
            <div class="title-container"><h2>Projekt</h2></div>
          </div>
          <p>
            Vi analyserar de behov, idéer, problem och krav som finns och
            hjälper er genom design, testning och utveckling till drift och
            förvaltning.
          </p>
        </div>
        <div class="service-item">
          <div class="icon">
            <img src="../assets/icons8-document-144.png" />
            <div class="title-container"><h2>Dokumenthantering</h2></div>
          </div>
          <p>
            Vi hjälper er med utformning och producering av dokument, fakturor
            och olika flöden med erfarenheter från ett flertal
            innehållshanteringssystem. Vi kan även tillhandahålla support och
            nyutveckling i OpenText StreamServe.
          </p>
        </div>

        <div class="service-item">
          <div class="icon">
            <img src="../assets/icons8-website-96.png" />
            <div class="title-container"><h2>Webb</h2></div>
          </div>
          <p>
            Vad är en bra tjänst utan en användbar framsida? Vi kan erbjuda
            framtidssäkra lösningar för era unika interna och publika
            webbportaler och liknande oavsett om det är för ett befintligt eller
            nyutvecklat system.
          </p>
        </div>
        <div class="service-item">
          <div class="icon">
            <img src="../assets/icons8-project-96 (1).png" />
            <div class="title-container"><h2>Infrastruktur</h2></div>
          </div>
          <p>
            Det är inte bara mjukvaran som är viktig. Behöver ni hjälp med drift
            av tjänster på egna servrar eller i molntjänster har vi kompetens
            inom drift och förvaltning av Unix/Linux-miljöer,
            databasadministration och backuphantering.
          </p>
        </div>

        <div class="service-item">
          <div class="icon">
            <img src="../assets/icons8-bill-96.png" />
            <div class="title-container"><h2>E-Fakturor</h2></div>
          </div>
          <p>
            Vi hjälper er med er digitaliseringsprocess. Elektroniska dokument
            och fakturor är något vi jobbar mycket med. Behöver ni hjälp att
            konvertera flöden till nya digitala kanaler så hjälper vi er med
            det. Det kan handla om olika typer av e-fakturatjänster, Peppol,
            digitala brevlådor, dokumentarkiv etc.
          </p>
        </div>
      </div>
    </div>
  </section>
  <body></body>
</template>
<script>
export default {};
</script>

<style scoped>
#services .services {
  flex-direction: column;
  text-align: center;
  max-width: 100vw;
  margin: 7vh auto;
  padding: 100px 0;
  height: 100vh;
  overflow: auto;
}
#services .service-top {
  max-width: 500px;
  margin: 0 auto;
}
#services .service-bottom {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
}


 img {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  margin-top: 0;
  padding-top: 0;
} 
#services .service-item .icon {
  display: flex;
  align-items: center;
  margin: 15px;
  text-align: center;
}
#services .service-item .title-container {
  padding-left: 10px; 
}
#services .service-item {
  flex-basis: 48%;
  height: 320px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;

  margin: 10px 1%;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
#services .service-item::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  /*  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%); */
  opacity: 0.9;
  z-index: -1;
}
.icon {
  display: flex;
  align-items: center;
  margin: 20px;
}

#services .service-item h2 {
  font-size: 1.3rem;
  color: white;
 
  height: 3rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

#services .service-item p {
  color: white;
  text-align: left;
}

/* Media Query For Large Screens */
@media only screen and (max-width: 1499px) and (min-width: 1000px) {
  #services .service-bottom .service-item {
    flex-basis: 30%;
  }
}

/* Media Query For Medium Screens */
@media only screen and (max-width: 999px) and (min-width: 768px) {
  #services .service-bottom .service-item {
    flex-basis: 48%;
  }
}

/* Media Query For Small Screens */
@media only screen and (max-width: 767px) {
  #services .service-bottom .service-item {
    flex-basis: 100%;
  }
}
</style>
