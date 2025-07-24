
import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import Formroutes from './routes/Formroutes.js'
import Feedbackroute from './routes/Feedbackroute.js'
import dotenv from 'dotenv';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/',(req, res) => {
  res.render('form');
})

app.use('/', Formroutes);
app.use('/feedback', Feedbackroute);

app.listen(PORT, () => {
  console.log(`Server Runs Succesfully on PORT ${PORT}`);
})