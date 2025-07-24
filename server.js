
import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';


connectDB();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');


app.listen(PORT, () => {
  console.log(`Server Runs Succesfully on PORT ${PORT}`);
})