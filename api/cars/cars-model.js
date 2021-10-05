const db = require('../../data/db-config')

const getAll = () => {
  // select * from cars
  return db('cars')
}

const getById = (id) => {
  return db('cars')
  .where('id',id)
  .first()
}

const create = () => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create
}
