<template>
  <div id="Soldout">
    <div class="logo">
      <img src="./assets/logo.svg" />
    </div>
    <!-- logo blackpink -->
    <div class="imgSad">
      <img src="./assets/icon - sad.svg" />
    </div>
    <div class="txtSoldOut">Sold out</div>
    <div class="txtNextTime">Maybe next time</div>
    <footer>Black pink in area</footer>
  </div>
</template>

<script>
export default {
  name: "Soldout"
};
</script>

<style>
html,
body {
  height: 100%;
  max-width: 450px;
  margin: 0px auto;
  background: white;
}

.logo {
  text-align: center;
  height: 70px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
}
.logo > img {
  padding-top: 10px;
}
.imgSad {
  text-align: center;
  margin-top: 60px;
}
.txtSoldOut {
  font-family: Sarabun;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 47px;
  /* identical to box height */
  text-align: center;
  margin-top: 28px;

  /* Text2 */
  color: #919191;
}

.txtNextTime {
  /* Maybe next time. */

  font-family: Sarabun;
  font-style: italic;
  font-weight: normal;
  font-size: 17px;
  line-height: 29px;
  /* identical to box height */
  text-align: center;

  /* Text2 */
  color: #919191;
}

footer {
  font-family: Sarabun;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */
  text-align: center;

  margin-top: 220px;
  /* Pink - BP */
  color: #f5678d;
}
</style>
