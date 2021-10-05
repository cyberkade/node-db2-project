const Cars = require('./cars-model')
const vinValidator = require('vin-validator')

const checkCarId = async (req, res, next) => {
  try {
    const car = await Cars.getById(req.params.id)
    if (car) {
      req.car = car
      next()
    } else {
      next({ status: 404, message: "car not found" })
    }
  } catch (error) {
    next(error)
  }
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body
  if(!vin) {
    next({status: 400, message: "vin is missing"})
  } else if(!make){
    next({status:400, message: "make is missing"})
  } else if(!model){
    next({status:400, message: "model is missing"})
  } else if(!mileage){
    next({status:400, message: "mileage is missing"})
  } else if( vin && make && model && mileage){
    req.validatedCar = req.body
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  const isValidVin = vinValidator.validate(req.body.vin)
  if(!isValidVin){
    next({status:400, message: `vin ${req.body.vin} is invalid`})
  } else {
    next()
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  const vin = req.body.vin.trim()
  const cars = await Cars.getAll()
  const isRepeated = cars.find( car => car.vin === vin)
  if(isRepeated){
    next({status: 400, message: `vin ${vin} already exists` })
  } else {
    next()
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
