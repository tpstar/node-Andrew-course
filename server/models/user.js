var mongoose = require('mongoose')

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
})

module.exports = { User }

// var greg = new User({
//   email: ''
// })
//
// greg.save().then((doc) => {
//     console.log('Saved todo', doc._doc)
//   }, (e) => {
//     console.log('Unable to save todo', e)
// })
