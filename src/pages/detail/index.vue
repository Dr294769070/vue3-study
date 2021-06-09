<template>
    <div>
        <div>
            <div class="form-item">
                <span>文件名：</span>
                <span>{{Key}}</span>
            </div>
        </div>
        <div>
            <img v-if="imgUrl" :src="imgUrl" />
            <video controls name="media" autoplay v-else-if="videoUrl">
                <source :src="videoUrl">
            </video>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            Key: 'video-test.mp4', // 'build.png',
            imgUrl: '',
            videoUrl: ''
        })
        onMounted(() => {
            const headUrl = 'https://frank-1302698468.cos.ap-beijing.myqcloud.com/'
            state.videoUrl = headUrl + state.Key
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>