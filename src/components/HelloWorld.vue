<template>
  <div class="hello">
    <input type="text" v-model.number="myVal">
    <myComponent :my-val="myVal" @my-event="getMyEvent">
      <p> I'm a Slot</p>
    </myComponent>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import myComponent from './diy';
export default {
  name: 'HelloWorld',
  components: { myComponent },
  data () {
    return {
      myVal: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getMyEvent(msg){
      console.log(' i got my event ' + msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
