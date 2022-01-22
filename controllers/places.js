const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            if (err && err.name == 'ValidationError') {
                let message = 'ValidationError: '
                for (var field in err.errors) {
                    message += `${field} was ${err.errors[field].value}. `
                    message += `${err.errors[field].message} `
                    console.log('Validation error message', message)
                }
                res.render('places/new', { message })
            } else {
                res.render('error404')
            }

            // console.log('err', err)
            // res.render('error404')
        })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .populate('comments')
        .then(place => {
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/places/${req.params.id}`)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
        .then(place => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/edit', { place })
        })
        .catch(err => {
            res.render('error404')
        })
})

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

// comments routes
router.post('/:id/comment', async (req, res) => {
    try {
        // turn checkbox into boolean
        req.body.rant = !!req.body.rant

        // create comment
        const comment = await db.Comment.create(req.body)
        // find place
        const place = await db.Place.findById(req.params.id)

        // add comment to place
        place.comments.push(comment.id)
        // save place update
        await place.save()

        // redirect to place page
        res.redirect(`/places/${req.params.id}`)
    } catch (error) {
        console.log(error);
        // oops I messed up
        res.render('error404')
    }
})

module.exports = router