const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//routes


const userRoutes = require('./routes/user')

//environment variable
env.config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api', userRoutes)


// app.get('/', (req, res) => {
//     res.status(200).json({
//         message: 'Hello from server'
//     })
// });

// app.post('/data', (req, res) => {
//     res.status(200).json({
//         message: req.body
//     })
// });

//mongodb connection

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://shaker258:shaker258@cluster0.rts9l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


//mongodb+srv://shaker258:<password>@cluster0.rts9l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.rts9l.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
 console.log('database connected');
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running of port ${process.env.PORT}`);
});