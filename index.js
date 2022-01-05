require('dotenv').config()

const express = require('express')
const app = express()
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))
//routes

app.use('/places', require('./controllers/places.js'))

app.get('*', (req, res) => {
    res.render('error404')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('running at port', PORT);
})
