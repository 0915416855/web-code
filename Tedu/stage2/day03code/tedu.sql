-- 设置客户端连接服务器端的编码为UTF-8
set names utf8;
-- 丢弃数据库，如果存在
drop database if exists tedu;
-- 创建新的数据库，设置存储字符的编码为UTF-8
create database tedu charset=utf8;
-- 进入创建的数据库
use tedu;
-- 创建保存部门数据的表
create table dept(
	did int primary key auto_increment,
	dname varchar(16) unique
);
-- 插入数据
insert into dept values(10,'研发部');
insert into dept values(20,'市场部');
insert into dept values(30,'运营部');
insert into dept values(40,'设计部');
-- 创建保存员工数据的表
create table emp(
	eid int primary key auto_increment,
	ename varchar(16) not null,
	sex boolean default 0,   --  1-男  0-女
	birthday date,
	salary decimal(8,2),   -- 999999.99
	deptid int,
	foreign key(deptid) references dept(did)
);
-- 插入数据
insert into emp values(null,'Yu',default,'1992-9-20',30000,30);
insert into emp(ename,birthday,salary,deptid) values('Nan','1991-1-2',50000,20);
INSERT INTO emp VALUES(NULL,'Tom',1,'1996-5-5',6000,20);
INSERT INTO emp VALUES(NULL,'Jerry',0,'1992-8-20',7000,10);
INSERT INTO emp VALUES(NULL,'David',1,'2000-10-21',3000,30);
INSERT INTO emp VALUES(NULL,'Maria',0,'1998-5-20',5000,10);
INSERT INTO emp VALUES(NULL,'Leo',1,'1996-11-20',8800,20);
INSERT INTO emp VALUES(NULL,'Berry',0,'1991-1-3',4000,10);
INSERT INTO emp VALUES(NULL,'Peter',1,'1993-7-24',10000,10);
INSERT INTO emp VALUES(NULL,'Franc',1,'1994-12-3',6000,30);
INSERT INTO emp VALUES(NULL,'Tomas',1,'1995-5-6',9000,10);
INSERT INTO emp VALUES(NULL,'Lucy',0,'1999-3-1',10000,20);
INSERT INTO emp VALUES(NULL,'Jone',1,'1994-1-25',800,30);
INSERT INTO emp VALUES(NULL,'Cris',0,'1997-7-1',12000,10);
INSERT INTO emp VALUES(NULL,'Lisa',0,'1989-12-3',8000,10);
INSERT INTO emp VALUES(NULL,'King',1,'1988-12-3',10000,10);
INSERT INTO emp VALUES(NULL,'Brown',1,'1999-3-3',22000,NULL);
