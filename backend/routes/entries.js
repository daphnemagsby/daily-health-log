const router = require('express').Router();

router.get('/', (req, res)=>{
	res.send('Entries Home Page');
});

router.post('/new', (req, res)=>{
	res.send('New entry added');
});

router.put('/edit', (req, res)=>{
	res.send('Entry updated');
});

router.delete('/delete',(req, res)=>{
	res.send('Entry deleted');
});

module.exports = router;