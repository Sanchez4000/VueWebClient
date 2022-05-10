<template>
  <div id="app">
    <root/>
  </div>
</template>
<script lang='ts'>
import BaseComponent from './components/BaseComponent';
import Component from 'vue-class-component';

@Component({
  components: {
    root: require('@/components/root/Root.vue').default,
  },
})
export default class App extends BaseComponent {
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
