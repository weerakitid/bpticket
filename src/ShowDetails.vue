<template>
  <div id="show">
    <p class="title">You can get free concert</p>
    <img id="blackpink" src="./assets/logo-2.svg" />
    <img id="member" src="./assets/Blackpink.png" />
    <p class="bold">Get ticket</p>
    <p class="title">Sunday 26 January 2020 at 03.00 PM.</p>
    <button class="btn" v-if="!isDisabled && !isSoldout">{{ enabletxt }}</button>
    <button class="btn" v-if="isDisabled && !isSoldout" disabled>{{ disableTxt }}</button>
    <button class="btn" v-if="isSoldout" disabled>{{ soldoutTxt }}</button>
    <p>Blackpink in your area</p>
  </div>
</template>

<script>
export default {
  name: "ShowDetails",
  data() {
    return {
      enabletxt: "Get ticket now",
      disableTxt: "Coming soon",
      soldoutTxt: "Sold out",
      isDisabled: false,
      isSoldout: false
    };
  }
};
</script>

<style>
#show {
  width: 100%;
  margin-top: 40px;
  text-align: center;
}

#show > p:last-child {
  color: #f5678d;
  margin: 110px 0 20px 0;
}

.title {
  font-style: italic;
  color: #919191;
  margin-top: 10px;
}

.bold {
  font-weight: bold;
  font-size: 48px;
  margin-top: 40px;
  color: #373737;
}

#blackpink {
  margin-top: 20px;
  margin-bottom: 40px;
}

#member {
  width: 90%;
}

.btn {
  font-size: 10vw;
  font-weight: bold;
  line-height: 55px;
  color: #fff;
  background: #f5678d;
  border: none;
  border-radius: 80px;
  padding: 1vh 12vw;
  margin-top: 40px;
}

.btn:disabled,
.btn[disabled] {
  background: #e0e0e0;
  color: #bbb;
}
</style>