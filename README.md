# 创意库_视频制作工具

创意库_视频制作工具 前端交互设计稿，请参考：[https://ycusq0.axshare.com/#g=1&p=%E7%B4%A0%E6%9D%90%E5%BA%93%E8%B0%83%E7%94%A8%E9%A1%B5%E9%9D%A2]


## 入门

### 先决条件
* node 环境

### 开发前准备
先下载公共资源项目：
````
git clone git@git.jd.com:ads-fe/jztFeSeparation.git
````
新建projects文件，将本项目放入projects文件夹。


### 前端页面展示的安装与运行

克隆项目到本地
````
git clone git@git.jd.com:ads-fe/fe-video.git
````

安装相关依赖
````
npm i
````
启动之前，需要先打包第三方文件库，即生成dll文件夹
```
npm run dll
```
运行
````
npm run dev


````

## 后端模板制作的运行 (方案一：无头浏览器方案(前后端展示一致，效果不佳)；方案二查看src/geneVideo/README.md)

- 文件夹 src/until/ 是尺寸为640*360和360*640的动画，前后端展示一致
- 文件夹 src/geneVideo/ 是尺寸为1280*720和720*1280的动画，仅给后端生成视频使用


安装

```
npm  i parcel -g   (sudo npm  i parcel -g)
```

#### 不走webpack配置

安装 parcel,安装参考 [http://www.css88.com/doc/parcel/getting_started.html]

运行

```
parcel test.html


```
打开地址
tid=动画效果&templateType=模板类型(1横版视频,2竖版视频)

[http://localhost:1234/?tid=imageVertical&templateType=1&images=http://img1.360buyimg.com/picmaker/jfs/t16783/187/1734338110/91304/682b76a9/5ad72356N23ee2c2b.png&images=http://img1.360buyimg.com/picmaker/jfs/t18112/222/1795591495/60220/94e7c15e/5ad722f2N13126554.png&images=http://img1.360buyimg.com/picmaker/jfs/t16783/187/1734338110/91304/682b76a9/5ad72356N23ee2c2b.png&images=http://img1.360buyimg.com/picmaker/jfs/t18112/222/1795591495/60220/94e7c15e/5ad722f2N13126554.png&images=http://img1.360buyimg.com/picmaker/jfs/t16783/187/1734338110/91304/682b76a9/5ad72356N23ee2c2b.png]

[http://localhost:1234/?templateType=2&tid=imageVerticalArt&images=http://img11.360buyimg.com/n1/s640x360_jfs/t20902/307/393865642/91346/8068c452/5b0cb6e3N501059ee.jpg&images=http://img11.360buyimg.com/n1/s640x360_jfs/t20437/124/403483880/89789/d6956e90/5b0cb6e3N239467ff.jpg&images=http://img11.360buyimg.com/n1/s640x360_jfs/t22078/256/413623424/89745/2fc498c1/5b0cb6e3N8efb8cc3.jpg&images=http://img11.360buyimg.com/n1/s640x360_jfs/t22333/12/404423772/47656/6ffdf366/5b0cb777N97cbde8d.jpg&images=http://img11.360buyimg.com/n1/s640x360_jfs/t21262/75/401310122/48791/3842588e/5b0cb6efN0310988c.jpg&images=http://img11.360buyimg.com/n1/s640x360_jfs/t20650/229/416146103/116348/9fd9d1d8/5b0cb730Ncb3f2c71.jpg&images=http://img11.360buyimg.com/n1/s640x360_jfs/t19999/195/878037113/73602/c6e954f5/5b0cb747Nef0e7b68.jpg&images=http://img11.360buyimg.com/n1/s640x360_jfs/t22333/304/380128190/72861/8140c3a8/5b0cb749N9a7551e7.jpg]

[http://localhost:1234/?templateType=2&tid=imageVerticalArt&images=http://img11.360buyimg.com/n1/s1280x720_jfs/t20902/307/393865642/91346/8068c452/5b0cb6e3N501059ee.jpg&images=http://img11.360buyimg.com/n1/s1280x720_jfs/t20437/124/403483880/89789/d6956e90/5b0cb6e3N239467ff.jpg&images=http://img11.360buyimg.com/n1/s1280x720_jfs/t22078/256/413623424/89745/2fc498c1/5b0cb6e3N8efb8cc3.jpg&images=http://img11.360buyimg.com/n1/s1280x720_jfs/t22333/12/404423772/47656/6ffdf366/5b0cb777N97cbde8d.jpg&images=http://img11.360buyimg.com/n1/s1280x720_jfs/t21262/75/401310122/48791/3842588e/5b0cb6efN0310988c.jpg&images=http://img11.360buyimg.com/n1/s1280x720_jfs/t20650/229/416146103/116348/9fd9d1d8/5b0cb730Ncb3f2c71.jpg&images=http://img11.360buyimg.com/n1/s1280x720_jfs/t19999/195/878037113/73602/c6e954f5/5b0cb747Nef0e7b68.jpg&images=http://img11.360buyimg.com/n1/s1280x720_jfs/t22333/304/380128190/72861/8140c3a8/5b0cb749N9a7551e7.jpg]

打包到dist文件，给后端同学使用

```
parcel build test.html
```
## 运行测试用例

测试用例执行命令

暂无



## 部署



## 构建

* [Vue](https://cn.vuejs.org/) - 使用框架
* [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) - 服务

## 版本
0.0.1: 动画demo制作

## 开发者

* 黄海金 - <huanghaijin@jd.com>


## 参考

参考今日头条

[https://ad.toutiao.com]
账号：zhangshiyuan1@jd.com
密码：单独咚咚- huanghaijin3

## 致谢

* 感谢

