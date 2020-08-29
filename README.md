# DEVMOUNTAIN PERSONAL PROJECT - </br> Track Your Job Application
</hr>

### MVP
- users can create an account
- users can login
- users can view a list of jobs to apply to and job details, including current application status
- users can view a list of action items to do and action item details, including current action item status
- users can view a list of contacts and contact details
- users can add a new job to the list
- users can add a new action item to the list
- users can add a new contact to the list
- users can edit/delete a job
- users can edit/delete an action item
- users can edit/delete a contact

</br>
</br>
***ICEBOX***
- users can filter/sort list of jobs or action items by current status
- users can search for jobs from Indeed and add to their list
- user profile with number of jobs applied to, number of offers, etc.
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

posts
```SQL
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    body TEXT,
    img TEXT,
    post_karma_score INT,
    user_id INT REFERENCES users(user_id)
);
```
comments
```SQL
CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    body TEXT,
    comment_karma_score INT,
    post_id iNT REFERENCES posts(post_id),
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
        - controllers/ 
            - authcontroller.js
            - postcontroller.js

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
            - reducer.js

