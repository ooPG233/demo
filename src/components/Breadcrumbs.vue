<template>
    <el-breadcrumb class="breadcrumb-container" separator=">">
        <el-breadcrumb-item v-for="item in list" :key="item.path">
            {{ item.meta.title }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    name: "Breadcrumbs",
    data() {
        return {
            list: this.getBreadcrumb(),
        };
    },
    watch: {
        $route() {
            this.list = this.getBreadcrumb();
        },
    },
    methods: {
        getBreadcrumb() {
            return this.$route.matched.filter(
                (item) => item.name && item.meta.title
            );
        },
    },
};
</script>

<style scoped>
.breadcrumb-container {
    margin-left: 10px;
}
.el-breadcrumb__separator {
    margin: 0 5px;
}
</style>