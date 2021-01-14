<?php
header('content-type:text/html;charest:"utf-8"');
$responseData = array("code" => 0, "message" => "");

$username = $_POST['username'];
$nickName = $_POST['nickName'];
$password = $_POST['password'];
$email = $_POST['email'];
$creat_time=$_POST['creat_time'];

//验证数据
if(!$username){
    $responseData['code']=7;
    $responseData['message']="用户名不能为空";
    echo json_encode($responseData);
    exit;
}
if(!$password){
    $responseData['code']=8;
    $responseData['message']="密码不能为空";
    echo json_encode($responseData);
    exit;
}


//连接数据库
//1.连接数据库
$link = mysqli_connect("localhost", "hwine", "hwine1998");
//2.验证是否连接成功
if (!$link) {
    $responseData['code'] = 1;
    $responseData['message'] = "连接数据库失败！";
    echo json_encode($responseData);
    exit;
}
//3.设置字符集
mysqli_set_charset($link, "utf8");
//4.选择数据库
mysqli_select_db($link, "dogfindfood");
//5.SQL语句
$sql = "SELECT username FROM `userinfo` WHERE username='{$username}'";
//6.发送SQL语句
$res = mysqli_query($link, $sql);
//7.结果处理
$row = mysqli_fetch_assoc($res);
if($row){
    $responseData['code'] = 3;
    $responseData['message'] = "用户名已存在！";
    echo json_encode($responseData);
    exit;
}

//md5 加密
$str=md5(md5(md5($password)."xxx")."yyy");
//5.SQL语句
$sql = "INSERT INTO `userinfo`(`username`, `nickName`, `password`, `email`,`creat_time`) VALUES ('{$username}','{$nickName}','{$str}','{$email}','{$creat_time}')";
//6.发送SQL语句  返回布尔值
$res = mysqli_query($link, $sql);
if (!$res) {
    $responseData['code'] = 2;
    $responseData['message'] = "注册失败！";
    echo json_encode($responseData);
    exit;
} else {
    $responseData['message'] = "注册成功！";
    //将结果返回给前台
    echo json_encode($responseData);
}

//8.关闭数据库
mysqli_close($link);
