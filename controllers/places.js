const express = require('express')
const router = express.Router()

const places = require('../models/places')
// home page. shows list of palaces
router.get('/', (req, res) => {
    res.render('places/index', { places })
})

// shows a specific place
router.get('/place/:placeId', (req, res) => {
    let placeId = Number(req.params.placeId)
    if (isNaN(placeId)) {
        res.render("error404")
    } else if (!places[placeId]) {
        res.render("error404")
    } else {
        res.render('places/show', { place: places[placeId] })
    }
})

// new place form
router.get('/new', (req, res) => {
    res.render('places/new')
})
// create a new place via post
router.post('/place', (req, res) => {
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }

    places.push(req.body)
    res.redirect('/places')
})


// edit form by place id
router.get('/edit/:placeId', (req, res) => {
    res.render('places/edit', { placeId: req.params.placeId })
})
// update an exisiting place via put
router.put('/place/:placeId', (req, res) => {
    res.send('updated a place, YAY!')
})

// delete a  place
router.delete('/place/:placeId', (req, res) => {
    res.send('deleted a place, YAY!')
})

module.exports = router