import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import MONGO_KEYS from '../config/mongoKeys';

const app = express();

//Body parser middle ware
app.use(bodyParser.json());





mongoose.connect(MONGO_KEYS.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("=====> connected yay====>")
}).catch(() => {
    console.log("Oops!! something missed =====>");
})

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log("======> server started on port 5000")})