exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert([
        {
            "vin": "11111111111111111",
            "make": "ACURA",
            "model": "TL 3.2L",
            "mileage": "120000",
            "transmission": 'Automatic'
        },
        {
            "vin": "22222222222222222",
            "make": "FISKER",
            "model": "KARMA",
            "mileage": 76555,
            "title": "Kade Gurf",
            "transmission": 'Manual'
        },
    ])
  };
