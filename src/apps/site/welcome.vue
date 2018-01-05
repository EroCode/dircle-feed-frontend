<template>
    <p>I'm {{ vue_name }} !</p>
</template>

<script>
module.exports = {
    data: function() {
        return {
            vue_name: 'w component'
        };
    }
};
</script>

<style scoped lang="scss">
p {
    color: #00F;
}
</style>
