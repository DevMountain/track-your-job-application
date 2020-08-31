UPDATE contacts
SET 
name = ${name},
title = ${title},
company_id = ${company_id},
linkedin_profile = ${linkedin_profile},
email = ${email},
phone = ${phone},
date_late_contact = ${date_late_contact},
notes = ${notes},
user_id = ${user_id}
WHERE contact_id = ${contact_id};

SELECT * FROM contacts 
ORDER BY contact_id;