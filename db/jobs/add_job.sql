INSERT INTO jobs 
(title, company_id, location, url, date_posted, description, notes, status, contact_id, user_id)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);

SELECT * FROM jobs
ORDER BY job_id;