INSERT INTO companies
(name, url, glassdoor_rating, notes, user_id)
VALUES
($1, $2, $3, $4, $5);

SELECT * FROM companies
ORDER BY company_id;