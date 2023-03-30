drop database if exists tedu;
create database tedu;
use tedu;

create table student(
	id int,
	sname varchar(16),
	gender varchar(8),
	grade int
);

insert into student values(
	001,'jack','m',80
);
insert into student values(
	002,'maria','f',70
);
