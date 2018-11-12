-- Created the DB "bamazon_db"
CREATE DATABASE bamazon_db;
USE bamazon_db;

-- Created the table "products" 
CREATE TABLE products
(
  item_id INTEGER AUTO_INCREMENT,
  product_name VARCHAR (50) NOT NULL,
  department_name VARCHAR (50) NOT NULL,
  price DECIMAL (10,2),
  stock_quantity INTEGER (100),
  PRIMARY KEY (item_id)
);

  -- Inserted a set of records into the table
 INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("TCL 55-inch TV", "Television & Video", 349.99, 35);
 INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Samsung 32-inch TV", "Television & Video", 227.99, 230);
 INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Logitech Z506 Surround Sound", "Home Theather Systems", 66.99, 13);
 INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("LG Electronics BH5140S", "Home Theather Systems", 112.99, 54);
 INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Sony BDPS3700 Streaming Blu-Ray", "Blu-ray Players & Recorders", 69.88, 32);
 INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Samsung BD-JM57C Streaming Blu-Ray", "Blu-ray Players & Recorders", 39.39, 6);
 INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Apple TV", "Streaming Devices", 149.00, 82);
 INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Fire TV Stick 4K", "Streaming Devices", 49.00, 329);
 INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Sony STRDH590", "AV Receivers & Amplifiers", 178.00, 65);
 INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Pioneer VSX-1131", "AV Receivers & Amplifiers", 229.99, 1);