<template>
<div>
    <navbar></navbar>

    <!-- <div>
        <h3>Components</h3>
        <p>{{ vue_hello }} MUGI</p>
        <test></test>

        <h3>Router</h3>
        <p>
            <router-link to="/test">Go to Test</router-link>
        <!-- </p> -->
        <router-view></router-view>

        <!-- <el-container> 
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>

    </div> -->

    <foot></foot>
</div>
</template>

<script>
import navbar from './apps/common/navbar.vue';
import foot from './apps/common/foot.vue';

module.exports = {
    data: function () {
        return {
            vue_hello: 'hello'
        };
    },
    components: {
        navbar: navbar,
        foot: foot
    }
};
</script>

<style scoped lang="scss">
    p {
        color: #777;
    }
</style>