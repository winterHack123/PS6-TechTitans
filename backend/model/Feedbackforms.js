const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the feedback form
const feedbackSchema = new Schema({
    meetingId: {
        type: String,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    feedback: {
        type: String,
        required: true
    }
});

// Create a model from the schema
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
