const path = require("path");
const fs = require("fs");
const rootDir = require("../utilities/directoryPathHandler");
const getAge = require("./ageCalculator");
const pool = require("./database/databaseConnector");

let patientList = []; //empty array to hold the list
const readPatientListFromPsql = (callback) => {
  let dBquery = "select * from patient";
  pool.connect().then(() => {
    pool.query(dBquery, (err, res) => {
      !err ? (patientList = res.rows) : console.log("Error Reported : ", err);
      callback(patientList);
    });
  });
};

const dataExtractor = (req, callback) => {
  console.log("in data extractor, extracting data");
  if (req.url === "/patients-list") {
    req.body.id = getId();
    req.body.dob = getAge(req.body.dob);
    writeToPsqlDB(req.body,()=>{
      callback();
    });
  }
};

const patientDetails = (ID, callback) => {
  readPatientListFromPsql((patientlist) => {
    patientlist.forEach((patient) => {
      if (Number(patient.id) === Number(ID)) {
        callback(patient);
      }
    });
  });
};
//*********HELPER FUNCTIONS BELOW ************************/

const writeToPsqlDB = (data,callback) => {
  console.log("writing to the file ");
  let dBquery = `insert into patient
  (ID,Name,Aadhar,DOB,Gender,Mobile,Address) values 
  ($1::text,$2::text,$3::text,$4::text,$5::text,$6::text,$7::text)`;
  const values = [
    data.id,
    data.name,
    data.aadhar,
    data.dob,
    data.gender,
    data.mobile,
    data.address,
  ];
  data &&
    pool.connect().then(() => {
      pool.query(dBquery, values, (err, res) => {
        !err ? callback() : console.log("Error Reported : ", err);
      });
    });
};
const getId = () => {
  return Math.floor(Math.random() * 100);
};

module.exports = {
  dataExtractor,
  readPatientListFromPsql,
  patientDetails,
};
