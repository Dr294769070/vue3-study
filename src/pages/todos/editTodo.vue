<template>
    <input
        type="text"
        :value="todoTitle"
        @input="onInputChange"
        v-bind="$attrs"
    />
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    props: {
        todoTitle: {
            type: String,
            default: ''
        }
    },
    methods: {
        onInputChange(e) {
            this.$emit('update:todoTitle', e.target.value)
        }
    }
}
</script>

<style scoped>
</style>