SELECT jobs.title, companies.name FROM jobs 
JOIN ON jobs.company_id = companies.company_id 
WHERE job_id = $1;

-- id sent on params. 