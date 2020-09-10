SELECT title, location, url, date_posted, description, notes, job_status_id, company, contact FROM jobs
WHERE user_id = $1 AND job_id = $2;
