<template>
    <div @click="handleChange" v-if="showFullScreenBtn" class="full-screen-btn-con">
        <Tooltip :content="value ? '退出全屏' : '全屏'" placement="bottom">
            <Icon :type="value ? 'md-medical' : 'ios-expand'" :size="23"/>
        </Tooltip>
    </div>
</template>

<script lang="ts">
import {
    Component,
    Vue,
    Provide,
    Prop
} from 'vue-property-decorator';

@Component({})
export default class FullScreen extends Vue {
    @Prop({
        type: Boolean,
        default: false
    }) value ? : boolean

    get showFullScreenBtn() {
        return window.navigator.userAgent.indexOf('MSIE') < 0;
    }

    handleFullscreen() {
        let main = (document.body as any);
        let de = (document as any);  // 转换为any 将不进行类型检查
        if (this.value) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (de.mozCancelFullScreen) {
                de.mozCancelFullScreen();
            } else if (de.webkitCancelFullScreen) {
                de.webkitCancelFullScreen();
            } else if (de.msExitFullscreen) {
                de.msExitFullscreen();
            }
        } else {
            if (main.requestFullscreen) {
                main.requestFullscreen();
            } else if (main.mozRequestFullScreen) {
                main.mozRequestFullScreen();
            } else if (main.webkitRequestFullScreen) {
                main.webkitRequestFullScreen();
            } else if (main.msRequestFullscreen) {
                main.msRequestFullscreen();
            }
        }
    }

    handleChange() {
        this.handleFullscreen();
    }
    created() {
        // console.log(this.value)
        // let isFullscreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
        // isFullscreen = !!isFullscreen;
        // document.addEventListener('fullscreenchange', () => {
        //     this.$emit('input', !this.value);
        //     this.$emit('on-change', !this.value);
        // });
        // document.addEventListener('mozfullscreenchange', () => {
        //     this.$emit('input', !this.value);
        //     this.$emit('on-change', !this.value);
        // });
        // document.addEventListener('webkitfullscreenchange', () => {
        //     this.$emit('input', !this.value);
        //     this.$emit('on-change', !this.value);
        // });
        // document.addEventListener('msfullscreenchange', () => {
        //     this.$emit('input', !this.value);
        //     this.$emit('on-change', !this.value);
        // });
        // this.$emit('input', isFullscreen);
    }
};
</script>
