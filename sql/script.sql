-- Création des tables
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_price DECIMAL NOT NULL CHECK (unit_price > 0),
    seller_id SERIAL,
    CONSTRAINT fk_seller FOREIGN KEY(seller_id) REFERENCES users(user_id)
);

CREATE TYPE ORDER_STATUS AS ENUM ('Processing', 'In Transit', 'Delivered', 'Cancelled');

CREATE TABLE IF NOT EXISTS orders (
    order_id SERIAL PRIMARY KEY,
    customer_id SERIAL NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ORDER_STATUS DEFAULT 'Processing',
    CONSTRAINT fk_customer FOREIGN KEY(customer_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS order_details (
    order_id SERIAL NOT NULL,
    product_id SERIAL NOT NULL,
    quantity INTEGER DEFAULT 1,
    CONSTRAINT fk_order FOREIGN KEY(order_id) REFERENCES orders(order_id),
    CONSTRAINT fk_product FOREIGN KEY(product_id) REFERENCES products(product_id)
);

-- Peuplage des tables
INSERT INTO users (firstname, lastname, email)
VALUES 
    ('Billy', 'Bob', 'billybob@yopmail.com'),
    ('John', 'Doe', 'johndoe@yopmail.com');

INSERT INTO products (name, quantity, unit_price, seller_id)
VALUES
    ('keyboard', 10, 400, 1),
    ('mouse', 10, 59.99, 1),
    ('screen', 1, 800, 1);

INSERT INTO orders (customer_id, created_at)
VALUES
    (2, now() - interval '10 days'),
    (2, now());

INSERT INTO order_details (order_id, product_id, quantity)
VALUES
    (1, 1, 2),
    (1, 2, 1);

INSERT INTO order_details (order_id, product_id, quantity)
VALUES
    (2, 1, 1),
    (2, 2, 1),
    (2, 3, 1);