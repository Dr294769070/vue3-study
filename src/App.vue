<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <todos></todos>
</template>

<script>
import HelloWorld from './pages/HelloWorld.vue'
import Todos from './pages/todos/todos.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Todos
  }
}
</script>
