-- Test this in sql tabs with values, after adding a job first. 

UPDATE jobs
SET 
location = $1,
url = $2,
date_posted = $3,
description = $4,
notes = $5,
job_status_id = $6,
company = $7,
contact = $8
WHERE job_id = $9 AND user_id = $10;

-- SELECT * FROM jobs rs
-- ORDER BY job_id;



--With icebox features for later:
-- UPDATE jobs
-- SET 
-- title = ${title},
-- company_id = ${company_id},
-- location = ${location},
-- url = ${url},
-- date_posted = ${date_posted},
-- description = ${description},
-- notes = ${notes},
-- status = ${status},
-- contact_id = ${contact_id},
-- user_id = ${user_id}
-- WHERE job_id = ${job_id} AND user_id = ${user_id}

-- SELECT * FROM jobs 
-- ORDER BY job_id;