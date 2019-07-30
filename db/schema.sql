create database burger_db;
use burger_db;

create table burgers
(
    id int not null AUTO_INCREMENT,
    burger_name varchar(30) not null,
    devoured boolean default false,
    primary key (id)

);
-- I copied theses from my old homework to test but nothing worked
insert into products (product_name, department_name, price, stock_quantity)
values ("Clown Shoes", "Clothes", 10.50, 20);

insert into products (product_name, department_name, price, stock_quantity)
values ("Pet Rock", "toys", 2.25, 100);

insert into products (product_name, department_name, price, stock_quantity)
values ("Scooter", "toys", 100.50, 40);

insert into products (product_name, department_name, price, stock_quantity)
values ("Instant Pot", "Housewares", 69.99, 10);

insert into products (product_name, department_name, price, stock_quantity)
values ("Doggles", "Pets", 50.50, 20);

insert into products (product_name, department_name, price, stock_quantity)
values ("Neon-Lipstick", "Makeup", 2.25, 100);

insert into products (product_name, department_name, price, stock_quantity)
values ("Ham sented deoderant", "Soap", .50, 300);

insert into products (product_name, department_name, price, stock_quantity)
values ("Glitter-Bombs", "Party", 12.99, 200);