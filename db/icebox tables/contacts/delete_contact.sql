DELETE FROM contacts
WHERE contact_id = $1;

SELECT * FROM contacts
ORDER BY contact_id;