const express=require('express');
const cors=require('cors')
const app =express();
const bodyParser=require('body-parser');
const AuthRouter=require('./Routes/AuthRouter');
const ProductRouter = require("./Routes/ProductRouter");
const OrderRouter = require("./Routes/OrderRouter");

require('dotenv').config();

require('./Models/db');

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://YOUR-NETLIFY-SITE.netlify.app"
  ]
}));

const PORT=process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(express.json());
app.use("/api/products", ProductRouter);


app.use("/api/orders", OrderRouter);
app.use('/auth', AuthRouter);

app.get('/',(req,res)=>{
    res.send("kon hai ree");
})

app.listen(PORT,()=>{
    console.log("server started")
})