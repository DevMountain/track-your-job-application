-- SELECT jobs.title, companies.name FROM jobs 
-- JOIN ON jobs.company_id = companies.company_id 
-- WHERE job_id = $1;


--This will get the specific information below. You could just use the comprehensive one in get_jobs.sql to get all info from the database, and then specify what data you want in the endpoint or in the front end axios call. 
SELECT u.user_id, j.title, c.name FROM jobs j
JOIN companies c ON j.company_id = c.company_id
JOIN users u ON j.user_id = u.user_id;
SELECT u.user_id, j.title, c.name FROM jobs j
JOIN companies c ON j.company_id = c.company_id
JOIN users u ON j.user_id = u.user_id;

-- id sent on params. 

--Do I start the endpoint method with getUser, and then find all the jobs 

-- Where will the query get the user_id from? 

-- The endpoint needs the user_id to be able to know which jobs to get. Does the get_user method already set it up so that the queries will only get 


-- What if - 

-- first query - get all jobs where user_id = $1, 
-- THEN
-- second query - get all jobs with the join for name and title. 