<template>
<div>
    <section>
        <h3>文章集</h3>
        <div class="hor">
            <articlesColle_list></articlesColle_list>
        </div>
    </section>
</div>
</template>

<script>
import horwheel from 'horwheel';
import articlesColle_list from './common/articlesColle_list.vue';

module.exports = {
    data: function() {
        return {
            vue_name: 'd component'
        };
    },
    components: {
        articlesColle_list
    },
    mounted() {
        horwheel(document.querySelector('.hor'));
    }
};
</script>

<style scoped lang="scss">
p {
    color: #00F;
}
</style>
