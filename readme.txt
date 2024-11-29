26-11-2024 :
*******************

1. Created a folder named Project1 and add a file app.js
2. Create a package.json for project by command npm init
3. install nodemon : npm install nodemon --save-dev
4. install express : npm install express --save-g
4a.install embedded javascript : npm install --save ejs
5. create a folder structure in the project folder [controllers, models/database, node_modules(already created by npm), public, routes,utilities,views]
6. create nodemon.json to overwrite its default behaviour and ignore any cahnges in models/database folder.
7. modify the package.json script to run the application through nodemon aap.js instead of node app.js at npm start command
8. install tailwindcss : npn install -D tailwindcss 
9. create tailwind config.js : npx tailwindcss init
10. create views/input.css and add the properties (refer tailwindcss website)
11. create output.css in public folder for completing the configuration of tailwind
12. modify npm start in package.json to run tailwind and js together add the follwoing code
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "tailwind": "tailwindcss -i ./views/input.css -o ./public/tailStyles.css",
    "start": "nodemon app.js & npm run tailwind"
}

************* PROJECT IS READY TO ADD CODES NOW *****************************

// OBJECVTIVE  DAY1: 
// Creating a home page with registartion link, and view patients 
// when '/registartion' is requested by client show a registration page for patients
// when the detaisl are filled and post is requested save the details to the database and redirect to the home page
// when '/view-patients' is requested display the list of all the patients with [patientID, name, conatct and a shwo deatils button]

***** (1.1.0) **** (Project.Day.Pahses)
1. Creating and testing the server and sending the simple response using express app.get();
2. creating a link at home and re-directing it io the patient list page and from there re-directing to the home page
3. add an input type in the registration page to check the data send by the client is receied at server or not by using express.urlenclosed();
4. add a 404 not found page


**** (1.1.1) ****** (UPDATES)
1. Sepatrate the routes handler for user and host using express.router(); move the middle-ware to hande request from user and host in these files.
2. Separate the html codes from the middleware to ejs files in a view folder using Path module of express i.e path.join(--dirname, <each folder/files name as string separated by comma>); in the routeHandlers.
3. Create a rootDir method in the utils to get the current directory instead of __dirname and update the path.join using rootDir = path.dirname(require.main.filename) which returns the path to the directory where the main app.js is located

**** (1.1.2)  ********* (UPDATES)
1. Add the ejs engine view and folder containing the ejs files to be rendered using res.render to avoid giving path for each render in app.js file
example 
app.set('view engine', 'ejs');//setting up the view engine ejs
app.set('views','views'); // setting up the folder where we store ejs
2. Update the user and host routes handlers to render directly the files
3. Update the home ejs by adding the tailwind css .

//OBJECVTIVE DAY : 02
//Design the pages using the tailwindcss
//Add the deatisl of the patients during registration such as {
    name, dateofBirth, gender, mobile_number, aadharNumber
} 
//on submit of the details generate an ID and add the patient to the list
//Also save the details to the local database in a file
//On reload try to read from the file and display the details on the patinet list

(1.2.1)
1. Designed the home page 
2. Designed the registration page
3. Desing the list page

*********(1.2.2) *************** UPDATE
1. Updating the controllers
2. Write the data to the files using the dataController
3. Read the written data from the file into the view controller 
4. Using the dynamic variable in the url.Captuirng the IDs of the patient which is clicked and showing the detasils of them.
5. Use age calculator to calculate age from dob

*************(1.2.3)*************** UPDATE
Connecting the postgres sql database to the node
1. install postgress npm install pg
2. install the postgres server on local machine and link to to PG Admin for maintenanc
3. Through PG Admin make a database
4. Using {Client} make a connect and pass an object with database details to connect to database const client = new Client({
    user: 'postgres',
    password : 'Sahil@8237',
    host : '127.0.0.1',
    port : 5432,
    database : 'node_local_database'
});
5. Add some data to database using the PG Admin 
6. Get the data using node code 
client.connect().then(()=> console.log("connected"));
let dBquery = 'select * from patient';
client.query(dBquery,(err,res)=>{
    console.log(res.rows);
});
7.Storing and reading data from databse using pool.query();