<template>
    <div class="profile">
        <img :src="stuff + '../../images/'+info.url" alt="图片显示异常" />
        <div>
            <h4 v-if="info.label">{{info.label}}</h4>
            {{info.des}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stuff: ''
        }
    },
    props: {
        info: {
            type: Object,
            default: {}
        }
    },
    mounted() {
        // 判断如果是国际化的非默认语言，层级加深一级
        let currentPath = this.$page.path;
        let localeKeys = Object.keys(this.$site.locales);
        for(let i=0; i<localeKeys.length; i++) {
            let key = localeKeys[i];
            if(key !== '/' && currentPath.indexOf(key) !== -1) {
                this.stuff = '../';
                return;
            }
        }
    }
};
</script>

<style>
@media screen and (min-width: 900px) {
    .profile {
        display: flex;
        align-items: center;
    }
    .profile img {
        height: 200px;
        margin: 20px 30px 0 0;
    }
}
</style>
