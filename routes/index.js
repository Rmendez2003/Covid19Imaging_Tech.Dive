
const express = require('express');
const router = express.Router();

const home = require('../controllers/user-controller');

router.get('/', home.getAllExams);  
      

module.exports = router;
