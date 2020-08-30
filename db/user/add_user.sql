INSERT INTO users
(email, password, first_name, last_name)
VALUES
($1, $2, $3, $4);

SELECT user_id, email, first_name, last_name FROM users
WHERE email = $1;