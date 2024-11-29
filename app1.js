// importing the express module
const express = require('express');

const app = express();
const PORT_NUMBER = 3786;
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

//adding the middle ware to handle each request and send response.
app.get('/', (req, res, next)=>{    
    res.send(`<center>
        <h1> WELCOME TO THE RA PROJECT </h1>
        <a href="/user/register-patients" > Registration </a>
        <center>`);
});
app.get('/user/register-patients', (req, res, next)=>{    
    res.send(`<center>
        <h1> This is the Registration page </h1>
        <form action="/user/patients-list" method="post"><lable for="Patient ID">Patient ID</lable>
        <input type="text" name="Patinet ID" /><br/>
             <button type="submit" style = "background-color: aqua; margin-top: 20px">SUBMIT</button>
        </form>
        <center>`);
});
app.post('/user/patients-list', (req, res, next)=>{    
    res.send(`<center>
        <h1> This is the patients list page </h1>
        <button><a href="/" >Home</a></button>
        <center>`);
});
app.get('/host/adminlogin@786', (req, res, next)=>{    
    res.send(`<center>
        <h1> This is the login Page </h1>
        <button><a href="/" >Home</a></button>
        <center>`);
});

//if any request and response is not handled by the above middleware it means we are trying to access an arbitrary URL for whihc 404 is to be displayes

app.use((req,res,next)=>{
    res.send(`
        <center>
        <h1>404 - NOT FOUND ON THE SERVER </h1>
        </center>`);
})
