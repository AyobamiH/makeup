const express = require('express')
const app = express()
const mainRoutes = require('./routes/main')
// const productRoutes = require('./routes/products')
const cors = require('cors')


const PORT = 3000
// const flash = require('express-flash')
const logger = require('morgan')




require('dotenv').config({path: '.env'})


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
app.use(cors())


// app.use(flash())
  
app.use('/', mainRoutes)

app.use('/product', mainRoutes)
app.use('/brand', mainRoutes)
// app.use('/todos', todoRoutes)
 
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}, you better catch it!`)
})    
