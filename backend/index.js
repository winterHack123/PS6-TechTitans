const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Studentdatamodel = require("./model/Studentdatamodel");
const Feedbackdatamodel= require("./model/Feedbackforms")
const cors = require('cors');
const PORT = process.env.PORT || 3001;

// running in localhost
mongoose.connect('mongodb://127.0.0.1:27017/StudentDatabase');

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
    const { year, name, major, interests, email, password } = req.body;
    const newStudent = new Studentdatamodel({ year, name, major, interests, email, password });

    try {
        await newStudent.save();
        res.status(201).send('User data added to the database');
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/sendfeedback', async (req, res) => {
    const { meetingId, name, feedback } = req.body;
    const newFeedback = new Feedbackdatamodel({ meetingId, name, feedback });

    try {
        await newFeedback.save();
        res.status(201).send('Feedback data added to the database');
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/getfeedback', async (req, res) => {
    const { meetingId, name } = req.query;

    try {
        if (meetingId && name) {
            const feedback = await Feedbackdatamodel.find({ meetingId, name });
            res.status(200).json(feedback)
        } else { 
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});


// For showing the login page data
app.post('/login', async (req, res) => {
    const { email, password} = req.query;

    try {
        if (email && password) {
            const user = await Studentdatamodel.findOne({ email, password });
            res.status(200).json(user);
        } else { 
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/findmatch', async (req, res) => {
    const { year,interests } = req.query;

    try {
        const user = await Studentdatamodel.find({ interests,year });
        if(user){
        res.status(200).json(user);
        } 
        else { 
        res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});
app.put('/setIsMatchedTrue', async (req, res) => {
    const { id, Meetingid } = req.query;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send('Invalid user ID');
    }

    try {
        const user = await Studentdatamodel.findByIdAndUpdate(id, { ismatched: true, Meetingid: Meetingid });

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.status(200).send('User isMatched property set to true');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal server error');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
