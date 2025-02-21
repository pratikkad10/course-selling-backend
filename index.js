const express=require('express');
const app=express();
require('dotenv').config();
const connect =require('./config/connection');
const userRoutes = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const coursesRouter = require('./routes/courseRoutes');
connect();
app.use(express.json());
app.use('/user', userRoutes);
app.use('/admin', adminRouter);
app.use('/courses', coursesRouter)

app.get('/', (req,res)=>{
    res.send('home page!');
})


app.listen(process.env.PORT);
