import express from "express";
import morgan from "morgan";
 


import productsRoutes from "./routes/products.routes"
const app = express();



//settings
app.set('view engine', 'ejs')

app.use(morgan('dev'));
app.use(express.json())


app.get('/', (req, res) =>{
    res.render(__dirname+ '/views/initial.ejs')
})

app.use('/products',productsRoutes)

export default app