const Cars = require('./cars-model')

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
  } else if( vin && make && model && typeof mileage === 'number'){
    req.validatedCar = req.body
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
