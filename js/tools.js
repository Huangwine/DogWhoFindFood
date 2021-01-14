function bubbleSortAsc(arr) {
    //从小到大排

    //排序的轮次
    for (var i = 0; i < arr.length - 1; i++) {
        //每一轮排序的次数
        for (var j = 0; j < arr.length - (i + 1); j++) {
            //交换顺序
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function selectSortAsc(arr) {
    //从小到大排

    //排序的轮次
    for (var i = 0; i < arr.length - 1; i++) {
        //每一轮排序的次数
        for (var j = i + 1; j < arr.length - (i + 1); j++) {
            //交换顺序
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

function bubbleSortDesc(arr) {
    //从小到大排

    //排序的轮次
    for (var i = 0; i < arr.length - 1; i++) {
        //每一轮排序的次数
        for (var j = 0; j < arr.length - (i + 1); j++) {
            //交换顺序
            if (arr[j] < arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function selectSortDesc(arr) {
    //从小到大排

    //排序的轮次
    for (var i = 0; i < arr.length - 1; i++) {
        //每一轮排序的次数
        for (var j = i + 1; j < arr.length - (i + 1); j++) {
            //交换顺序
            if (arr[i] < arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
//数字验证
function numTestCode(n) {
    var arr = []; //存储生成的数字
    for (var i = 0; i < n; i++) {
        var num = parseInt(Math.random() * 10);
        arr.push(num);
    }
    return arr.join("");
}
//数字加字母验证
function numCharTestCode(n) {
    var arr = []; //存储生成的数字
    for (var i = 0; i < n; i++) {
        var num = parseInt(Math.random() * 123);
        if (num >= 0 && num <= 9) {
            arr.push(num);
        } else if (num >= 97 && num <= 122 || num >= 65 && num <= 90) {
            arr.push(String.fromCharCode(num));
        } else {
            i--;
        }

    }
    return arr.join("");
}
// function isEmail(email){
//     //查找@的位置
//     var indexOf =email.indexOf("@");
//     if (indexOf ==-1) {
//         return false;
//     }else{

//     }
// }
//判断单个字符是否是字母
function isLetter(charStr) {
    if (charStr >= "a" && charStr <= "z" || charStr >= "A" && charStr <= "Z") {
        return true;
    } else {
        return false;
    }
}
//判断单个字符是否是数字、字母、下划线
function isMLU(charStr) {
    if (charStr >= "a" && charStr <= "z" || charStr >= "A" && charStr <= "Z" || charStr == "_" || charStr >= "0" && charStr <= "9") {
        return true;
    } else {
        return false;
    }
}
//敏感词 过滤

function sensitiveWordFiltering() {
    // var arr =[/靠/ig,/tmd/ig,/nm/ig];

    var oTxt = document.getElementById("txt1");
    var tTxt = document.getElementById("msg");
    var oValue = oTxt.value;
    for (var i = 0; i <= arr.length; i++) {
        oValue = oValue.replace(arr[i], "*");
    }
    tTxt.innerHTML = oValue;
    oTxt.value = "";
}
//用户注册验证非中文
function registerverify() {
    var oUserName = document.getElementById("username");
    var oUsername_span = document.getElementById("username_span");

    //获取输入框的内容
    var oValue = oUserName.value;
    //判断长度
    if (oValue.length < 6 || oValue.length > 18) {
        oUsername_span.innerHTML = "!长度应为6-18个字符";
    } else if (!isLetter(oValue[0])) {
        oUsername_span.innerHTML = "!首字符不是字母";
    } else {
        var isYes = true;
        for (var i = 0; i < oValue.length; i++) {
            if (!isMLU(oValue[i])) {
                isYes = false;
                break;
            }
        }
        if (isYes) {
            oUsername_span.innerHTML = "√,可以开始注册了！";
        } else {
            oUsername_span.innerHTML = "!字符必须是是数字、字母、下划线组成";
        }
    }
}
//自定义日期获取
function showTime() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();

    var week = numToChinese(d.getDay());

    var hour = toDoubleDigits(d.getHours());

    var min = toDoubleDigits(d.getUTCMinutes());

    var sec = toDoubleDigits(d.getSeconds());

    var mytime = year + "年" + month + "月" + date + "日  星期" + week + "  " + hour + ":" + min + ":" + sec;
    return mytime;
}
function showTime(time) {
    var d = new Date(time);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();

    var week = numToChinese(d.getDay());

    var hour = toDoubleDigits(d.getHours());

    var min = toDoubleDigits(d.getUTCMinutes());

    var sec = toDoubleDigits(d.getSeconds());

    var mytime = `${year}年${month}月${date}日  星期${week}  ${hour}:${min}:${sec}`;
    return mytime;
}

//数字转中文
function numToChinese(num) {
    var arr = ["日", "一", "二", "三", "四", "五", "六"];
    return arr[num];
}
//单位数转双位数
function toDoubleDigits(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return num;
    }
}
//简化获取id的流程
function $(id) {
    return document.getElementById(id);
}
//获取元素节点通过className
function elementsByClassName(node, classStr) {
    //获取node这个节点下的所有节点
    var nodes = node.getElementsByTagName("*");
    var arr = []; //存放符合条件的节点
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].className == className) {
            arr.push(nides[i]);
        }
    }
    return arr;
}
//跨浏览器的兼容，获取style
function getStyle(node, cssStyle) {
    return node.currentStyle ? node.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle];
}
//随机颜色
function randomColor() {
    var str = "rgba(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + Math.random() * 1 + ")";
    return str;
}
//阻止事件冒泡兼容
function stopBubble(ev) {
    var e = ev || window.Event;
    // if (e.stopPropagation){
    //     e.stopPropagation()
    // }else{
    //     e.cancelBubble = true;
    // }
    return e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
}
//获取事件对象
function getEvent(ev) {
    var e;
    return e = ev ? e = ev : window.Event;
}
//获取目标对象
function getTarget(ev) {
    getEvent(ev);
    return target = e.target ? target = e.target : window.Event.srcElement;
}
//阻止超链接的默认行为
function preDef(e) {
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        window.Event.returnValue = false;
    }
}
//拖拽
function drag(node) {
    node.onmousedown = function (ev) {
        var e = ev || window.event;
        var offsetX = e.clientX - node.offsetLeft;
        var offsetY = e.clientY - node.offsetTop;

        document.onmousemove = function (ev) {
            var e = ev || window.event;
            node.style.left = e.clientX - offsetX + "px";
            node.style.top = e.clientY - offsetY + "px";
        }
    }
    document.onmouseup = function () {
        document.onmousemove = null;
    }
}
//限制出界型拖拽
function limitDrag(node) {
    node.onmousedown = function (ev) {
        var e = ev || window.event;
        var offsetX = e.clientX - node.offsetLeft;
        var offsetY = e.clientY - node.offsetTop;

        document.onmousemove = function (ev) {
            var e = ev || window.event;
            var l = e.clientX - offsetX;
            var t = e.clientY - offsetY;

            //限制出界
            if (l <= 0) {
                l = 0;
            }
            var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
            var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;;

            if (l >= windowWidth - node.offsetWidth) {
                l = windowWidth - node.offsetWidth;
            }
            if (t <= 0) {
                t = 0;
            }

            if (t >= windowHeight - node.offsetHeight) {
                t = windowHeight - node.offsetHeight;
            }
            node.style.left = l + "px";
            node.style.top = t + "px";
        }
    }
}
document.onmouseup = function () {
    document.onmousemove = null;
}
// 浏览器的宽高

// function windowWidth() {
//     return windowWidth = document.documentElement.clientWidth ? windowWidth = document.documentElement.clientWidth : document.body.clientWidth;
// }

// function windowHeight() {
//     return windowHeight = document.documentElement.clientHeight ? windowHeighth = document.documentElement.clientHeight : document.body.clientHeight;
// }
//兼容事件监听器
function addEvent(node, eventType, funcName) {
    if (node.addEventListener) {
        node.addEventListener(eventType, funcName, false);
    } else if (node.attachEvent) {
        node.attachEvent("on" + eventType, funcName);
    }
}

function removeEvent(node, eventType, funcName) {
    if (node.removeEventListener) {
        node.removeEventListener(eventType, funcName, false);
    } else if (node.attachEvent) {
        node.detachEvent("on" + eventType, funcName);
    }
}

// function windowWidth() {
//     return windowWidth = document.documentElement.clientWidth ? windowWidth = document.documentElement.clientWidth : document.body.clientWidth;
// }

// function windowHeight() {
//     return windowHeight = document.documentElement.clientHeight ? windowHeighth = document.documentElement.clientHeight : document.body.clientHeight;
// }
//圆周运动
function circling(node) {
    var oDiv = document.getElementById(node);
    var X = 400;
    var Y = 400;

    var r = 100;
    var i = 0;
    setInterval(function () {
        i++;
        var radian = i * Math.PI / 180;
        var a = Math.sin(radian) * r;
        var b = Math.cos(radian) * r;

        oDiv.style.left = X + a + "px";
        oDiv.style.top = Y - b + "px";


        //显示轨迹
        // var node=document.createElement("div");
        // node.style.left=oDiv.offsetLeft+"px";
        // node.style.top=oDiv.offsetTop+"px";
        // node.style.backgroundColor="black";
        // node.style.position="absolute";
        // node.style.width="5px";
        // node.style.height="5px";
        // node.style.borderRadius="50%";
        // document.body.appendChild(node);
    }, 30)
}

//跨浏览器的兼容，获取style
// function getStyle(node, cssStyle) {
//     return node.currentStyle ? node.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle];
// }

function starMove(node, styTarget, complete) {
    clearInterval(node.timer);
    node.timer = setInterval(function () {
        var isEnd = true; //假设动画达到目的值
        for (var sty in styTarget) {
            var iTarget = styTarget[sty];
            var iCur = null;
            if (sty == "opacity") {
                iCur = parseInt(parseFloat(getStyle(node, "opacity")) * 100);
            } else {
                iCur = parseInt(getStyle(node, sty));
            }
            var speed = (iTarget - iCur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (sty == "opacity") {
                iCur += speed;
                node.style.opacity = iCur / 100;
                node.style.filter = `alpha(opacity=${iCur})`;
            } else {
                node.style[sty] = iCur + speed + "px";
            }
            if (iCur != iTarget) {
                isEnd = false;
            }
        }
        if (isEnd) {
            clearInterval(node.timer);
            if (complete) {
                complete.call(node);
            }
        }
    }, 30)
}