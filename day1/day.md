# 工具

进去官网[VisualStudio](https://code.visualstudio.com)下载

浏览器

- Chrome
- FireFox
- QQ浏览器

# 开发者工具

F12或者y点击浏览器右上角-》更多工具-》开发者工具
<img src="开发者工具.gif" />

- Elements (展示页面的HTML代码部分)  HTML
- Console (控制台，输入一些JS脚本，操作页面的元素)  JS
- 

# HTML

[W3C HTML教程](http://www.w3school.com.cn/html/index.asp)

展示页面的元素标签，元素
```html
<input type="submit" id="su" value="123" class="bg s_btn" style="background-color: red; color: green;">

<input id="kw" name="wd" class="s_ipt" value="" maxlength="255" autocomplete="off">
```
新建一个 html 文件，然后输入以下内容，并以 html 后缀保存，然后用浏览器打开，就可以看到浏览器里面出现`Hello World`的效果
```html
<!DOCTYPE html>
<html>
    <head>
        <title>HTML DEMO</title>
    </head>
    <body>
        <div>
            Hello World
        </div>
    </body>
</html>
```
非自闭标签
```html
<div>内容</div>
<p>内容</p>
<h1>内容</h1>
```
自闭标签
```html
<img src="xxx.jpg" />
<hr />
<br />
```
属性值

展示这个标签独特的一面，就是标签可以有很多种，但是属性值是丰富相同标签的不同特性
```html
<img src="属性值" />
```

玩玩标签，玩玩属性值，在浏览器里面展示内容

# JS

[W3C JavaScript 教程](http://www.w3school.com.cn/js/index.asp)

新建一份 JS 文件，名字定义为`base.js`
```js
console.log("xxxx") // 打印字符串
```
选择器,帮助你用JS的功能去操控HTML页面
```html
<input type="submit" id="su" value="百度一下" class="bg s_btn">
```
比如要获取上面的标签节点，我们可以用标签的属性值去定位
```js
document.querySelector("#su") //获取 id = "su"的标签
document.querySelector(".s_btn") //获取包含有 class = ".s_btn"的标签
```
操作元素和节点
```js
// 更改样式
document.querySelector("#su").style.xxx = xxx
document.querySelector("#su").style.color = "red"
document.querySelector("#su").style.backgroundColor = "red"
document.querySelector("#su").style.fontSize = "14px"
document.querySelector("#su").style.border = "1px solid red"

// 更改输入内容  select input textarea
document.querySelector("#su").value = ""

// 触发事件
document.querySelector("#go").click()

// 更改标签之间的内容
document.querySelector("#go").innerHTML = "login"
```
类型
```js
var num = 1;
var str = "yao";
var bool = true//false
// null
//  undefined
var arr = [1,2,3];
arr[0]
var obj = {
    name:"yao"
}
obj.name
```
函数
```js
function add(a,b){
    return a+b
}
```
定时器
```js
// 每秒都要执行
setInterval(function(){
    console.log("hello world")
},1000)
// 延时执行一次
setTimeout(function(){
    console.log("hello world")
},1000)
```

# CSS

化妆的功能，让页面更漂亮，比如你可以用它加样式，改颜色，字体大小...

```css
.test{
    color: red;
    font-size: 30px;
}

#test{

}
*{}
```