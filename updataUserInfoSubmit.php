<?php
header( 'content-type:text/html;charest:"utf-8"' );
$responseData = array( 'code' => 0, 'message' => '' );

$id = $_POST['id'];
$username = $_POST['username'];
$nickName = $_POST['nickName'];
$password = $_POST['password'];
$email = $_POST['email'];
$creat_time = $_POST['creat_time'];

//验证数据
if ( !$id ) {
    $responseData['code'] = 4;
    $responseData['message'] = 'ID不存在！';
    echo json_encode( $responseData );
    exit;
}
if ( !$username ) {
    $responseData['code'] = 7;
    $responseData['message'] = '用户名不能为空';
    echo json_encode( $responseData );
    exit;
}
if ( !$password ) {
    $responseData['code'] = 8;
    $responseData['message'] = '密码不能为空';
    echo json_encode( $responseData );
    exit;
}

//连接数据库
//1.连接数据库
$link = mysqli_connect( 'localhost', 'hwine', 'hwine1998' );
//2.验证是否连接成功
if ( !$link ) {
    $responseData['code'] = 1;
    $responseData['message'] = '连接数据库失败！';
    echo json_encode( $responseData );
    exit;
}
//3.设置字符集
mysqli_set_charset( $link, 'utf8' );
//4.选择数据库
mysqli_select_db( $link, 'dogfindfood' );
//判断用户名是否重复
//5.SQL语句
$sql = "SELECT * FROM `userinfo` WHERE username='{$username}' AND id!='{$id}'";
//6.发送SQL语句
$res = mysqli_query( $link, $sql );
//7.结果处理
$row = mysqli_fetch_assoc( $res );
if ( $row ) {
    $responseData['code'] = 3;
    $responseData['message'] = '用户名重复！';
    echo json_encode( $responseData );
    exit;
}
//md5 加密
$str = md5( md5( md5( $password ).'xxx' ).'yyy' );
//5.SQL语句
$sql2 ="UPDATE `userinfo` SET `username` = '{$username}', `nickName` = '{$nickName}', `password` = '{$str}', `email` = '{$email}' WHERE `id` = '{$id}'";
//6.发送SQL语句  返回布尔值
$res2 = mysqli_query( $link, $sql2 ); 
if ( !$res2 ) {
    $responseData['code'] = 2;
    $responseData['message'] = '修改失败，请重试！';
    echo json_encode( $responseData );
    exit;
} else {
    $responseData['message'] = '修改成功！';
    //将结果返回给前台
    echo json_encode( $responseData );
}

//8.关闭数据库
mysqli_close( $link );
