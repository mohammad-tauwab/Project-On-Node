// importing the express module
const express = require('express');

//importing the userRouter and hostRouter internal module
const userRouter = require('./routes/userRouteHandler');
const hostRouter = require('./routes/hostRouteHandler');

const app = express();


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
    console.log(`Data received`);
    console.log(req.body);
    next();
})

//adding the middle ware to handle home request and send response.
app.get('/', (req, res, next)=>{    
    res.send(`<center>
        <h1> WELCOME TO THE RA PROJECT </h1>
        <a href="/user/register-patients" > Registration </a>
        <center>`);
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
        <h1>404 - NOT FOUND ON THE SERVER </h1>
        </center>`);
})