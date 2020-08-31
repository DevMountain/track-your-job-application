DELETE FROM companies
WHERE company_id = $1;

SELECT * FROM companies
ORDER BY company_id;