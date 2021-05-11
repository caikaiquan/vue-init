<template>
  <div class="home">
    <p>123</p>
    <HelloWorld msg="Welcome to Your Vue.js App123ss"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
  },
};
</script>
