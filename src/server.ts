import express from 'express'
import route from './routers/router'


const app = express();


app.use('/', route)


app.listen(3000, '127.0.0.1', () => {
    console.log(`🚀 Server running on port ${3000}!`)
});