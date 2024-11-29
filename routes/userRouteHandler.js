//import module express
const express = require("express");
//const path = require('path');

//importing the local module rootDir
const rootDir = require("../utilities/directoryPathHandler");
const controller = require("../controllers/viewController");
//this returns the path to the directory where the app.js is located

//using router
const userRouter = express.Router();

//creating middle-ware using the userRouter to handle user request and response
userRouter.get("/register-patients", controller.showRegistration); //moving the function to controller
//passing the call back function defined in controller

userRouter.get("/patients-list", controller.showPatientList);

userRouter.post("/patients-list", controller.showPatientList);

userRouter.get("/:ID/details", controller.showPatientDetails);

module.exports = userRouter;
