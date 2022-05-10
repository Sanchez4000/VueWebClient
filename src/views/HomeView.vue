<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div>
    <TestRemoteRequest/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import TestRemoteRequest from '@/components/TestRemoteRequest/TestRemoteRequest.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TestRemoteRequest,
  },
};

</script>
