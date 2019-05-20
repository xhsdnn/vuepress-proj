# 基于vuepress的静态站点 —— 诗词鉴赏

1.启动

```
git clone https://github.com/xhsdnn/vuepress-proj.git

cd vuepress-proj

npm run dev
```

2.打包成静态资源

```
npm run build
```

> 生成到根目录`_site`的文件夹中。

3.部署

```
sh deploy.sh
```

> 或者手动将`_site`中的内容提交到想要提交github仓库的`gh-pages`分支上，查看地址：https://\<USERNAME\>.github.io/\<REPO\>
