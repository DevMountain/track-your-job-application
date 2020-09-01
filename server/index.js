require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const app = express();
const authCtrl = require('./controllers/authController');
const jobCtrl = require('./controllers/jobController');
const actionCtrl = require('./controllers/actionController');
const contactCtrl = require('./controllers/contactController');
const compCtrl = require('./controllers/companyController');

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env;

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 7},
    secret: SESSION_SECRET
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('connected to db')
}).catch(err => console.log(err))

//endpoints for authentication
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.post('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUser)

// //endpoints for jobs
// app.get('/api/jobs', jobCtrl.getJobs);
// app.get('/api/jobs/:id', jobCtrl.getJob);
// app.put('/api/jobs/:id', jobCtrl.editJob);
// app.delete('/api/jobs/:id', jobCtrl.deleteJobs);
// app.post('/api/jobs/:id', jobCtrl.addJob);

// //endpoints for action items
// app.get('/api/actions', actionCtrl.getActions);
// app.get('/api/actions/:id', actionCtrl.getAction);
// app.put('/api/actions/:id', actionCtrl.editAction);
// app.delete('/api/actions/:id', actionCtrl.deleteAction);
// app.post('/api/actions/:id', actionCtrl.addAction);

// //endpoints for contact 
// app.get('/api/contacts', contactCtrl.getContacts);
// app.get('/api/contacts/:id', contactCtrl.getContact);
// app.put('/api/contacts/:id', contactCtrl.editContact);
// app.delete('/api/contacts/:id', contactCtrl.deleteContact);
// app.post('/api/contacts/:id', contactCtrl.addContact);


app.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}⚓`)
})