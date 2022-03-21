const getCats = (request, response) => {
  response.send({
    message: 'Getting Cats'
  })
}

const getCatById = (request, response) => {
  response.send({
    message: `Found Cat with an id of ${request.params.catId}`
  })
}

const bothParams = (request, response) => {
  response.send({
    message: `Getting ${request.params.catName}, a cat with an id of ${request.params.catId}.`
  })
}

const getWow = (request, response) => {
  response.send({
    message: `Wow, that's a very detailed path for no reason.`
  })
}

const getCatDetails = (request, response) => {
  response.send({
    message: `My cat is named ${request.query.catName} and is ${request.query.catAge} years old`
  })
}

const createCatDetails = (request, response) => {
  response.send(request.body)
}

module.exports = {
  getCats,
  getCatById,
  bothParams,
  getWow,
  getCatDetails,
  createCatDetails
}
