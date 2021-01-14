<?php
header( 'comtemt-type:text/html;charest:"utf-8"' );
$responseData = array( 'code' => 0, 'message' => '' );

$id = $_POST['id'];
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
//md5 加密
$str = md5( md5( md5( $password ) . 'xxx' ) . 'yyy' );
//5.SQL语句
$sql = "DELETE FROM `userinfo` WHERE id={$id}";
//6.发送SQL语句
$res = mysqli_query( $link, $sql );
if ( !$res ) {
    $responseData['code'] = 2;
    $responseData['message'] = '删除用户信息失败！';
    echo json_encode( $responseData );
    exit;
} else {
    $responseData['message'] = '删除用户信息成功！';
    echo json_encode( $responseData );
}
mysqli_close( $link );
?>