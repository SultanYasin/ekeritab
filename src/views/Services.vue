<template>
  <div class="wrapper">
    <div class="container">
      <div class="service-header title">
        <h3 class="sub-title">{{ $t("Services.subTitle") }}</h3>
      </div>
      <div class="item">
        <div class="header">
          <div class="icon">
            <img src="../assets/icons8-code-96.png" alt="Project" />
          </div>
          <div class="title">
            <h2>{{ $t("Services.SystemDevelopment") }}</h2>
          </div>
        </div>
        <div class="text">
          <p>{{ $t("Services.SystemDevelopment_D") }}</p>
        </div>
      </div>
      <div class="item">
        <div class="header">
          <div class="icon">
            <img src="../assets/icons8-bill-96.png" alt="Project" />
          </div>
          <div class="title">
            <h2>{{ $t("Services.ElectronicInvoices") }}</h2>
          </div>
        </div>
        <div class="text">
          <p>{{ $t("Services.ElectronicInvoices_D") }}</p>
        </div>
      </div>
      <div class="item">
        <div class="header">
          <div class="icon">
            <img src="../assets/icons8-project-96.png" alt="Project" />
          </div>
          <div class="title">
            <h2>{{ $t("Services.Project") }}</h2>
          </div>
        </div>
        <div class="text">
          <p>{{ $t("Services.Project_D") }}</p>
        </div>
      </div>
      <div class="item">
        <div class="header">
          <div class="icon">
            <img src="../assets/icons8-document-144.png" alt="Project" />
          </div>
          <div class="title">
            <h2>{{ $t("Services.DocumentManagement") }}</h2>
          </div>
        </div>
        <div class="text">
          <p>{{ $t("Services.DocumentManagement_D") }}</p>
        </div>
      </div>

      <div class="item">
        <div class="header">
          <div class="icon">
            <img src="../assets/icons8-website-96.png" alt="Project" />
          </div>
          <div class="title">
            <h2>{{ $t("Services.Web") }}</h2>
          </div>
        </div>
        <div class="text">
          <p>{{ $t("Services.Web_D") }}</p>
        </div>
      </div>
      <div class="item">
        <div class="header">
          <div class="icon">
            <img src="../assets/icons8-project.png" alt="Project" />
          </div>
          <div class="title">
            <h2>{{ $t("Services.Infrastructure") }}</h2>
          </div>
        </div>
        <div class="text">
          <p>{{ $t("Services.Infrastructure_D") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.container {
  position: relative;
  display: grid;
  height: 95vh;
  width: 100vw;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: center;
  align-items: center;
  place-items: center;
  overflow-y: auto;
  padding: 10vh 10vw;
  grid-template-rows: auto;
}

.sub-title {
  font-weight: 700;
}

.item {
  display: block;
  align-content: center;
  justify-content: center;
  width: 320px;
  height: 250px;
  overflow-y: hidden;
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
@media only screen and (max-width: 1100px) {
  .container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media only screen and (max-width: 768px) {
  .wrapper {
    margin-top: 1vh;
  }
  .container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(1, 1fr);
    height: 100%;
    margin-bottom: 5%;
    padding-top: 5vh;
    grid-template-rows: auto;
  }
  .item {
    width: 240px;
    padding: 10vh auto;
    padding: 5vh auto;
  }
  .service-header {
    padding-top: 8vh;
    width: 280px;
  }
}
</style>
