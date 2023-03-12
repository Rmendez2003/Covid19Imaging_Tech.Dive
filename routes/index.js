
const express = require('express');
const router = express.Router();

const home = require('../controllers/user-controller');

router.get('/', home.getAllExams);  
      

//const url = "mongodb+srv://techdive12:5boIQEOOBjF2W9xL@covid19imaging.tedajh9.mongodb.net/?retryWrites=true&w=majority"; //Mongodb link
//const dbName ='Covid19Data';//

///add main



module.exports = router;
