<?php
    header('content-type:text/html;charest:"utf-8"');
    $responseData = array("code" => 0, "message" => "");

    $id=$_POST['id'];
    // $username=$_POST['username'];
    // $password=$_POST['password'];
    // $nickname=$_POST['nickName'];
    // $email=$_POST['email'];

    if(!$id){
        $responseData['code']=1;
        $responseData['message']="ID不存在！";
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
$sql = "SELECT * FROM `userinfo` WHERE id={$id}";
//6.发送SQL语句  返回布尔值
$res = mysqli_query($link, $sql);

$row=mysqli_fetch_assoc($res);
if (!$row) {
    $responseData['code'] = 3;
    $responseData['message'] = "修改数据不存在！";
    echo json_encode($responseData);
} else {
    $responseData['message'] = json_encode($row);
    //将结果返回给前台
    echo json_encode($responseData);
}

//8.关闭数据库
mysqli_close($link);

?>