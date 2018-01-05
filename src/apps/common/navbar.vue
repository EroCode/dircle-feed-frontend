<template>
<nav>
    <div class="ctn">
        <h1>Dircle Feed</h1>
        <router-link to="/welcome">欢迎</router-link>
        <router-link to="/my">我的</router-link>
        <router-link to="/subscribe">订阅</router-link>
        <router-link to="/discover">发现</router-link>
        <el-button type="text" icon="el-icon-search">搜索</el-button>
    </div>
</nav>
</template>

<script>
module.exports = {
    data: function() {
        return {
            vue_name: 'navbar'
        };
    }
};
</script>

<style scoped lang="scss">
@import "../../vars.scss";

nav {

    h1 {
        display: inline-block;
        margin-right: 10px;
        font-size: 18px;
        font-weight: normal;
        color: #333;
        cursor: pointer;
    }

    a {
        margin: 0 8px;
        padding: 3px 2px;
        font-weight: 500;
        color: $c-link-dark;
        text-decoration: none;

        @mixin nav-border($color) {
            border-bottom: 2px solid $color;
        }

        &:hover {
            @include nav-border($c-border);
        }

        &:active, &.router-link-active {
            @include nav-border($c-link-dark);
        }
    }

    .el-button {
        float: right;
        margin-top: 2px;
        color: $c-link-dark;
    }
}
</style>
