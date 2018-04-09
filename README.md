# 基于jquery1.9.1 的自定义插件库 

## 1.图片切换插件
### 1.1导入插件：

    导入css:
    <link rel="stylesheet"href="./css/slidebox.css">

    导入js:
    <script src="../lib/jquery-1.9.1/jquery.min.js"></script>
    <script src="./js/slidebox.js"></script>
### 1.2初始化插件：
    // 初始化插件
    $(function(){
        $('#container').slideBox(3,300);//第一个参数为图片数量，第二个参数为图片父容器的宽度（百分比）
    })
