const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examSchema = new Schema({
PATIENT_ID: {type: Number, min: 0},
AGE: {type: Number, min: 0},
SEX: {type: String},
ZIP: {type: Number},
LATEST_BMI: {type: Number},
LATEST_WEIGHT: {type: Number},
png_filename: {type: String},
exam_Id: {type: Number},
ICU_Admit: {type: String},
Number_ICU_admits: {type: Number},
MORTALITY: {type: String},
_id: {type: Number}
});

module.exports = mongoose.model('Exam', examSchema);