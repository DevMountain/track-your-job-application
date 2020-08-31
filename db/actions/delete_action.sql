DELETE FROM action_items
WHERE job_id = $1;

SELECT * FROM action_items
ORDER BY action_id;