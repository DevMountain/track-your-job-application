--This is working in SQL tabs. Not in Postman.

-- Original:
INSERT INTO jobs (title, location, company, url, date_posted, description, notes, contact, job_status_id, user_id) 
VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);

-- (${title}, ${location}, ${company}, ${url}, ${date_posted}, ${description}, ${notes}, ${contact}, ${job_status_id}, ${user_id});

-- SELECT * FROM jobs
-- ORDER BY job_id;


-- -- company_id needs to be a drop down, and if the company_id doesn't exist in the drop-down menu, it will need to be added, to create a new company entry. Or left null.

-- -- contact_id needs to be a drop down, and if the contact_id doesn't exist in the drop-down menu, it will need to be added, to create a new contact entry. Or left null.



-- INSERT INTO job_status
-- (job_status_name)

-- -- I could simplify the form.

-- -- What I need this to do is insert all the job values, and also allow the user to select a specific, predetermined job_status_id (and action_status_id). I also need it to allow the user to select a contact from a drop down list (that populates according to the contatct_id); if the contact does not exist, the user needs to be able to add one. 


-- -- How does an insert work with a primary key reference? 

-- -- CASE contact_id

-- -- Is it just multiple INSERT statements?

-- INSERT INTO jobs 
-- (title, location, url, date_posted, description, notes, )
-- VALUES
-- ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);

-- SELECT * FROM jobs
-- ORDER BY job_id;

-- company_id,
-- contact_id, 
-- user_id

-- Notes:
-- foo -> job_status table
-- bar -> jobs table

-- --I think this one would work sort of. 

-- --Drop down for status id


-- INSERT INTO bar (description, foo_id) VALUES
--     ( 'testing',     (SELECT id from foo WHERE type='blue') ),
--     ( 'another row', (SELECT id from foo WHERE type='red' ) );


-- -- https://dba.stackexchange.com/questions/46410/how-do-i-insert-a-row-which-contains-a-foreign-key


-- -- Do I need a jobcart? A cart exclusive to a specific user? 