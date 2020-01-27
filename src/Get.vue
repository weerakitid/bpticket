<template>
  <div id="get">
    <header>
      <img src="./assets/Blackpink.svg" />
    </header>
    <br />
    <br />
    <div>
      <img src="./assets/icon.svg" height="200px" />
    </div>
    <p class="text_1">Congratulations !</p>
    <p class="text_2">Your ticket number</p>
    <p class="ticket">BP0001</p>
    <footer>Blackpink in your area</footer>
  </div>
</template>

<script>
export default {
  name: "Get"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Sarabun&display=swap");
html,
body {
  height: 100%;
  max-width: 450px;
  margin: 0px auto;
  text-align: center;
  font-family: "Sarabun", sans-serif;
}
footer {
  /* Blackpink in your area */
  font-family: Sarabun;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */
  text-align: center;
  /* Pink - BP */
  color: #f5678d;
}
header > img {
  padding-top: 10px;
}
header {
  text-align: center;
  height: 70px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
}
img {
  text-align: center;
}
p.ticket {
  font-family: Sarabun;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 40px;
  text-align: center;

  /* Pink - BP */
  color: #f5678d;
}
p.text_2 {
  /* Your ticket number */
  font-family: Sarabun;
  font-style: italic;
  font-weight: normal;
  font-size: 22px;
  line-height: 15px;
  /* identical to box height */
  text-align: center;
  /* Text2 */
  color: #919191;
}
p.text_1 {
  /* Congratulations ! */
  font-family: Sarabun;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 30px;
  /* identical to box height */
  text-align: center;
  /* Text2 */
  color: #919191;
}
</style>
