const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user-controller');

router.get('/users', UserController.getAllExams);  
router.get('/users/patient', UserController.getOneExam);  
router.post('/users/',UserController.createOneExam);   
router.put('/users/:id',UserController.updateOneExam);
router.delete('/users/delete',UserController.deleteOneExam);





module.exports = router;
