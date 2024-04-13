SELECT u.name AS user_name, u.birthdate, c.name AS customer_name
FROM user u
JOIN user_customer uc ON u.id = uc.user_id
JOIN customer c ON c.id = uc.customer_id
WHERE TIMESTAMPDIFF(YEAR, u.birthdate, CURDATE()) > 18 
    AND u.status = 1 
    AND c.status = 1 
ORDER BY c.name;
