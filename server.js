const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        status: 201,
        msg: "Hello wrord (update 1st) !!"
    })
})

app.listen(8088, () => {
    console.log('Server runing on port 8088')
})
