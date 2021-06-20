const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '../build')))

app.get('/hey', (req, res) => res.send('ho!'))



if (process.env.NODE_ENV == 'production') {

    // all other requests default to main

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../build', 'index.html'))
    })
}

app.listen(8080)