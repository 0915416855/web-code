-- 设置客户端链接服务器端使用的编码为UTF-8
set names utf8;

-- 丢弃数据库，如果存在
drop database if exists hospital;

-- 创建数据库、设置存储字符的编码为utf-8
create database hospital charset=utf8;

-- 使用数据库
use hospital;

-- 创建表
create table medicine(
	id int,
	title varchar(32),
	pic varchar(256),
	sale1 int,
	sale2 int
);

-- 插入数据
insert into medicine values
(1,'阿莫西林','img/1.png',25,21),
(2,'布洛芬','img/2.png',20,50),
(3,'莲花清瘟','img/3.png',30,100);

-- 修改数据
update medicine set sale1 = 20,sale2 = 18 where id = 1;

-- 删除数据
delete from medicine where id = 2;