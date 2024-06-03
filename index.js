const express = require('express')
const mongoose = require('mongoose');
const User = require('./models/user.model.js');
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js');
const userRoute = require('./routes/user.route.js');
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req,res)=>{
    res.send('hello world');
});

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

mongoose.connect("mongodb+srv://mspednekar6603:d7G7RQyfLbbLWQ4t@cluster0.qsqrya8.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("connected to database");
    app.listen(3000, ()=> {
        console.log('server is running on port 3000');
    });

})
.catch(() =>{
    console.log("connection failed");
})