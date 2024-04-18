/* store sales and inventory system data base*/

CREATE DATABASE pos_db;
USE pos_db;

/*products table*/

CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2),
    category VARCHAR(50)
);

/*test products*/

INSERT INTO 
    products (name, description, price, category)
VALUES
    ('test name','test desc','69.00','test category'),
    ('2nd test name', '2nd test desc', '420.00', '2nd test cat');

/*inventory table*/

CREATE TABLE inventory (
    inventory_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    quantity INT,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

/*sales table*/

CREATE TABLE sales (
    sale_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    quantity_sold INT,
    sale_date DATE,
    sale_price DECIMAL(10, 2),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

