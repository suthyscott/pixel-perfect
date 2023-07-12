const {Phone} = require('../models/phone')

const phones = [
    {
        name: 'Pixel Fold',
        releaseYear: '2023'
    },
    {
        name: 'Pixel 7',
        releaseYear: '2022'
    },
    {
        name: 'Pixel 7a',
        releaseYear: '2023'
    },
    {
        name: 'Pixel 6 Pro',
        releaseYear: '2021'
    }
]

const seedDatabase = async () => {
    await Phone.bulkCreate(phones)
}

module.exports = {
    seedDatabase
}