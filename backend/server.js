const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const entryRouter = require('./routes/entries');

dotenv.config();

const app = express();
const port = process.env.PORT||3000;


mongoose.connect(process.env.MONGO_URI)
	.then(()=> console.log('DB connected successfully'))
	.catch(err=> console.log(`DB conenction error: ${err.message}`));

app.use(express.json());
app.use('/entries', entryRouter);

app.get('/',(req,res)=>{
	res.send('Hello');
});

app.listen(port, ()=> console.log(`App listening on port: ${port}`));