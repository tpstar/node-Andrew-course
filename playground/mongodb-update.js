const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c737a987f5d58f4daf6a028')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result)
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c74bc2bd62c3e06e7a31e3a')
  }, {
    $inc: { "age": 1 }
  }, {
    returnOriginal: false,
  }).then((result) => {
    console.log(result)
  })
  // db.close()
})
