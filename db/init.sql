CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE jobs (
    job_id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    -- company_id INT REFERENCES companies(company_id),
    location VARCHAR(100),
    url VARCHAR(100), 
    date_posted VARCHAR(50),
    description TEXT, 
    notes TEXT,
    -- contact_id INT REFERENCES contacts(contact_id),
    user_id INT REFERENCES users(user_id),
    job_status_id INT REFERENCES job_status(job_status_id),
    company VARCHAR(50),
    contact VARCHAR(50)
);

CREATE TABLE job_status (
    job_status_id SERIAL PRIMARY KEY,
    job_status_name VARCHAR(100)
);

--Jobs table needs to reference jobs_status_id instead of job status. And the query to get the status will require another JOIN to get the status name.
INSERT INTO job_status
(job_status_name)
VALUES
('RESEARCHING'), 
('NETWORKING'), 
('APPLYING'), 
('APPLICATION SUBMITTED'), 
('ASSESSMENTS'),
('INTERVIEWING'),
('THANK YOU SENT'),
('WAITING FOR RESPONSE'),
('OFFER'),
('REJECTED'),
('NEGOTIATING'),
('ACCEPTED OFFER'),
('REJECTED OFFER');




-- *****ICEBOX FEATURES*****

-- CREATE TABLE jobs (
--     job_id SERIAL PRIMARY KEY,
--     title VARCHAR(50),
--     company_id INT REFERENCES companies(company_id),
--     location VARCHAR(100),
--     url VARCHAR(100), 
--     date_posted DATE,
--     description TEXT, 
--     notes TEXT,
--     job_status_id INT REFERENCES job_status(job_status_id),
--     contact_id INT REFERENCES contacts(contact_id),
--     user_id INT REFERENCES users(user_id)
-- );


-- CREATE TABLE action_items (
--     action_id SERIAL PRIMARY KEY,
--     name VARCHAR(100),
--     description TEXT,
--     due_date DATE,
--     action_status_id INT REFERENCES action_status(action_status_id),
--     job_id INT REFERENCES jobs(job_id),
--     contact_id INT REFERENCES contacts(contact_id),
--     user_id INT REFERENCES users(user_id)
-- );

-- CREATE TABLE contacts (
--     contact_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50),
--     last_name VARCHAR(50),
--     title VARCHAR(50),
--     company_id INT REFERENCES companies(company_id),
--     linkedin_url VARCHAR(200),
--     email VARCHAR(100),
--     phone VARCHAR(20),
--     last_contact DATE,
--     notes TEXT,
--     user_id INT REFERENCES users(user_id)
-- );

-- CREATE TABLE companies (
--     company_id SERIAL PRIMARY KEY,
--     name VARCHAR(50),
--     url VARCHAR(200),
--     glassdoor_rating VARCHAR(200),
--     notes TEXT,
--     user_id INT REFERENCES users(user_id)
-- );



-- CREATE TABLE action_status ( 
--     action_status_id SERIAL PRIMARY KEY,
--     action_status_name VARCHAR(100)
-- );

-- -- This is not dummy data. I needed the status names of action_items and jobs to be hard-coded and consistent. 
-- INSERT INTO job_status
-- (job_status_name)
-- VALUES
-- ('RESEARCHING'), 
-- ('NETWORKING'), 
-- ('APPLYING'), 
-- ('APPLICATION SUBMITTED'), 
-- ('ASSESSMENTS'),
-- ('INTERVIEWING'),
-- ('THANK YOU SENT'),
-- ('WAITING FOR RESPONSE'),
-- ('OFFER'),
-- ('REJECTED'),
-- ('NEGOTIATING'),
-- ('ACCEPTED OFFER'),
-- ('REJECTED OFFER');

-- INSERT INTO action_status
-- (action_status_name)
-- VALUES
-- ('UPCOMING'), 
-- ('SCHEDULED'), 
-- ('IN PROGRESS'), 
-- ('COMPLETED'), 
-- ('DEFERRED');


--Actions table needs to reference action_status_id instead of action status. And the query to get the status will require another JOIN to get the status name.
--Jobs table needs to reference jobs_status_id instead of job status. And the query to get the status will require another JOIN to get the status name.
