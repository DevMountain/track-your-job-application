-- Dummy data
INSERT INTO users
(email, password, first_name, last_name)
VALUES
('janedoe@gmail.com', $1, 'Jane', 'Doe')
('johnsmith@gmail.com', $1, 'John', 'Smith')
('davidjones@gmail.com', $1, 'David', 'Jones')
('lizhernandez@gmail.com', $1, 'Liz', 'Hernandez')


INSERT INTO jobs
(title, company_id, )