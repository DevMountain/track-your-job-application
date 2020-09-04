const { Component } = require("react")
const { default: DashboardJobs } = require("./DashboardJob")

// Job is a completely different Component. It's a way to display a full view of the job. I will edit, save, and delete jobs from this this detailed Job view. This will need to update the Dashboard component. So, the methods to update the list of jobs in the database (and on state), will need to be housed in Dashboard - the master list. So, define the add job function, the 

The DashboardJobs component will make the same request - and get mostly the same clientInformation, but just not as much. Will it need an axios call? 


Dashboard methods: get jobs, delete, edit, add function (defined on jobReducer), handlechange if I add a search/filter function. 

Job Detail view method: add job, delete, edit, saveinput, handlechange, 