<template>
    <el-scrollbar height="100vh" class="slider-bar">
        <el-menu class="el-menu-vertical" :collapse="collapse" router>
            <el-submenu index="1">
                <template #title>
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <template #title>分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template #title>选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <template #title>导航二</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <template #title>导航三</template>
            </el-menu-item>
            <el-menu-item index="/menu/test">
                <i class="el-icon-setting"></i>
                <template #title>导航四</template>
            </el-menu-item>
            <el-menu-item index="/menu/test2">
                <i class="el-icon-setting"></i>
                <template #title>导航五</template>
            </el-menu-item>
            <el-menu-item index="/menu/test3">
                <i class="el-icon-setting"></i>
                <template #title>导航六</template>
            </el-menu-item>
            <el-menu-item index="/menu/test4">
                <i class="el-icon-setting"></i>
                <template #title>导航七</template>
            </el-menu-item>
            <el-menu-item index="/menu/test5">
                <i class="el-icon-setting"></i>
                <template #title>导航八</template>
            </el-menu-item>
            <el-menu-item index="/menu/test6">
                <i class="el-icon-setting"></i>
                <template #title>导航九</template>
            </el-menu-item>
            <el-menu-item index="/menu/test7">
                <i class="el-icon-setting"></i>
                <template #title>导航十</template>
            </el-menu-item>
            <el-menu-item index="/menu/test8">
                <i class="el-icon-setting"></i>
                <template #title>导航十一</template>
            </el-menu-item>
            <el-menu-item index="/menu/test9">
                <i class="el-icon-setting"></i>
                <template #title>导航十二</template>
            </el-menu-item>
            <el-menu-item index="/menu/test10">
                <i class="el-icon-setting"></i>
                <template #title>导航十三</template>
            </el-menu-item>
            <el-menu-item index="/menu/test11">
                <i class="el-icon-setting"></i>
                <template #title>导航十四</template>
            </el-menu-item>
            <el-menu-item index="/menu/test12">
                <i class="el-icon-setting"></i>
                <template #title>导航十五</template>
            </el-menu-item>
            <el-menu-item index="/menu/test13">
                <i class="el-icon-setting"></i>
                <template #title>导航十六</template>
            </el-menu-item>
            <el-menu-item index="/menu/test14">
                <i class="el-icon-setting"></i>
                <template #title>导航十七</template>
            </el-menu-item>
            <el-menu-item index="/menu/test15">
                <i class="el-icon-setting"></i>
                <template #title>导航十八</template>
            </el-menu-item>
            <el-menu-item index="/menu/test16">
                <i class="el-icon-setting"></i>
                <template #title>导航十九</template>
            </el-menu-item>
        </el-menu>
    </el-scrollbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "Slider",
    data() {
        return {
            isCollapse: true,
        };
    },
    computed: {
        ...mapGetters({
            collapse: "settings/collapse",
        }),
    },
    methods: {
        ...mapActions({
            changeCollapse: "settings/changeCollapse",
        }),
        handleCollapse() {
            this.changeCollapse();
            // console.log(this.collapse);
        },
    },
};
</script>

<style scoped>
.fold-unfold {
    cursor: pointer;
    font-size: 20px;
    position: relative;
    top: 0;
    left: 10px;
    /* z-index: 999; */
}
.el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
}
.slider-bar {
    background-color: whitesmoke;
}
.el-menu {
    background-color: whitesmoke;
    border: none;
}
</style>