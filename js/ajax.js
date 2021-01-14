/*
    method ,
    url,
    data,
    success  数据加载成功后执行的函数
    error    数据加载失败后执行的函数
*/
function $ajax({
    method = "get",
    url,
    data,
    success,
    error
}) {
    //创建ajax对象
    var xhr = null;
    try {
        xhr = new XMLHttpRequest();
    } catch (error) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //调用请求数据
    if (data) {
        data=queryString(data);
        // console.log(data);
    }
    if(method=="get"&&data){
        url+=`?${data}`;
    }
    xhr.open(method,url,true);
    //调用send
    if (method=="get") {
        xhr.send();
    }else{
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send(data);
    }
    //等待数据响应
    xhr.onreadystatechange=function(){
        if (xhr.readyState==4) {
            if (xhr.status==200) {
                if(success){
                    success(xhr.responseText);
                }
            }else{
                if (error) {
                    error("ERROR:"+xhr.status);
                }
            }
        }
    }
    //对象转查询字符串
    function queryString(obj) {
        var str=``;
        for (var attr in obj) {
            str+=`${attr}=${obj[attr]}&`;
        }
        return str.substring(0,str.length-1);
    }
}