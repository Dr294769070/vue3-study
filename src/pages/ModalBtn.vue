<template>
  <div class="modal-btn-container">
      <button @click="show = !show">改变显示</button>
      <teleport to="body">
                <div class="modal-bg" v-if="show">
          <div class="text">modal弹窗</div>
          <button @click="show = !show">关闭弹窗</button>
      </div>
      </teleport>
  </div>
</template>

<script>
export default {
  name: 'ModalBtn',
  data() {
      return{
          show: false
      }
  }
}
</script>
<style scoped>
.modal-bg{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
}
.modal-bg .text{
        color: #fff;
        line-height: 30px;
        text-align: center;
}
</style>
 