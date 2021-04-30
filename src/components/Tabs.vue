<template>
    <div id="tabs-bar-container" class="tabs-bar-container">
        <el-tabs
            v-model="tabActive"
            type="card"
            class="tabs-content"
            @tab-click="handleTabClick"
            @tab-remove="handleTabRemove"
        >
            <el-tab-pane
                v-for="item in visitedRoutes"
                :key="item.path"
                :label="item.meta.title"
                :name="item.path"
                :closable="!isAffix(item)"
            ></el-tab-pane>
        </el-tabs>

        <el-dropdown @command="handleCommand">
            <span style="cursor: pointer">
                更多操作
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
                <el-dropdown-menu class="tabs-more">
                    <el-dropdown-item command="closeOtherstabs">
                        关闭其他
                    </el-dropdown-item>
                    <el-dropdown-item command="closeLefttabs">
                        关闭左侧
                    </el-dropdown-item>
                    <el-dropdown-item command="closeRighttabs">
                        关闭右侧
                    </el-dropdown-item>
                    <el-dropdown-item command="closeAlltabs">
                        关闭全部
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Tabs",
    data() {
        return {
            affixtabs: [],
            tabActive: "",
        };
    },
    computed: {
        ...mapGetters({
            visitedRoutes: "tabs/visitedRoutes",
            routes: "routes/routes",
        }),
    },
    methods: {
        async handleTabRemove(tabActive) {
            let view;
            this.visitedRoutes.forEach((item) => {
                if (tabActive == item.path) {
                    view = item;
                }
            });
            const { visitedRoutes } = await this.$store.dispatch(
                "tabs/delRoute",
                view
            );
            if (this.isActive(view)) {
                this.toLastTag(visitedRoutes, view);
            }
        },
        handleTabClick(tab) {
            const route = this.visitedRoutes.filter((item, index) => {
                if (tab.index == index) return item;
            })[0];
            if (this.$route.path !== route.path) {
                this.$router.push({
                    path: route.path,
                    query: route.query,
                    fullPath: route.fullPath,
                });
            } else {
                return false;
            }
        },
        isActive(route) {
            return route.path === this.$route.path;
        },
        isAffix(tag) {
            return tag.meta && tag.meta.affix;
        },
        inittabs() {
            // console.log(this.$store.state.tabs.visitedRoutes);
            // console.log(this.routes);
            const affixtabs = (this.affixtabs = this.filterAffixtabs(
                this.routes
            ));
            for (const tag of affixtabs) {
                if (tag.name) {
                    this.$store.dispatch("tabs/addVisitedRoute", tag);
                }
            }
        },
        addtabs() {
            const { name } = this.$route;
            if (name) {
                this.$store.dispatch("tabs/addVisitedRoute", this.$route);
            }
            return false;
        },
        filterAffixtabs(routes, basePath = "/") {
            let tabs = [];
            routes.forEach((route) => {
                if (route.meta && route.meta.affix) {
                    const tagPath = basePath + route.path;
                    tabs.push({
                        fullPath: tagPath,
                        path: tagPath,
                        name: route.name,
                        meta: { ...route.meta },
                    });
                }
                if (route.children) {
                    const temptabs = this.filterAffixtabs(
                        route.children,
                        route.path
                    );
                    if (temptabs.length >= 1) {
                        tabs = [...tabs, ...temptabs];
                    }
                }
            });
            // console.log(tabs);
            return tabs;
        },
        toLastTag(visitedRoutes) {
            const latestView = visitedRoutes.slice(-1)[0];
            if (latestView) {
                this.$router.push(latestView);
            } else {
                this.$router.push("/");
            }
        },
        handleCommand(command) {
            switch (command) {
                case "refreshRoute":
                    this.refreshRoute();
                    break;
                case "closeOtherstabs":
                    this.closeOtherstabs();
                    break;
                case "closeLefttabs":
                    this.closeLefttabs();
                    break;
                case "closeRighttabs":
                    this.closeRighttabs();
                    break;
                case "closeAlltabs":
                    this.closeAlltabs();
                    break;
            }
        },
        async closeSelectedTag(view) {
            const { visitedRoutes } = await this.$store.dispatch(
                "tabs/delRoute",
                view
            );
            if (this.isActive(view)) {
                this.toLastTag(visitedRoutes, view);
            }
        },
        async closeOtherstabs() {
            const view = await this.toThisTag();
            await this.$store.dispatch("tabs/delOthersRoutes", view);
        },
        async closeLefttabs() {
            const view = await this.toThisTag();
            await this.$store.dispatch("tabs/delLeftRoutes", view);
        },
        async closeRighttabs() {
            const view = await this.toThisTag();
            await this.$store.dispatch("tabs/delRightRoutes", view);
        },
        async closeAlltabs() {
            const view = await this.toThisTag();
            const { visitedRoutes } = await this.$store.dispatch(
                "tabs/delAllRoutes"
            );
            if (this.affixtabs.some((tag) => tag.path === view.path)) {
                return;
            }
            this.toLastTag(visitedRoutes, view);
        },
        async toThisTag() {
            const view = this.visitedRoutes.filter((item) => {
                if (item.path === this.$route.fullPath) {
                    return item;
                }
            })[0];
            if (this.$route.path !== view.path) this.$router.push(view);
            return view;
        },
    },
    watch: {
        $route: {
            handler() {
                this.inittabs();
                this.addtabs();
                let tabActive = "";
                this.visitedRoutes.forEach((item) => {
                    if (item.path === this.$route.path) {
                        tabActive = item.path;
                    }
                });
                this.tabActive = tabActive;
            },
            immediate: true,
        },
    },
    // watch:{
    //     $route(){
    //         console.log(this.$route.matched.filter(
    //             (item) => item.name && item.meta.title
    //         ));
    //         console.log(this.$route.matched);
    //     }
    // }
};
</script>

<style scoped lang='less'>
.tabs-bar-container {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin: 0 5px; */
    padding: 0 20px 0 5px;
    background-color: white;
}
.tabs-content {
    width: calc(100% - 90px);
}
::v-deep {
    .el-tabs__header {
        margin: 0;
    }
}
</style>