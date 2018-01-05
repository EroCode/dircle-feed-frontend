<template>
<div>
    <article class="artsColle-item">
        <header>
                <div class="info">
                    <span>dimpurr</span>
                    <span>123 篇文章</span>
                </div>
                <h4>AVG 幕后</h4>
        </header>
        <ul>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
        </ul>
    </article>
    <article class="artsColle-item">
        <header>
                <div class="info">
                    <span>dimpurr</span>
                    <span>123 篇文章</span>
                </div>
                <h4>AVG 幕后</h4>
        </header>
        <ul>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
        </ul>
    </article>
    <article class="artsColle-item">
        <header>
                <div class="info">
                    <span>dimpurr</span>
                    <span>123 篇文章</span>
                </div>
                <h4>AVG 幕后</h4>
        </header>
        <ul>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
        </ul>
    </article>
    <article class="artsColle-item">
        <header>
                <div class="info">
                    <span>dimpurr</span>
                    <span>123 篇文章</span>
                </div>
                <h4>AVG 幕后</h4>
        </header>
        <ul>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
            <li><a href="#">【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试<span class="origin-tag">KeyFC</span></a></li>
        </ul>
    </article>
</div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            vue_name: 'm component'
        };
    }
};
</script>

<style scoped lang="scss">
@import "../../../vars.scss";

.artsColle-item {
    display: inline-block;
    width: 300px;
    overflow: hidden;
    margin: 0 12px;
    border: 1px solid $c-border;
    box-shadow: 0 0 $size-shadow-item $c-shadow;
    background-color: $c-bg-item;

    ul {
        @include flat-list-ul;
        li {
            a {
                display: block;
                max-width: 100%;
                box-sizing: border-box;
                padding: 10px 6px;
                font-size: $size-text-item;
                text-decoration: none;
                text-overflow: ellipsis;
                color: $c-text-item;
                border-top: 1px solid $c-border;
                &:hover {
                    background-color: $c-bg-item-hover;
                }

                .origin-tag {
                    float: right;
                    padding: 2px 4px;
                    background-color: $c-bg-tag;
                }
            }
        }
    }
}
</style>
