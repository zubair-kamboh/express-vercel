const express = require('express')
const axios = require('axios')
const app = express()
var cors = require('cors')

app.use(cors())

app.get('/api', async (req, res) => {
  try {
    const { data } = await axios('https://jsonplaceholder.typicode.com/posts')
    res.send(data)
    return
  } catch (e) {
    console.log(e)
  }
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening at port: ${port}`))

// Export the Express API
module.exports = app
