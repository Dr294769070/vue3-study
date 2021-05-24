import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import EditTodo from './pages/todos/editTodo.vue'

createApp(App).
    component('EditTodo', EditTodo).
    mount('#app')
