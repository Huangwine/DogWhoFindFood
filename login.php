<?php
header('content-type:text/html;charest:"utf-8"');
$responseData = array("code" => 0, "message" => "");
$username = $_POST['username'];
$password = $_POST['password'];


//验证数据
if (!$username) {
    $responseData['code'] = 7;
    $responseData['message'] = "用户名不能为空";
    echo json_encode($responseData);
    exit;
}
if (!$password) {
    $responseData['code'] = 8;
    $responseData['message'] = "密码不能为空";
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
//md5 加密
$str = md5(md5(md5($password) . "xxx") . "yyy");
//5.SQL语句
$sql = "SELECT username,`password` FROM `userinfo` WHERE username='{$username}' AND `password`='{$str}'";
//6.发送SQL语句
$res = mysqli_query($link, $sql);
//7.结果处理
$row = mysqli_fetch_assoc($res);
if (!$row) {
    $responseData['code'] = 4;
    $responseData['message'] = "用户名或密码不正确！";
    echo json_encode($responseData);
    exit;
}else{
    $responseData['message'] = "登录成功！";
    echo json_encode($responseData);
}
//7.结果处理
// $arr = array();
// while ($row = mysqli_fetch_assoc($res)) {
//     array_push($arr, $row);
// }

// for ($i = 0; $i < count($arr); $i++) {
//     if ($username == $arr[$i]["username"] && $password == $arr[$i]["password"]) {
//         $responseData['code'] = 4;
//         $responseData['message'] = "登录成功！";
//         echo json_encode($responseData);
//         exit;
//     }
//     if (!$username == $arr[$i]["username"]) {
//         $responseData['code'] = 5;
//         $responseData['message'] = "该用户不存在！";
//         echo json_encode($responseData);
//         exit;
//     }
//     if ($username == $arr[$i]["username"] && !$password == $arr[$i]["password"]) {
//         $responseData['code'] = 6;
//         $responseData['message'] = "密码不正确！";
//         echo json_encode($responseData);
//         exit;
//     }
// }

//8.关闭数据库
mysqli_close($link);
