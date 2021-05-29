<template>
    <div>
        <edit-todo 
            v-model:todo-title="newTodo"
            placeholder="请输入待办事项"
            @keyup.enter="addTodo"
            @blur="addTodo"></edit-todo>
        <button @click="reset">一键清空</button>
        <ul>
            <todo-item v-for="item in filterTodos"
                :key="item.id" :item="item" v-model:editTodo="editTodo"></todo-item>
        </ul>
        <div>
            <div @click="filterStatus = 'all'">all</div>
            <div @click="filterStatus = 'active'">active</div>
            <div @click="filterStatus = 'over'">over</div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs, computed, watchEffect } from 'vue'
import TodoItem from './todoItem.vue'

const filter = {
    all(todos) {
        return todos
    },
    active(todos) {
        return todos.filter(it => !it.complete)
    },
    over(todos) {
        return todos.filter(it => it.complete)
    }
}
const todoStroage = {
    fetch() {
        const todos = JSON.parse(localStorage.getItem('vue3-todos')) || []
        return todos
    },
    save(todos) {
        if (Array.isArray(todos)) {
            todos = todos.filter(it => it.id)
            localStorage.setItem('vue3-todos', JSON.stringify(todos))
        }
    }
}


// 想要实现的功能 
// 1、加勾选框，控制是否完成 over
// 2、双击lavel，转为编辑状态。enter或者失焦确定，escape取消 over
// 3、选中自动聚焦，用directive over
// 4、使用计算属性，设置过滤器
// 5、使用localstroage保存数据，并且用watch监听

export default {
    components: {
        TodoItem
    },
    setup() {
        const state = reactive({
            newTodo: '',
            todos: todoStroage.fetch(),
            editTodo: null, // todo 这种写法比较合适
            editBak: '',
            filterStatus: 'all',
            filterTodos: computed(() => {
                return filter[state.filterStatus](state.todos)
            })
        })
        function addTodo() {
            if (state.newTodo) {
                state.todos.push({
                    id: state.todos.length + 1,
                    title: state.newTodo,
                    complete: false
                })
                state.newTodo = ''
            }
        }
        function reset() {
            state.todos = []
            todoStroage.save([])
        }
        watchEffect(() => {
            todoStroage.save(state.todos) // 类似于计算属性，自动收集了依赖，不用再在参数里指定
        })

        return {
            ...toRefs(state),
            addTodo,
            reset
        }
    }
}
</script>

<style scoped>
</style>