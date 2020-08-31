UPDATE action_items
SET 
name = ${name},
description = ${description},
due_date = ${due_date},
status = ${status},
job_id = ${job_id},
contact_id = ${contact_id},
user_id = ${user_id},
WHERE action_id = ${action_id};

SELECT * FROM action_items 
ORDER BY action_id;