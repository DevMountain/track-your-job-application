INSERT INTO action_items 
(name, description, due_date, status, job_id, contact_id, user_id)
VALUES
($1, $2, $3, $4, $5, $6, $7);

SELECT * FROM action_items
ORDER BY action_id;