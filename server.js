const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        status: 200,
        msg: "Hello wrord !!"
    })
})

app.listen(8088, () => {
    console.log('Server runing on port 8088')
})
