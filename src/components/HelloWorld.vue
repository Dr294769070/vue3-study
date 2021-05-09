<template>
  <h1>{{ msg }}</h1>
  <div>
    <p>{{ counter }}</p>
    <p>{{ dubCounter }}</p>
    <p>{{ other }}</p>
    <p ref="desc"></p>
  </div>
  <modal-btn></modal-btn>
</template>

<script>
import { computed, reactive, onMounted, onUnmounted, toRefs, ref, watch } from 'vue'
import ModalBtn from './ModalBtn.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    ModalBtn
  },
  setup() {
    // counter 相关
    const {counter, dubCounter} = useCounter()

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
      timer = setInterval(()=> {
        data.counter++
      }, 1000)
    })

    onUnmounted(() => {
      clearInterval(timer)
    })
    return toRefs(data)
}
</script>
 