<template>
<div>
    <article class="colleItem" v-for="item in list">
        <header>
                <div class="info">
                    <span>{{ item.meta.author }}</span>
                    <span>{{ item.meta.count }} {{ item.meta.count_unit }}</span>
                </div>
                <h4>{{ item.meta.title }}</h4>
        </header>
        <ul>
            <li v-for="list_item in item.item_list"><a :href="list_item.link">
                <span class="h">{{ list_item.title }}</span>
                <span class="origin-tag">{{ list_item.tag }}</span>
            </a></li>
        </ul>
    </article>
</div>
</template>

<script>
module.exports = {
    data: function() {
        let MOCK_ITEM = {
            meta: {
                author: 'dimpurr',
                author_link: '#',
                count: '123',
                count_unit: '篇文章',
                title: 'AVG 幕后'
            },
            item_list: [
                {
                    title: '【充满dfgdfAVG《意识流》中篇标题尽可能的长测试',
                    link: '#',
                    tag: '机核'
                },{
                    title: '念性AVG',
                    link: '#',
                    tag: 'KeyFC'
                },{
                    title: '【充满了爱】原创概念性AVG《意识流》中篇标题尽可能的长测试',
                    link: '#',
                    tag: '很长是不行的很长不行的'
                },{
                    title: '充满了爱！1234原创概念性AVG《意识流》中篇标题尽可能的长测试',
                    link: '#',
                    tag: '很长是不行的'
                },{
                    title: '原创fdg概念性AVG《意识流》中篇标题尽可能的长测试',
                    link: '#',
                    tag: 'KeyFC'
                }
            ]
        };
        return {
            list: [
                MOCK_ITEM,
                MOCK_ITEM,
                MOCK_ITEM,
                MOCK_ITEM
            ]
        };
    }
};
</script>

<style scoped lang="scss">
@import "../../../vars.scss";
$size-pd-item: 6px;

.colleItem {
    display: inline-block;
    width: 300px;
    overflow: hidden;
    margin: 0 12px;
    border: 1px solid $c-border;
    border-radius: $size-radius-small;
    box-shadow: 0 0 $size-shadow-item $c-shadow;
    background-color: $c-bg-item;

    ul {
        @include flat-list-ul;
        li {
            a {
                display: flex;
                max-width: 100%;
                box-sizing: border-box;
                padding: $size-pd-item+4px $size-pd-item;
                font-size: $size-text-item;
                text-decoration: none;
                color: $c-text-item;
                border-top: 1px solid $c-border;
                &:hover {
                    background-color: $c-bg-item-hover;
                }

                .h {
                    flex-shrink: 1;
                    flex-grow: 1;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin-top: 1px;
                }
                .origin-tag {
                    flex-shrink: 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 100px;
                    margin-top: -1px;
                    padding: 2px 4px;
                    color: $c-text-tag;
                    background-color: $c-bg-tag;
                }
            }
        }
    }
}
</style>
