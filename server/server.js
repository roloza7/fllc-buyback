const express = require('express')
const path = require('path')
const app = express()

// declare app/json parser
app.use(express.json());


app.use(express.static(path.join(__dirname, '../build')))

app.use('/request', require('./routes/request'))



if (process.env.NODE_ENV == 'production') {

    // all other requests default to main

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../build', 'index.html'))
    })
}

app.listen(8080, () => console.log('Started server at http://localhost:8080'));