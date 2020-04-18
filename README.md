
# Bookmark API

A complete authentication system which can be used as a starter code for creating any new application



# Software Requirements
1. Node.js 8+
2. MongoDB 3.6+ (Recommended 4+)



# dependencies used

1. "bcrypt"
2. "bcrypt-nodejs"
3. "body-parser"
4. "nodemon"
5. "connect-flash"
6. "connect-mongo"
7. "cookie-parser"
8. "ejs"
9. "express"
10. "express-ejs-layouts"
11. "express-flash-messages"
12. "express-recaptcha"
13. "express-session"
14. "flash"
15. "mongoose"
16. "passport"
17. "passport-local"



# Routes
1. /upload-csv → To upload a csv.
2. /show-all → To show all the file links(made frontend also)
3. /show/:id -> To show a specific file(made frontend)
4. /search -> To search a key



# setup
1. clone https://github.com/1709abhishek/Bookmark-API
2. cd BookmarkAPI
3. run nodemon index.js
4. open postman and visit localhost:8000/upload-csv
5. upload csv file in body tag by selecting file.
6. open browser and visit localhost:8000/show-all
7. open browser and visit localhost:8000/show/:id (paste id) or click the link.
8. enter something in search.
9. data models are:
--Files: filename



# Project structure
.

    ├── index.js
    ├── package.json
    ├── config
        ├── mongoose.js   
    ├── tmp
    │   ├── csv
    │       ├── csv_files_stored_through_multe
    ├── views
    │   ├── home.ejs
    │   ├── search.js
    │   ├── select.js
    └── api
        ├── controllers
        │   ├── homeController.js
        ├── models
        │   ├── Files.js
        ├── routes
            ├── index.js


# Features
1. Upload any csv file into the system (consider the delimiter to be a comma ‘ , ’) [If you don’t know what’s a csv, download the other file in this folder and take a look at it, then google a little more]
2. Display a list of all uploaded csv files
3. When the user selects a file, display all the data (with column headers) in a table on the page (front end)
4. There should be a search box which searches on the front end itself and displays the matching rows of the table only (empty search box displays all the data). (you can put a search on any one column)


# Bugs or improvements
Every project needs improvements, Feel free to report any bugs or improvements. Pull requests are always welcome.

