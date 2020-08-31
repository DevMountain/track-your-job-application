SELECT co.company_id, co.name, co.url, co.glassdoor_rating, co.notes, co.user_id, c.name, c.title, c.contact_id, 
FROM companies co
JOIN contacts c
ON co.contact_id = c.contact_id
WHERE co.company_id = $1 AND co.user_id = $1;
