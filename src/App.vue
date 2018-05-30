<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <router-link to="apple">Apple</router-link>
    <router-link to="banana">Banana</router-link>
    <div>{{ totalPrice }}</div>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      price: 1
    }
  },
  computed: {
    totalPrice(){
      return this.$store.state.totalPrice
    }
  },
  methods: {
    increment(){
      // 使用 actions 派发事件
      this.$store.dispatch('increment_as', this.price)
    },
    decrement(){
      this.$store.commit('decrement', this.price)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
