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
insert into burgers (id, product_name, resturant_name)
values ( 1,"Bacon Cheese Burger animal style", "In n Out Burger");

insert into products (id, product_name, resturant_name)
values ( 2,"deep fried tofu and ham hamburger", "Big Al's Weird stupid place to eat");

insert into products (id, product_name, resturant_name)
values (3, "Chicken and Waffle Cheesburger with bacon", "toys0.50, 40);

insert into products (id, product_name, resturant_name)
values ("Instant Pot", "Housewares", 69.99, 10);

insert into products (id, product_name, resturant_name)
values ("Doggles", "Pets", 50.50, 20);

insert into products (product_name, department_name, price, stock_quantity)
values ("Neon-Lipstick", "Makeup", 2.25, 100);

insert into products (product_name, department_name, price, stock_quantity)
values ("Ham sented deoderant", "Soap", .50, 300);

insert into products (product_name, department_name, price, stock_quantity)
values ("Glitter-Bombs", "Party", 12.99, 200);