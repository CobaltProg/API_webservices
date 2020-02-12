const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  age: Number,
  gender: String,
  height: Number,
  weight: Number,
  city: String,
  cityCode: String,
  street_number: Number,
  street_type: String,
  street_name: String,
  phone: String,
  image_profil: {
    type: String,
    default: 'https://www.g33kmania.com/wp-content/uploads/Tyrion-Lannister-400x400.jpg'
  }
}, {
  collection: 'users',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = Schema
