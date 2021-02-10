const express=require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017',
{useNewUrlParser: true,
    useUnifiedTopology: true
})
const cors = require('cors')                
const app = express()
const port=process.env.PORT | 80
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/api',require('./routes/user.route'))
app.use(express.static('public'))
app.listen(port)
