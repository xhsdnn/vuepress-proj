<template>
    <div class="show-panel">
        <p v-for="(line, index) in content" :key="index" :class="{title: index==0, line: index>1}">
            <span>{{line}}</span>
        </p>
    </div>
</template>

<script>
import WorkData from "../data.js";

export default {
    data() {
        return {
            content: ""
        };
    },
    mounted() {
        let currentWork = this.$page.path
            .match(/[a-z]*\.html/g)[0]
            .replace(".html", "");
        this.content = WorkData[currentWork].split("|");
    }
};
</script>

<style scoped>
.show-panel {
    text-align: center;
}
.title {
    font-size: 28px;
    font-weight: bold;
}
.line {
    font-size: 20px;
}
</style>
