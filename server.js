
const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()
const port = 3030

const whitelist = ['http://localhost:3000/*', 'http://example2.com']
// app.use(cors({
//     origin: "http://localhost:300/",
//     credentials: true
// }))

routes(app);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})