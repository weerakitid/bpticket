<template>
  <div id="app">
    <Logo />
    <ShowDetails />
  </div>
</template>

<script>
import Logo from "./Logo";
import ShowDetails from "./ShowDetails";

export default {
  name: "app",
  components: {
    Logo,
    ShowDetails
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Sarabun&display=swap");
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  max-width: 450px;
  margin: 0px auto;
  font-family: "Sarabun", sans-serif;
}
</style>
