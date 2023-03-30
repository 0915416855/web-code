-- 设置编码
set names utf8;

-- 丢弃数据库，如果存在
drop database if exists xz;

-- 创建数据库
create database xz charset = utf8;

-- 使用数据库
use xz

-- 创建数据表
create table laptop(
	id int primary key auto_increment,
	title varchar(32) unique,
	pic varchar(128),
	price decimal(8,2) not null,
	time date,
	recommend boolean
);

-- 插入数据
insert into laptop values
(null,'英特尔(Intel) 赛扬G6900 2核2线程 盒装CPU处理器 台式机 组装电脑使用','https://img14.360buyimg.com/n0/jfs/t1/113892/31/33455/108288/641d5acdFa7a5fefb/b501454fe22fd44c.jpg',499.00,'2023-03-28',1),
(null,'赛扬G6900 2核2线程 盒装CPU处理器 台式机 组装电脑','https://img14.360buyimg.com/n0/jfs/t1/113892/31/33455/108288/641d5acdFa7a5fefb/b501454fe22fd44c.jpg',499.00,'2023-03-28',1);

