## Pour avoir les datas
Il faut run la query

```SQL
-- For part 3 (Prediction)
-- Total sales amount, per day, per product
SELECT o.created_at, p.name, SUM(p.unit_price*od.quantity) 
FROM order_details od 
INNER JOIN orders o USING (order_id) 
INNER JOIN products p USING (product_id) 
GROUP BY o.created_at, p.name;
```

Qui retounera les datas sous cette forme:
```
         created_at         |   name   |  sum  
----------------------------+----------+-------
 2024-03-27 16:19:20.267157 | mouse    | 59.99
 2024-04-06 16:19:20.267157 | keyboard |   400
 2024-04-06 16:19:20.267157 | mouse    | 59.99
 2024-03-27 16:19:20.267157 | keyboard |   800
 2024-04-06 16:19:20.267157 | screen   |   800
```

Ensuite pour chaque produit, il faudra faire un tableau avec le prix, exemple avex le produit 'keyboard':

```
const values = [400, 800]
```

Et pour finir il faudra run la fonction `mayerLinePrediction` dans le script `predict.ts` avec en argument le tableau défini juste avant en premier et le jour désiré en second argument.

```
const nextDay = mayerLinePrediction(values, 3);
console.log(nextDay);
```