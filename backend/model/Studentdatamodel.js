const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    year: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },
    interests: [String],
    email: {
      type: String,
      required: true,
      unique: true, 
    },
    password: {
      type: String,
      required: true,
    },
    ismatched: {
      type: Boolean,
      default: false,
    },
    islook: {
      type: String,
      default: 'true',
    },
    Meetingid: [String],
  });
  

const Student = mongoose.model('Student', StudentSchema,'StudentData');

module.exports = Student;