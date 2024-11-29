const path = require("path");
const fs = require("fs");
const rootDir = require("../utilities/directoryPathHandler");
const getAge = require("./ageCalculator");
let patientList=[]; //empty array to hold the list
const readPatientListFromFile=(callback) => {
  fs.readFile(
    path.join(rootDir, "models", "database", "patientdB.txt"),
    (err, data) => {
      !err && data != ""
        ? (patientList = JSON.parse(data))
        : console.log(err);
      callback(patientList);
    }
  );
}

const dataExtractor = (req, callback) => {
  console.log('in data extractor, extracting data');
  if (req.url === "/patients-list") {
    req.body.ID = getId();
    req.body.DOB = getAge(req.body.DOB);
    patientList.push(req.body);
    writeToFile(patientList);
  }
  callback(patientList);
};

const patientDetails = (ID,callback)=>{
  readPatientListFromFile(patientlist=>{
    patientlist.forEach(patient=>{
      if(Number(patient.ID)===Number(ID)) {
        callback(patient);
      }}) 
  })
}
//*********HELPER FUNCTIONS BELOW ************************/

const writeToFile = (data) => {
  console.log("writing to the file");
  data &&
    fs.writeFile(
      path.join(rootDir, "models", "database", "patientdB.txt"),
      JSON.stringify(data),
      (err) => {
        !err ? console.log("data written successsfully") : console.log(err);
      }
    );
};
const getId = () => {
  return Math.floor(Math.random() * 100);
};

module.exports = {
    dataExtractor,
    readPatientListFromFile,
    patientDetails
}