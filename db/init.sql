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
    company_id INT REFERENCES companies(company_id),
    location VARCHAR(100),
    url VARCHAR(100), 
    date_posted DATE,
    description TEXT, 
    notes TEXT,
    status VARCHAR(100),
    contact_id INT REFERENCES contacts(contact_id),
    user_id INT REFERENCES users(user_id)
);

CREATE TABLE action_items (
    action_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    due_date DATE,
    status VARCHAR(100),
    job_id INT REFERENCES jobs(job_id),
    contact_id INT REFERENCES contacts(contact_id),
    user_id INT REFERENCES users(user_id)
);

CREATE TABLE contacts (
    contact_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    title VARCHAR(50),
    company_id INT REFERENCES companies(company_id),
    linkedin_url VARCHAR(200),
    email VARCHAR(100),
    phone VARCHAR(20),
    last_contact DATE,
    notes TEXT,
    user_id INT REFERENCES users(user_id)
);

CREATE TABLE companies (
    company_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    url VARCHAR(200),
    glassdoor_rating VARCHAR(200),
    notes TEXT,
    user_id INT REFERENCES users(user_id)
);