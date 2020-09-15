const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (_,res) => res.json({message: 'ok'}))

app.post('/fruit', (req,res) => res.json({fruit: req.body.fruit}))

app.listen(3001, ()=> console.log('Server running on port 3001'))
