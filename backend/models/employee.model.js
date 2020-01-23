const { Schema, model } = require('mongoose')

const UseRmodel = new Schema({
  firstName: String,
  lastName: String,
  dob: Date,
  sex:  {
      type: String,
      enum:["male","female"]
    },
  salary: Number,
  email: String,
  department: {
    type: Schema.Types.ObjectId,
    ref: 'Department'
  }
}, {
  timestamps: true,
  _id: true
})

module.exports = model('Employee', UseRmodel)


