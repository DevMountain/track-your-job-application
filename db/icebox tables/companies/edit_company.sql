UPDATE companies
SET 
name = ${name},
url = ${url},
glassdoor_rating = ${glassdoor_rating},
notes = ${notes},
user_id = ${user_id}
WHERE company_id = ${company_id};

SELECT * FROM companies 
ORDER BY company_id;