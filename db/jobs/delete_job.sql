DELETE FROM jobs
WHERE job_id = $1;

SELECT * FROM jobs
ORDER BY job_id;