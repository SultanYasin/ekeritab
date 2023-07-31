<template>
  <div class="wrapper">
    <div class="container">
      <div class="service-header title">
        <h1>OUR SERVICES</h1>
        <h3>
          Vi hjälper er att utveckla era digitala processer och tjänster med
          innovativa systemlösningar.
        </h3>
      </div>
      <div class="item">
        <div class="header">
          <div class="icon"><img src="../assets/icons8-code-96.png" /></div>
          <div class="title"><h2>Systemutveckling</h2></div>
        </div>
        <div class="text">
          <p>
            Med en genomtänkt och utbyggbar arkitektur kan vi utveckla
            systemlösningar som möter era krav idag såväl som i framtiden, allt
            efter era behov.
          </p>
        </div>
      </div>
      <div class="item">
        <div class="header">
          <div class="icon"><img src="../assets/icons8-bill-96.png" /></div>
          <div class="title"><h2>E-faktura</h2></div>
        </div>
        <div class="text">
          <p>
            Vi hjälper er att digitalisera era processer, inklusive elektroniska
            dokument och fakturor. Vi kan hjälpa er att konvertera flöden till
            nya digitala kanaler, såsom e-fakturatjänster, Peppol, digitala
            brevlådor och dokumentarkiv.
          </p>
        </div>
      </div>
      <div class="item">
        <div class="header">
          <div class="icon"><img src="../assets/icons8-project-96.png" /></div>
          <div class="title"><h2>Project</h2></div>
        </div>
        <div class="text">
          <p>
            Vi analyserar de behov, idéer, problem och krav som finns och
            hjälper er genom design, testning och utveckling till drift och
            förvaltning.
          </p>
        </div>
      </div>
      <div class="item">
        <div class="header">
          <div class="icon">
            <img src="../assets/icons8-document-144.png" />
          </div>
          <div class="title"><h2>Dokumenthantering</h2></div>
        </div>
        <div class="text">
          <p>
            Vi hjälper er med utformning och producering av dokument, fakturor
            och olika flöden med erfarenheter från ett flertal
            innehållshanteringssystem. Vi kan även tillhandahålla support och
            nyutveckling i OpenText StreamServe.
          </p>
        </div>
      </div>

      <div class="item">
        <div class="header">
          <div class="icon"><img src="../assets/icons8-website-96.png" /></div>
          <div class="title"><h2>Webb</h2></div>
        </div>
        <div class="text">
          <p>
            Vad är en bra tjänst utan en användbar framsida? Vi kan erbjuda
            framtidssäkra lösningar för era unika interna och publika
            webbportaler och liknande oavsett om det är för ett befintligt eller
            nyutvecklat system.
          </p>
        </div>
      </div>
      <div class="item">
        <div class="header">
          <div class="icon">
            <img src="../assets/icons8-project-96 (1).png" />
          </div>
          <div class="title"><h2>Infrastruktur</h2></div>
        </div>
        <div class="text">
          <p>
            Det är inte bara mjukvaran som är viktig. Behöver ni hjälp med drift
            av tjänster på egna servrar eller i molntjänster har vi kompetens
            inom drift och förvaltning av Unix/Linux-miljöer,
            databasadministration och backuphantering.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  height: calc(100vh - 10vh);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}
.container {
  height: 90vh;
  width: 100vw;
  display: grid;
  margin: 20% 0;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  place-items: center;
}
.service-header {
  padding-top: 7%;
}

.item {
  display: block;
  align-content: center;
  justify-content: center;
  width: 300px;
  height: 250px;
  overflow-y: hidden;
  margin: 1vh 1vw;
}

.title {
  grid-column: 1 / -1;
  text-align: center;
  margin: 5% 0;
}
.header {
  display: flex;
  align-items: center;
}
img {
  width: 45px;
  padding-right: 10px;
}

@media only screen and (max-width: 768px) {
  .container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(1, 1fr);

    margin-bottom: 5%;
  }
  .item {
    width: 240px;
    padding: 10vh auto;
  }
  .service-header {
    padding-top: 8vh;
    width: 280px;
  }
}
</style>
