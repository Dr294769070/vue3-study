<template>
    <h1>{{ msg }}</h1>
    <div>
        <p>{{ counter }}</p>
        <p>{{ dubCounter }}</p>
        <p>{{ other }}</p>
        <p ref="desc"></p>
    </div>
    <modal-btn></modal-btn>
    <comp v-model:comNum="comNum" v-model:anotherNum="anotherNum"></comp>
    <renderTest v-model:comNum="comNum"></renderTest>
    <!-- 函数式组件 -->
    <Functional level='2'>一段slot文本</Functional>
    <!-- 异步组件 -->
    <!-- 异步组件有什么用？ -->
    <async-comp></async-comp>
</template>

<script>
import { computed, reactive, onMounted, onUnmounted, toRefs, ref, watch, h, defineAsyncComponent } from 'vue'
import ModalBtn from './ModalBtn.vue'
import comp from './comp.vue'
import Functional from './Functional.vue'

export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    components: {
        ModalBtn,
        comp,
        Functional,
        renderTest: {
            props: {
                comNum: {
                    type: Number,
                    default: 1
                }
            },
            render() {
                const that = this
                return h('div', [
                    h('div', {
                        onClick() {
                            that.clickMe()
                        }
                    }, 'i am render test' + that.comNum)
                ])
            },
            methods: {
                clickMe() {
                    this.$emit('update:comNum', this.comNum + 1)
                }
            }
        },
        AsyncComp: defineAsyncComponent(() => import('./asyncComp.vue'))
    },
    data() {
        return {
            comNum: 1,
            anotherNum: 1
        }
    },
    setup() {
        // counter 相关
        const { counter, dubCounter } = useCounter()

        // 其他 单值响应式
        const other = ref('some msg')

        // ref
        const desc = ref(null)
        watch(counter, (newVal, oldVal) => {
            desc.value.textContent = `counter change from ${oldVal} to ${newVal}`
        })

        return {
            counter,
            dubCounter,
            other,
            desc
        }
    }
}

function useCounter() {
    const data = reactive({
        counter: 1,
        dubCounter: computed(() => data.counter * 2)
    })

    let timer

    onMounted(() => {
        timer = setInterval(() => {
            data.counter++
        }, 1000)
    })

    onUnmounted(() => {
        clearInterval(timer)
    })
    return toRefs(data)
}
</script>
 