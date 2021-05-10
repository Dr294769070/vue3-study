<template>
    <div class="" @click="handleClick">
        {{comNum}}
    </div>
    <div @click="clickAnother">
        {{anotherNum}}
    </div>
</template>

<script>
    export default {
        props: {
            comNum: {
                type: Number,
                default: 0
            },
            anotherNum: {
                type: Number,
                default: 0
            }
        },
        methods: {
            handleClick() {
                this.$emit('update:comNum', this.comNum + 1)
            },
            clickAnother() {
                this.$emit('update:anotherNum', this.anotherNum + 1)
            }
        }
    }
</script>

<style scoped>

</style>