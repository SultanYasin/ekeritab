
<template>
  <div class="container">
    <h3>
      Vi hjälper er att utveckla era digitala processer och tjänster med
      innovativa systemlösningar.
    </h3>
    <h2>Systemutveckling med fokus på Java</h2>
    <p>
      Vi arbetar i projekt som kräver ledande färdigheter inom mjukvaruutveckling
    </p>

    <div class="card-wrapper">
      <!-- First Row of Cards -->
      <div class="card-row">
        <div class="card">
          <h3>Systemutveckling</h3>
          <p>
            Med en genomtänkt och utbyggbar arkitektur kan vi utveckla
            systemlösningar som möter era krav idag såväl som i framtiden, allt
            efter era behov.
          </p>
        </div>
        <div class="card">
          <h3>Projekt</h3>
          <p>
            Vi analyserar de behov, idéer, problem och krav som finns och hjälper
            er genom design, testning och utveckling till drift och förvaltning.
          </p>
        </div>
        <div class="card">
          <h3>Elektroniska fakturor</h3>
          <p>
            Vi hjälper er med er digitaliseringsprocess. Elektroniska dokument
            och fakturor är något vi jobbar mycket med. Behöver ni hjälp att
            konvertera flöden till nya digitala kanaler så hjälper vi er med det.
            Det kan handla om olika typer av e-fakturatjänster, Peppol, digitala
            brevlådor, dokumentarkiv etc.
          </p>
        </div>
      </div>
      <!-- Second Row of Cards -->
      <div class="card-row">
        <div class="card">
          <h3>Dokumenthantering</h3>
          <p>
            Vi hjälper er med utformning och producering av dokument, fakturor
            och olika flöden med erfarenheter från ett flertal
            innehållshanteringssystem. Vi kan även tillhandahålla support och
            nyutveckling i OpenText StreamServe.
          </p>
        </div>
        <div class="card">
          <h3>Infrastruktur</h3>
          <p>
            Det är inte bara mjukvaran som är viktig. Behöver ni hjälp med drift
            av tjänster på egna servrar eller i molntjänster har vi kompetens
            inom drift och förvaltning av Unix/Linux-miljöer,
            databasadministration och backuphantering.
          </p>
        </div>
        <div class="card">
          <h3>Webb</h3>
          <p>
            Vad är en bra tjänst utan en användbar framsida? Vi kan erbjuda
            framtidssäkra lösningar för era unika interna och publika
            webbportaler och liknande oavsett om det är för ett befintligt eller
            nyutvecklat system.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .card-wrapper {
    max-width: 1200px;
    margin-top: 20px;
  }

  .card-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .card {
    background-color: #f0f0f0;
    padding: 20px;
    margin: 10px;
    width: 300px;
    height: 200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow-y: auto;
  }

  .card h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .card p {
    font-size: 1rem;
    line-height: 1.5;
    color: #333;
  }
</style>
