const express = require('express')
const mongoose = require('mongoose')
const articlesRoutes = require('./routes/articleRoutes')
require('dotenv').config()

const app = express()

/*  middleware  */

app.use(express.json()) // needed to access req.body

app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

/* routes */
app.use('/api/articles', articlesRoutes)

/* connect to db*/
//if database is connected then listen for requests.
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Database connected sucessfully.')

        app.listen(process.env.PORT, ()=> {
            console.log('App started on port: ', process.env.PORT)
        })
    })
    .catch((error) => console.log(error) )


