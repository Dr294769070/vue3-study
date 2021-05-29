import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import App from './App.vue'
import './index.css'
import EditTodo from './pages/todos/editTodo.vue'
import UploadFile from './components/upload-file/index.vue'

createApp(App).
    use(ElementPlus).
    component('EditTodo', EditTodo).
    component('UploadFile', UploadFile).
    mount('#app')
