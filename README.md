# dircle-feed-frontend
The frontend of dricle feed

## URL

* # // 登录前首页 (登录+发现)
* 导航类
    * #/my // 我的
    * #/subscribe // 订阅
    * #/discover // 发现
        * #/discover/topics/(acg) // 话题
* 内容类
    * #/articles/(1234567890) // ArticlesColle
        * #/articles/(1234567890)/edit // 编辑模式
        * #/articles/(1234567890)/comments // 讨论版
        * #/articles/(1234567890)/i/(09876543321) // 单篇文章视图
    * #/feeds/(1234567890) // FeedsColle
        * ...
    * #/links/(1234567890) // LinksColle
        * ...
* 功能类
    * #/register // 注册
    * #/user/(dimpurr) // 个人主页
    * #/user/(dimpurr)/setting // 设置

## Command

```bash
npm install
# webpack build
npm run build
# dev server 127.0.0.1:8010
npm run dev
# mock server 127.0.0.1:3000
npm run mock
```

## Technology Stack

* Webpack
* JavaScript
    * ECMAScript 6
    * lodash
    * Babel
    * ESLint
* MVVM
    * Vue
    * Vuex
    * vue-router
    * axios
    * json-server // for mock
* CSS
    * PostCSS
    * cssnext