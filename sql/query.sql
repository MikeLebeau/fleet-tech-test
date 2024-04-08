-- Je suis John Doe, je voudrais avoir le détail de ma commande
SELECT * 
FROM order_details od 
INNER JOIN orders o USING (order_id) 
INNER JOIN products p USING (product_id) 
WHERE o.customer_id = 2;

-- E-mail addresses of users who have bought PRODUCT_1 in the past 7 days.
SELECT u.email, o.order_id, o.created_at
FROM users u 
INNER JOIN orders o ON u.user_id = o.customer_id
WHERE o.created_at > now() - INTERVAL '1 week';

-- Total sales amount, per day
SELECT o.created_at, SUM(p.unit_price*od.quantity) 
FROM order_details od 
INNER JOIN orders o USING (order_id) 
INNER JOIN products p USING (product_id) 
GROUP BY o.created_at;