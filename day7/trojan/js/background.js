console.log("你被植入木马了");

//创建cnavas（画布）元素
var canvas = document.createElement("canvas");
//将canvas插入文档：body
document.body.appendChild(canvas);
//canvas背景色
canvas.style.backgroundColor = "transparent";
canvas.style.position = "absolute";
canvas.style.top = 0;
//为canvas设置宽高
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//取出画笔
var context = canvas.getContext("2d");

//创建一个数组，用于保存粒子
var particles = [];

//调用画粒子的方法
//drawParticle(100,100);
loop();

//定义一个随机产生粒子的方法
function loop() {
    //定时器:要执行的方法，执行间隔

    setInterval(function () {
        //清空画布
        context.clearRect(0, 0, canvas.width, canvas.height);
        //调用画粒子的方法,随机产生一个圆心位置
        //Math.random()产生0˜1，但不包括1
        //drawParticle(Math.random()*canvas.width,Math.random()*canvas.height);
        var part = new Particle(xx, yy);
        //part.draw();
        //把对象存入数组
        particles.push(part);
        //console.log(particles.length);
        for (var i = 0; i < particles.length; i++) {
            //更新粒子的位置
            particles[i].upData();
        }
    }, 30);
}

//如何画一个粒子
function Particle(xPos, yPos) {
    //定义Particle类所拥有的属性
    //this.xPos 是当前粒子圆心的x坐标
    this.xPos = xPos;
    this.yPos = yPos;
    //Y方向的变化量
    this.yVal = -5;
    //产生0~1的数字 不包含1
    //*4 产生0~4的数字，不包含4（原生方法）
    this.xVal = Math.random() * 4 - 2;
    //定义重力因素
    this.gravity = 0.1;

    //把画圆的代码，封装成对象方法
    this.draw = function () {
        //开始路径
        context.beginPath();
        //告诉画笔，要画一个圆 圆心、半径、起始角度、最终角度、正/反向
        context.arc(this.xPos, this.yPos, 5, 0, Math.PI * 2, false);
        //结束路径
        context.closePath();
        //填充颜色
        context.fill();
    };
    this.upData = function () {
        //更新圆心y的位置
        this.yPos = this.yPos + this.yVal;
        this.xPos = this.xPos + this.xVal;
        //更新y的变化量的变化量（yVal）
        this.yVal = this.yVal + this.gravity;
        //画笔颜色
        context.fillStyle = getRandomColor(); //变成随即色
        //重新画
        this.draw();
    };

}
console.log("16进制换10进制：")
console.log(parseInt('ffffff', 16));
console.log("10进制换16进制：")
//Math.floor 取整
var number = 16777215;
console.log(number.toString(16));
//getRandomColor();
function getRandomColor() {
    //#ffffff,白色,rgb(255,255,255),ffffff(16) = 16777215(10)
    //console                 .log((Math.random()*16777215).toString(16));
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
    //console.log(color);
    //#000000˜#ffffff
    // 0(0)   16777215(10)
}
var xx = window.innerWidth / 2;
var yy = window.innerHeight / 2;
canvas.onmousemove = function (ev) {
    xx = ev.clientX;
    yy = ev.clientY;

}