const express = require('express');
const controller = require('../controllers/viewController');

const hostRouter = express.Router();

//creating middle-ware using the hostRouter to handle host request and response
hostRouter.get('/adminlogin@786', controller.showAdminLogin); //passing the call back function defined in controller

module.exports = hostRouter;