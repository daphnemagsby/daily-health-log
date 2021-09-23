const router = require('express').Router();
const Entry =require('../models/entries');

router.get('/', (req, res)=>{
	Entry.find()
		.then(entries => res.json(entries))
		.catch(err =>res.status(400).json('Error: '+ err));
});

router.post('/new', (req, res)=>{
	const name = req.body.name;
	const calories = req.body.calories;
	const carbs = req.body.carbs;
	const fat = req.body.fat;
	const protein = req.body.protein;
	const sugar = req.body.sugar;
	
	const newEntry = new Entry({
		name,
		calories,
		carbs,
		fat,
		protein,
		sugar
	});

	newEntry.save()
		.then(() => res.json('New entry added!'))
		.catch(err => res.status(400).json('Error: '+ err));
});

router.put('/edit', (req, res)=>{
	res.send('Entry updated');
});

router.delete('/delete',(req, res)=>{
	res.send('Entry deleted');
});

module.exports = router;