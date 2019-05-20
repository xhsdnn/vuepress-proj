<template>
    <div class="profile">
        <img :src="'/images/'+info.url" alt="图片显示异常" />
        <div>
            <h4 v-if="info.label">{{info.label}}</h4>
            {{info.des}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: {
            type: Object,
            default: {}
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
