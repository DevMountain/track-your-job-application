INSERT INTO contacts 
(name, title, company_id, linkedin_profile, email, phone, date_last_contact, notes, user_id)
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9);

SELECT * FROM contacts
ORDER BY contact_id;