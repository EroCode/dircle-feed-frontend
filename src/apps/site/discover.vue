<template>
<div>
    <section>
        <h3>文章集</h3>
        <div class="hor">
            <colleItem></colleItem>
        </div>
    </section>
</div>
</template>

<script>
import horwheel from 'horwheel';
import colleItem from './common/colleItem.vue';

module.exports = {
    data: function() {
        return {
            vue_name: 'd component'
        };
    },
    components: {
        colleItem
    },
    mounted() {
        horwheel(document.querySelector('.hor'));
    }
};
</script>

<style scoped lang="scss">
@import "../../vars.scss";

section {
    & > h3 {
        margin-left: 10px;
        font-weight: normal;
        color: $c-text-h;
    }
}
</style>
