-- Test this in sql tabs with values, after adding a job first. 

UPDATE jobs
SET 
title = $1,
location = $2,
url = $3,
date_posted = $4,
description = $5,
notes = $6,
job_status_id = $7,
company = $8,
contact = $9
WHERE job_id = $10 AND user_id = $11;

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