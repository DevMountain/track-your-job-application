-- SELECT * FROM jobs
-- WHERE user_id = $1;
-- -- ORDER BY job_id; not necessary;



--This query will get all jobs with info combined with contact names and company names for a specific user. (It's basically like the query above, SELECT * FROM jobs plus a few columns from companies, contacts, per the user id off params.) How will the endpoint get the specific user_id? Will it get it off redux? It must. 
SELECT j.job_id, j.title, j.company_id, co.name, j.location, j.url, j.date_posted, j.description, j.notes, j.status, j.contact_id, j.user_id 
FROM jobs j
JOIN companies co ON j.company_id = co.company_id
JOIN users u ON j.user_id = u.user_id
JOIN contacts c ON j.contact_id = c.contact_id
WHERE u.user_id = $1
ORDER BY j.date_posted;
