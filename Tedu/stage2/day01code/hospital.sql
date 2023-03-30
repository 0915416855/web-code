drop database if exists hospital;

create database hospital;

use hospital;

create table medicine(
	id int,
	name varchar(32),
	picture varchar(32),
	price int,
	sprice int
);

insert into medicine value
(1,'amoxilin','#',22,21),
(2,'xilin','#',22,21),
(3,'buluofen','#',22,21);

update medicine set name='AmoxiLin',sprice = 50 where id=1;

delete from medicine where id=3



