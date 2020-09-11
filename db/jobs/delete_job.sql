DELETE FROM jobs
WHERE job_id = $1 AND user_id = $2;

-- SELECT * FROM jobs
-- ORDER BY job_id;