-- 设置客户端连接服务器端的编码为utf8
set names utf8;
-- 丢弃数据库，如果存在
drop database if exists hangtang;
-- 创建新的数据库，设置编码为utf8
create database hangtang charset = utf8;
-- 进入数据库
use hangtang;
-- 创建保存新闻类别的表
create table category(
	cid int primary key auto_increment, 
	-- 练习 添加默认值约束
	cname varchar(16) default '未知分类'
);
-- 插入数据
insert into category values(10,'公司动态');
insert into category values(20,'产品资讯');
insert into category values(30,'业界资讯');
-- 练习默认值
insert into category values(40,default);
-- 创建保存新闻数据的表
create table news(
	nid int primary key auto_increment,
	title varchar(32) not null default '未知标题',
	origin varchar(16),
	ctime datetime,
	detail varchar(10000),
	cat_id int,
	-- 将cat_id这个列蛇者为外键约束，插入的值必须要在分类表中出现过
	foreign key(cat_id) references category(cid)
);
-- 插入数据
insert into news values(null,'标题1','央视网','2023-3-28 14:30:20','详情1',10);
insert into news values(null,'标题2','人民日报','2023-3-28 14:30:20','详情2',default);
insert into news values(null,'标题3','新华网','2023-3-28 14:0:20','详情3',20);
insert into news values(null,default,'央视网','2023-3-28 14:3:20','详情4',30);
insert into news(nid,title) values(null,'标题5');

-- 练习
