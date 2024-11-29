const {
  readPatientListFromPsql,
  dataExtractor,
  patientDetails
} = require("../models/psqlController");

exports.showRegistration = (req, res, next) => {
  res.render("registration");
};
exports.showPatientList = (req, res, next) => {
  const renderOnComplete = (patientList) => {
    res.render("patientslist", { patientList });
  };
  if (req.method === "GET") readPatientListFromPsql(renderOnComplete);
  else
    dataExtractor((req),() => { // write the data to the file first and then 
      readPatientListFromPsql(renderOnComplete); // whne updated read the database 
    });
};
exports.showAdminLogin = (req, res, next) => {
  res.render("adminlogin");
};
exports.showPatientDetails = (req, res, next) => {
  const renderOnGettingDetails=(patient)=>{
    res.render("patientdetails",{patient,title:"details"});
  }
  patientDetails(req.params.ID,renderOnGettingDetails) 
};

//*************** HANDLING READ WRITE OPERATION ********************/
