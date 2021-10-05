const express = require('express')
const Cars = require('./cars-model')
const {checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique} = require('./cars-middleware')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const cars = await Cars.getAll()
        res.status(200).json(cars)
    }
    catch (err) {
        next(err)
    }
});

router.get('/:id', checkCarId, async (req, res, next) => {
    try {
        const car = await Cars.getById(req.params.id)
        res.status(200).json(car)
    }
    catch (err) {
        next(err)
    }
});

module.exports = router
