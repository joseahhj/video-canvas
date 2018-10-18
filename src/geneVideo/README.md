- canvas版本  "canvas": "^2.0.0-alpha.11"，[安装参考] (https://www.npmjs.com/package/canvas)

   ```
   npm install canvas (需要先安装xcode)
   
   ```

- 启动需要传参数，如下：
    1）tid 是动画名称
    ```
    imageZoomOut//缩放
    imageArt//擦除
    imageGrid //网格
    imageRotate //开合
    imageFlash //图文快闪
    imageVerticalArt//竖版擦除
    imageVerticalGrid//竖版网格
    imageVerticalRotate//竖版开合
    imageVerticalFlash//竖版图文快闪
    imageVerticalZoomOut //竖版缩放
    imageVertical //竖版通用
    imageVerticalDivide // 图文分割
    
    ```
    2）templateType是尺寸："1":1280*720；"2":720*1280
    3) images是图片地址
    4）变量'./images/'是截图保存的地址，

- 在iterm下执行下面命令

```
node testCanvas.js 'tid=imageZoomOut&templateType=1&images=../assets/imgs/8.png&images=../assets/imgs/6.png&images=../assets/imgs/7.png&images=../assets/imgs/6.png&images=../assets/imgs/8.png&images=../assets/imgs/7.png&images=../assets/imgs/4.png&images=../assets/imgs/6.png&images=../assets/imgs/8.png&images=../assets/imgs/7.png' './images/'
```
- 图文快闪动画

```
node testCanvas.js 'tid=imageFlash&templateType=1&images=准备好了嘛&images=千万&images=别&images=眨眼&images=3&images=2&images=1&images=以下&images=是&images=产品名称&images=产品亮点一&images=../assets/imgs/8.png&images=产品亮点二&images=../assets/imgs/8.png&images=放松一下&images=马上参与&images=../assets/imgs/8.png' './images/'
    

```
- 图文分割

```
node testCanvas.js 'tid=imageVerticalDivide&templateType=2&images={"img":"../assets/imgs/8.png","text":"产品1"}&images={"img":"../assets/imgs/8.png","text":"产品2"}' './images/'
```

- 图片保存在当前文件夹 images中




