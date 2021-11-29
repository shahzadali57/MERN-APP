const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')



const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());



const DB_URI ="mongodb+srv://admin:admin@cluster0.svcjq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(DB_URI, 
    { useNewUrlParser: true,
        useUnifiedTopology:true,
        }
);

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

mongoose.connection.on("connected", () => console.log("mongoose connected"));
mongoose.connection.on("error", (error) => console.log(`mongoose error${error.message}`));

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})
