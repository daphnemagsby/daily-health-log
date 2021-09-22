const express = require('express');
const router = express.Router();
const app = express();
const port = process.env.PORT||3000;
const entryRouter = require('./routes/entries');

app.use('/entries', entryRouter);

app.get('/',(req,res)=>{
	res.send('Hello');
});

app.listen(port, ()=> console.log(`App listening on port: ${port}`));