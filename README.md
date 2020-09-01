# DEVMOUNTAIN PERSONAL PROJECT - </br> Track Your Job Application
</hr>

### MVP
- users can create an account
- users can login
- users can view a list of jobs to apply to and job details, including current application status
- users can view a list of action items to do and action item details, including current action item status
- users can view a list of contacts and contact details
- users can view a list of companies and company details
- users can add a new job to the list
- users can add a new action item to the list
- users can add a new contact to the list
- users can edit/delete a job
- users can edit/delete an action item
- users can edit/delete a contact

</br>
</br>

___Icebox___
</br>

- users can filter/sort list of jobs or action items by current status
- users can search for jobs from Indeed and add to their list
- user profile with number of jobs applied to, number of offers, etc.
- footer to have links to About page, Contact TYJA page, and copyright info
- calendar to keep deadlines, schedule tasks, interviews, and meetups, etc.
- user can get job search tips/encouragement (in a popup) upon login
- user can create, view, edit, delete list of companies

#### Database
- Schemas:

users
```SQL
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY
    email VARCHAR(60),
    password TEXT
);
```

jobs
```SQL
CREATE TABLE jobs (
    job_id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    company_id INT REFERENCES users(id),
    location VARCHAR(100),
    url VARCHAR(100), 
    date_posted DATE,
    description TEXT, 
    notes TEXT,
    status VARCHAR(100),
    contact_id INT REFERENCES contacts(id),
    user_id INT REFERENCES users(id)
);
```

action items
```SQL
CREATE TABLE action_items (
    action_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    due_date DATE,
    status VARCHAR(100),
    job_id INT REFERENCES jobs(id),
    contact_id INT REFERENCES contacts(id),
    user_id INT REFERENCES users(id)
);
```

contacts
```SQL
CREATE TABLE contacts (
    contact_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    title VARCHAR(50),
    company_id INT REFERENCES companies(id),
    linkedin_url VARCHAR(200),
    email VARCHAR(100),
    phone VARCHAR(20),
    last_contact DATE,
    notes TEXT,
    user_id iNT REFERENCES users(user_id)
);
```

companies
```SQL
CREATE TABLE companies (
    company_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    url VARCHAR(200),
    glassdoor_rating VARCHAR(200),
    notes TEXT,
    user_id iNT REFERENCES users(user_id)
);
```
#### Server
- Dependencies:
    - express(for RESTful API)
    - massive (interacting with db)
    - bcrypt (authentication)
    - dotenv 
    - express-session (creates session)
- File Structure:
    - server/ 
        - index.js
        - controllers/ 
            - authController.js
            - jobController.js
            - actionController.js
            - contactController.js

#### Front-end
- Dependencies:
    - axios
    - redux
    - react-redux
    - redux-promise-middleware
    - react-router-dom
- File Structure:
    - src/
        - Components/
            - Login.js
            - Header.js
            - Dashboard.js
            - Job.js
            - Action.js
            - Contacts.js
            - AddJob.js
            - AddAction.js
            - AddContact.js
        - App.js
        - App.css
        - reset.css
        - redux/
            - store.js
            - authReducer.js
            - jobReducer.js
            - actionReducer.js
            - contactReducer.js

