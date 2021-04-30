<template>
    <div class="index" @click="click1">
          
    </div>
</template>

<script>
export default {
    name:'Index',
    data() {
        return {
            test:1
        }
    },
    methods: {
        click1(){
            console.log(this.$route.matched.filter(
                item=>item.name && item.meta.title
            ));
            console.log(this.$route.matched);
        }
    },
}
</script>

<style>
    .index {
        width: 100%;
        height: 100vh;    
    }
</style>