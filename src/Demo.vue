<template >
    <div id="demo">
        <el-container>
            <el-aside width="auto" class="left-wrap">
                <Slider></Slider>
            </el-aside>
            <el-container
                class="right-wrap"
                :class="collapse ? 'is-collapse-right' : ''"
            >
                <el-header class="header" height="100px">
                    <Header></Header>
                </el-header>

                <el-scrollbar height="calc(100vh - 100px)">
                    <el-main>
                        <router-view v-slot="{ Component }">
                            <keep-alive>
                                <component :is="Component"></component>
                            </keep-alive>
                        </router-view>
                    </el-main>
                    <el-footer>Footer</el-footer>
                </el-scrollbar>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
// import Index from '@/views/Index'
import Slider from "./components/Slider";
import Header from "./components/Header";
export default {
    name: "Demo",
    components: {
        Slider,
        Header,
    },
    methods: {
        click1: () => {
            console.log(this);
        },
    },
    computed: {
        ...mapGetters({
            collapse: "settings/collapse",
        }),
    },
};
</script>

<style scoped>

.left-wrap {
    position: fixed;
    left: 0;
    top: 0;
    /* background-color: #2c3e50; */
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.17);
}
.right-wrap {
    margin-left: 200px;
    width: calc(100% - 200px);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border 0s,
        background 0s, color 0s, font-size 0s;
    background-color: rgb(246, 248, 249);
}
.is-collapse-right {
    margin-left: 64px;
    width: calc(100% - 64px);
}
.header {
    padding: 0px 0px;
    /* border-bottom: 2px solid whitesmoke; */
    /* box-shadow: 5px 1px 8px 0 rgba(0, 0, 0, 0.2); */
}
.el-main {
    padding: 10px;
}

</style>