UPDATE jobs
SET 
title = ${title},
company_id = ${company_id},
location = ${location},
url = ${url},
date_posted = ${date_posted},
description = ${description},
notes = ${notes},
status = ${status},
contact_id = ${contact_id},
user_id = ${user_id}
WHERE job_id = ${job_id} AND user_id = ${user_id}

SELECT * FROM jobs 
ORDER BY job_id;