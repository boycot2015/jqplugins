# 基于jquery1.9.1 的自定义插件库 

## 1.图片切换插件
### 1.1导入插件：

    导入css:
    <link rel="stylesheet"href="./css/slidebox.css">

    导入js:
    <script src="../lib/jquery-1.9.1/jquery.min.js"></script>
    <script src="./js/slidebox.js"></script>


### 1.2初始化插件：


#### html模板
````
<div id="container">
    <div class="wrap-container">
        <ul class="imglist">
            <li><img src="http://0.rc.xiniu.com/g2/M00/7D/59/CgAGfFrLAViARTfRAANwkLhGI5Q404.jpg" alt="W55"></li>
            <li><img src="http://0.rc.xiniu.com/g2/M00/7D/59/CgAGfFrLAVmADEtMAAVMXcK6EMI702.jpg" alt="W55"></li>
            <li><img src="http://0.rc.xiniu.com/g2/M00/7D/59/CgAGfFrLAVqAaMdcAATkBphZ3z4644.jpg" alt="W55"></li>
        </ul>
        <div class="next-btn">
            <span><img src="http://0.rc.xiniu.com/g2/M00/7D/59/CgAGfFrLAlKADv8AAAAJcD5rJK8739.png" alt="下一张"></span>
        </div>
        <div class="prev-btn">
            <span><img src="http://0.rc.xiniu.com/g2/M00/7D/59/CgAGfFrLAlGAFcKCAAAJhB55MTE670.png" alt="上一张"></span>
        </div>
    </div>        
</div>
````

#### js代码
    // 初始化插件
    $(function(){
        $('#container').slideBox(3,300);//第一个参数为图片数量，第二个参数为图片父容器的宽度（百分比）
    })
