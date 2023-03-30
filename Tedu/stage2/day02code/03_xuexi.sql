
set names utf8;

drop database if exists xuezi;

create database xuezi charset=utf8;

use  xuezi;

create table user(
	id int primary key auto_increment,
	userName varchar(16) unique,
	userPwd  varchar(8) not null,
	tel char(11),
	signTime date,
	online boolean,
	realName varchar(16)
);

insert into user values
(null,'jack','12345678','13212345678','2023-3-28',true,'张三'),
(null,'ja','12345678','13212345678','2023-3-2',false,'张三'),
(null,'jain','12345678','13212345678','2023-3-21',true,'张三'),
(null,'mariy','12345678','13212345678','2023-3-8',true,'张三');
