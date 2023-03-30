-- 丢弃数据库,如果存在
drop database if exists net;

-- 创建数据库
create database net;

-- 使用数据库
use net;

--创建数据表，保存音乐数据
create table music(
	id int,
	title varchar(32),
	lone_time varchar(8),
	singer varchar(16)
);

--插入数据
insert into music values
(1,'love6','04:06','young'),
(2,'babydoll','03:16','air abidul'),
(3,'cupid','04:06','breezy');

--修改数据
update music set title='fly',lone_time='03:20' where id=1;

--删除数据
delete from music where id = 3;