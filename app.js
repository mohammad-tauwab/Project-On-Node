// importing the express module
const express = require('express');
const path = require('path');
//importing the userRouter and hostRouter internal module
const userRouter = require('./routes/userRouteHandler');
const hostRouter = require('./routes/hostRouteHandler');
//importing rootDir forom internal module
const rootDir = require('./utilities/directoryPathHandler');

const app = express();
//this is the editted part of the code

app.set('view engine', 'ejs');//setting up the view engine ejs
app.set('views','views'); // setting up the folder where we store 

app.use(express.static(path.join(rootDir,'public'))); // making style folder inside public folder accessible to public for linking to the ejs files

const PORT_NUMBER = 3786;

//starting the server to hadle request.
app.listen(PORT_NUMBER, ()=>{
    console.log(`The server has been strated at http://localhost:${PORT_NUMBER}`);
})

//adding the middle-ware to extract the data in get/post request 
app.use(express.urlencoded());

//adding the middle-ware to pritn the request, response and data received at each get post method for debugging
app.use((req, res, next)=>{
    console.log(`methos:${req.method} and Url:${req.url}`);
    console.log(req.body);
    next();
})

//adding the middle ware to handle home request and send response.
app.get('/', (req, res, next)=>{    
    res.render("home");
});

/*
*moving the code here to userRouters for handling of user request
***** importing the userRouter above*/
app.use('/user',userRouter);
/********* using userRouter above ******** */

/*moving the code here to hostRouters for handling of host request
***** importing the hostRouter above*/
app.use('/host',hostRouter);
/********* using hostRouter above ******** */



//if any request and response is not handled by the above middleware it means we are trying to access an arbitrary URL for whihc 404 is to be displayes

app.use((req,res,next)=>{
    res.send(`
        <center>
        <h1>404 - NOT FOUND ON THE SERVER AGAIN </h1>
        </center>`);
})
