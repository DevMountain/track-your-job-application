-- Dummy data
INSERT INTO users
(email, password, first_name, last_name)
VALUES
3 ('janedoe@gmail.com', $1, 'Jane', 'Doe')
4('johnsmith@gmail.com', $1, 'John', 'Smith')
5('davidjones@gmail.com', $1, 'David', 'Jones')
6('lizhernandez@gmail.com', $1, 'Liz', 'Hernandez')


--companies
INSERT INTO companies
(name, url, glassdoor_rating, notes, user_id)
VALUES
('Adobe', 'https://www.adobe.com/', 'https://www.glassdoor.com/Reviews/Adobe-Reviews-E1090.htm', 'Recruiter said she''d keep me in the talent pipeline for future roles.', 6),
('Podium', 'https://www.adobe.com/', 'https://www.glassdoor.com/Overview/Working-at-Podium-EI_IE1010497.11,17.htm', 'Have applied for 4 jobs here.', 5),
('Lucidchart', 'https://www.lucidchart.com/pages/', 'https://www.glassdoor.com/Overview/Working-at-Lucid-Software-EI_IE636868.11,25.htm', 'Friend Amy works here.', 3),
('Pluralsight', 'https://www.pluralsight.com/', 'https://www.glassdoor.com/Overview/Working-at-Pluralsight-EI_IE672636.11,22.htm', 'Had lunch with recruiter Oct 2019.', 4),
('BambooHR', 'https://www.bamboohr.com/', 'https://www.glassdoor.com/Overview/Working-at-BambooHR-EI_IE676898.11,19.htm', 'Christie recommends.', 7),
('Lendio', 'https://www.lendio.com/', 'https://www.glassdoor.com/Overview/Working-at-Lendio-EI_IE501077.11,17.htm', 'Good benefits.', 3),

('Adobe', 'https://www.adobe.com/', 'https://www.glassdoor.com/Reviews/Adobe-Reviews-E1090.htm', 'Recruiter says job will open next month.', 5),
('Podium', 'https://www.adobe.com/', 'https://www.glassdoor.com/Overview/Working-at-Podium-EI_IE1010497.11,17.htm', 'Have applied for 2 jobs here.', 3),
('Lucidchart', 'https://www.lucidchart.com/pages/', 'https://www.glassdoor.com/Overview/Working-at-Lucid-Software-EI_IE636868.11,25.htm', 'Friend Harry works here.', 5),
('Pluralsight', 'https://www.pluralsight.com/', 'https://www.glassdoor.com/Overview/Working-at-Pluralsight-EI_IE672636.11,22.htm', 'Had lunch with recruiter Feb 2020.', 6),
('BambooHR', 'https://www.bamboohr.com/', 'https://www.glassdoor.com/Overview/Working-at-BambooHR-EI_IE676898.11,19.htm', 'Gwen recommends.', 4),
('Lendio', 'https://www.lendio.com/', 'https://www.glassdoor.com/Overview/Working-at-Lendio-EI_IE501077.11,17.htm', 'Great benefits.', 4)


--contacts
INSERT INTO contacts
(first_name, last_name, title, company_id, linkedin_url, email, phone, last_contact, notes, user_id)
VALUES
('Harry', 'Potter', 'Technical Recruiter', 1, 'https://www.linkedin.com/in/harry-potter-682996122/', 'harrypotter@adobe.com', '385-221-1000', '2020-05-20', 'Need to call again.', 5),
('Harry', 'Potter', 'Technical Recruiter', 1, 'https://www.linkedin.com/in/harry-potter-682996122/', 'harrypotter@adobe.com', '385-221-1000', '2020-05-20', 'Need to call again.', 6),
('Harry', 'Potter', 'Technical Recruiter', 1, 'https://www.linkedin.com/in/harry-potter-682996122/', 'harrypotter@adobe.com', '385-221-1000', '2020-05-20', 'Need to call again.', 4),

('Don', 'Quixote', 'Sr. Web Developer', 2, 'https://www.linkedin.com/in/don-quixote-234566', 'donquixote@gmail.com', '123-456-5678', '2020-01-30', 'Schedule lunch.', 3),
('Don', 'Quixote', 'Sr. Web Developer', 2, 'https://www.linkedin.com/in/don-quixote-234566', 'donquixote@gmail.com', '123-456-5678', '2020-01-30', 'Schedule lunch.', 3),

('Bilbo', 'Baggins', 'QA Engineer', 3, 'https://www.linkedin.com/in/bilbo-baggins-1234566', 'bilbobaggins@gmail.com', '234-567-9876', '2020-04-30', 'Schedule lunch.', 5),
('Bilbo', 'Baggins', 'QA Engineer', 3, 'https://www.linkedin.com/in/bilbo-baggins-1234566', 'bilbobaggins@gmail.com', '234-567-9876', '2020-02-12', 'Schedule lunch.', 3),
('Bilbo', 'Baggins', 'QA Engineer', 3, 'https://www.linkedin.com/in/bilbo-baggins-1234566', 'bilbobaggins@gmail.com', '234-567-9876', '2020-07-18', 'Schedule lunch.', 6),

('Katniss', 'Everdeen', 'Product Manager', 4, 'https://www.linkedin.com/in/katniss-everdeen-1234', 'katnisseverdeen@gmail.com', '123-323-3435', '2020-06-08', 'She''s going to email her supervisor about job.', 4),
('Katniss', 'Everdeen', 'Product Manager', 4, 'https://www.linkedin.com/in/katniss-everdeen-1234', 'katnisseverdeen@gmail.com', '123-323-3435', '2020-05-24', 'She''s going to email her supervisor about job.', 6),
('Katniss', 'Everdeen', 'Product Manager', 4, 'https://www.linkedin.com/in/katniss-everdeen-1234', 'katnisseverdeen@gmail.com', '123-323-3435', '2020-08-10', 'She''s going to email her supervisor about job.', 6),
('Bilbo', 'Baggins', 'QA Engineer', 3, 'https://www.linkedin.com/in/bilbo-baggins-1234566', 'bilbobaggins@gmail.com', '234-567-9876', '2020-03-02', 'Schedule lunch.', 4),

('Atticus', 'Finch', 'Director of Training', 5, 'https://www.linkedin.com/in/atticus-finch-1234566', 'atticusfinch@gmail.com', '321-234-5678', '2020-05-12', 'He is friends with the recruiters.', 4),
('Atticus', 'Finch', 'Director of Training', 5, 'https://www.linkedin.com/in/atticus-finch-1234566', 'atticusfinch@gmail.com', '321-234-5678', '2020-01-15', 'He is friends with the recruiters.', 7),
('Atticus', 'Finch', 'Director of Training', 5, 'https://www.linkedin.com/in/atticus-finch-1234566', 'atticusfinch@gmail.com', '321-234-5678', '2020-07-02', 'He is friends with the recruiters.', 5),

('Elizabeth', 'Bennet', 'CTO', 6, 'https://www.linkedin.com/in/elizabeth-bennet-123455', 'elizabethbennet@gmail.com', '432-212-3452', '2020-09-01', 'Family friend.', 3),
('Elizabeth', 'Bennet', 'CTO', 6, 'https://www.linkedin.com/in/elizabeth-bennet-123455', 'elizabethbennet@gmail.com', '432-212-3452', '2020-02-27', 'Had lunch last month.', 4),
('Elizabeth', 'Bennet', 'CTO', 6, 'https://www.linkedin.com/in/elizabeth-bennet-123455', 'elizabethbennet@gmail.com', '432-212-3452', '2020-07-21', 'Sent her thank you note for lunch.', 7);



--jobs
INSERT INTO jobs
(title, company_id, location, url, date_posted, description, notes, status, contact_id, user_id)
VALUES
('Web Developer', 1, 'Lehi, UT', 'https://www.adobe.com/job232', '2020-08-24', 'Full stack web developer, 2 yrs experience.', 'Reach out to recruiter about requirements.', 'Networking', 1, 6),
('Product Designer', 1, 'Lehi, UT', 'https://www.adobe.com/job232', '2020-08-24', 'Full stack web developer, 2 yrs experience.', 'Reach out to recruiter about requirements.', 'Networking', 1, 5),
('Software Engineer', 2, 'Lehi, UT', 'https://www.adobe.com/job232', '2020-08-24', 'Full stack web developer, 2 yrs experience.', 'Reach out to recruiter about requirements.', 'Networking', 2, 5),
('Web Developer', 2, 'Lehi, UT', 'https://www.adobe.com/job232', '2020-08-24', 'Full stack web developer, 2 yrs experience.', 'Reach out to recruiter about requirements.', 'Networking', 2, 3),

('Product Manager', 3, 'Salt Lake City, UT', 'https://www.adobe.com/job232', '2020-08-24', 'Full stack web developer, 2 yrs experience.', 'Reach out to recruiter about requirements.', 'Networking', 3, 5),
('Web Developer', 4, 'Salt Lake City, UT', 'https://www.adobe.com/job232', '2020-08-24', 'Full stack web developer, 2 yrs experience.', 'Reach out to recruiter about requirements.', 'Networking', 4, 3),

('Software Engineer', 5, 'Lehi, UT', 'https://www.adobe.com/job232', '2020-08-24', 'Full stack web developer, 2 yrs experience.', 'Reach out to recruiter about requirements.', 'Networking', 4, 5),
('Product Manager', 6, 'Lehi, UT', 'https://www.adobe.com/job232', '2020-08-24', 'Full stack web developer, 2 yrs experience.', 'Reach out to recruiter about requirements.', 'Networking', 7, 6);


-- job_id: 9-16
-- contact_id: 1-18
-- user_id: 3-8 (3-6)

--action items
INSERT INTO action_items
(name, description, due_date, status, job_id, contact_id, user_id)
VALUES
('Update resume', 'Tailor it for web developer job to apply to next week.', '2020-09-20', 'Scheduled', null, 9, 3),
('Finish Udemy course', 'Finish module 10 and review questions.', '2020-09-29', 'Upcoming', null, 10, 4),
('Schedule lunch', 'Call Katniss to see if next Wednesday works.', '2020-09-10', 'Scheduled', null, 11, 5),
('Finish cover letter', 'Tailor it for web developer job to apply to next week.', '2020-09-20', 'In Progress', 15, 12, 6),
('Schedule lunch', 'Call Atticus to see if next Wendesday works', '2020-09-20', 'Completed', null, 13, 3),
('Finish application', 'Upload cover letter.', '2020-09-25', 'In Progress', 11, 14, 4),
('Attend meetup', 'Utah JS. Give 10 minute presentation on xxxxx.', '2020-09-24', 'Scheduled', null, 15, 5),
('Update resume', 'Tailor it for web developer job to apply to next week.', '2020-09-07', 'Deferred', 13, 16, 6);
