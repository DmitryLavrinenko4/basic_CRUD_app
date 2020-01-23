const mongoose = require('mongoose')

const model = mongoose.Schema({
    title: String
}, {
    timestamps: true,
    _id: true
})

module.exports = mongoose.model('Department', model)