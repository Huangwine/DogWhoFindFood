<?php
    header('comtemt-type:text/html;charest:"utf-8"');
    $responseData = array("code" => 0, "message" => "");

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
//md5 加密
$str = md5(md5(md5($password) . "xxx") . "yyy");
//5.SQL语句
$sql = "SELECT * FROM `userinfo`";
//6.发送SQL语句
$res = mysqli_query($link, $sql);
//7.结果处理
$arr=array();
while($row = mysqli_fetch_assoc($res)){
    array_push($arr,$row);
}
echo json_encode($arr);
//关闭数据库
mysqli_close($link);
