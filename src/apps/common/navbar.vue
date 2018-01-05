<template>
<nav>
    <div class="ctn">
        <h1>Dircle Feed</h1>
        <router-link to="/welcome">Welcome</router-link>
        <router-link to="/subscribe">Subscribe</router-link>
        <router-link to="/my">My Collections</router-link>
        <router-link to="/discover">Discover</router-link>
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
nav {
    h1 {
        display: inline-block;
        margin-right: 10px;
        font-size: 18px;
        font-weight: normal;
        color: #333;
    }
}
</style>
