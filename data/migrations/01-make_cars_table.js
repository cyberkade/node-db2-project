exports.up = async function (knex) {
  await knex.schema.createTable('cars', table => {
    table.increments('id').unsigned()
    table.string('vin', 17).unique().notNullable()
    table.string('make', 64).notNullable()
    table.string('model', 64).notNullable()
    table.integer('mileage').notNullable()
    table.string('title', 128)
    table.string('transmission', 64)
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars')
};
