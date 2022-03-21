const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const catController = require('./controllers/CatController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

// first argument is the path, endpoint, express route you want to hit
// second argument (arrow function controller) is what you want to happen when you hit that endpoint
app.get('/', (request, response) => {
  response.send({ msg: 'Server Running' })
})

app.get('/cats', catController.getCats)
app.get('/cats/details', catController.getCatDetails)
app.get('/cats/:catId', catController.getCatById)
app.get('/cats/:catName/details/:catId/', catController.bothParams)
app.get('/cats/cats/wow/cats/dogs/and/cats', catController.getWow)
app.post('/cats', catController.createCatDetails)

// listens for port to be running and when it hears that, it fires off a handler function
app.listen(PORT, () => console.log(`Server running on ${PORT}`))
