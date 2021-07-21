const { ClarifaiStub, grpc } = require('clarifai-nodejs-grpc')

const stub = ClarifaiStub.grpc()
const metadata = new grpc.Metadata()
metadata.set('authorization', `Key ${process.env.CLARIFAI_KEY_SMART_BRAIN_APP}`)

const model_Face = 'f76196b43bbd45c99b4f3cd8e8b40a8a'

const handleApiCall = (req, res) => {
  stub.PostModelOutputs(
    {
      model_id: model_Face,
      inputs: [{ data: { image: { url: req.body.input } } }]
    },
    metadata,
    (err, response) => {
      if (err) {

        console.log('Error: ' + err)
        res.status(400).json(err)

      } else if (response.status.code !== 10000) {

        error = `[${response.status.code}] Received failed status: ${response.status.description} - ${response.status.details}`
        console.log(error, response)

        console.log('metadata', metadata)
        console.log('model_Face', model_Face)
        console.log('process.env.CLARIFAI_KEY_SMART_BRAIN_APP', process.env.CLARIFAI_KEY_SMART_BRAIN_APP)


        res.status(400).json(error)

      } else {

        console.log('Success : ', response)
        for (const c of response.outputs[0].data.concepts) {
          console.log(c.name + ': ' + c.value)
        }
        res.json(response)

      }
    }
  )

  // return output
}

const handleImage = (req, res, db) => {
  const { id } = req.body
  db('users')
    .where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then((entries) => {
      res.json(entries[0])
    })
    .catch((err) => res.status(400).json(err))
  // .catch((err) => res.status(400).json('unable to get entries'))
}

module.exports = {
  handleImage,
  handleApiCall
}
