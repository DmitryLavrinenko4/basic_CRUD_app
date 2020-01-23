const app = require('./app')

require('mongoose')
    .connect('mongodb://localhost:27017/testTaskDB', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to mongo db and ready to use.')
    })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server listening port 3000')
        })
    })
    .catch(() => {
        console.log('Error initializing app. Exiting...')
        process.exit(1)
    })
