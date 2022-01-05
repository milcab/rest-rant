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
router.get('/:id/edit', (req, res) => {
    const place = places[req.params.id]
    res.render('places/edit', { place })
})
// update an exisiting place via put
router.put('/:placeId/edit', (req, res) => {
    const place = places[req.params.placeId];

    place.name = req.body.name
    place.picture = req.body.picture
    place.city = req.body.city
    place.state = req.body.state
    place.cuicines = req.body.cuicines
    place.pic = req.body.pic

    res.redirect('/places')
})

// delete a  place
router.delete('/:id', (req, res) => {
    console.log(req.params)
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})

module.exports = router