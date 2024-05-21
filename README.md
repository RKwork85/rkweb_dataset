# 构建项目也要看教程 哭了
npm create vite@latest my-vue-app -- --template vue-ts

(就这个救命稻草)[https://dstweihao.cn/posts/vue%E5%BC%80%E5%8F%91/vue3-+-vite-+-typescript-+-bootstrap5-%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/]

main： vite + vue3 + bootstrap +  pinia + axios 来构建前端页面


先有个大体的规划吧：

>路由 + 视图 

根路由   view 
/work    ../view/client.vue

子路由               
/client     ../view/client.vue
/contract   ../view/contract.vue
/advertise  ../view/advertise.vue


>组件components
导航栏 + 网站介绍 + 工作台  |不变 

数据集格式    数据集内容   |改变

>持久化存储

用户信息，子路由做的数据集

>axios 就是和后台对接接口




now:
    undo list

    1 要抓紧把前端页面整合到项目中来  √ 渲染有问题
    summary: 
        1 首先把静态网页中引入需要的外部资源 比如说：js脚本， css文件， cdn； 在Vue根目录下的index.html引入
        2 js 文件后面有个 //# sourceMappingURL=popper.min.js.map 删除掉就不报错了
        3 路径替换掉 用style 去设置图片背景  要转换为 img标签
        4 还是有一些显示问题 我的天，de了两个bug，都是图片的显示问题...

    2 实现整体的逻辑
    


    