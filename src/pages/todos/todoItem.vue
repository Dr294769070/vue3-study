<template>
    <li
        :class="{ complete: item.complete, editing: item == editTodo }"
    >
        <div class="normal">
            <input type="checkbox" v-model="item.complete" />
            <label @dblclick="edit(item)">{{ item.title }}</label>
        </div>
        <edit-todo
            v-auto-focus="item == editTodo"
            class="edit-input"
            v-model:todo-title="item.title"
            @blur="done"
            @keyup.enter="done"
            @keyup.esc="cancel(item)"
        ></edit-todo>
    </li>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            require: true
        },
        editTodo: {
            type: Object,
            default: null
        },
        editBak: {
            type: String,
            default: ''
        }
    },
    directives: {
        'auto-focus': (el, binding) => {
            if (binding.value) {
                el.focus()
            }
        }
    },
    methods: {
        edit(todo) {
            this.$emit('update:editTodo', todo)
            this.$emit('update:editBak', todo.title)
            console.log('aa', this.editTodo, this.editBak)
            // state.editTodo = todo
            // state.editBak = todo.title
        },
        done() {
            this.$emit('update:editTodo', null)
        },
        cancel(todo) {
            todo.title = this.editBak
            this.$emit('update:editTodo', null)
            this.$emit('update:editBak', '')
            // state.editBak = ''
            // state.editTodo = null
        }
    }
}
</script>

<style scoped>
.complete label {
    text-decoration: line-through;
}

.normal,
.editing .edit-input {
    display: block;
}
.edit-input,
.editing .normal {
    display: none;
}
</style>