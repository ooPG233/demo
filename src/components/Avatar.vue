<template>
    <el-dropdown>
        <span class="avatar-dropdown">
            <!--<el-avatar class="user-avatar" :src="avatar"></el-avatar>-->
            <img class="user-avatar"  alt="" />
            <div class="user-name">
                <!-- {{ username }} -->
                <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item command="logout" divided>
                    退出登录
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script>
export default {
    name: "Avatar",
};
</script>

<style>
.avatar-dropdown {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    height: 50px;
    padding: 0;
}
.user-avatar {
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
}

.user-name {
    position: relative;
    margin-left: 5px;
    margin-left: 5px;
    cursor: pointer;
}
</style>