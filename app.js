const express =require('express');
const bodyParser=require('body-parser');
const sequelize=require('./config/db');
const authRoutes=require('./routes/authRoutes');
const categoryRoutes=require('./routes/categoryRoutes');
const serviceRoutes=require('./routes/serviceRoutes');

const app=express();

app.use(bodyParser.json());

app.use('/api',authRoutes);
app.use('/api',categoryRoutes);
app.use('/api',serviceRoutes);

sequelize.sync().then(()=>{
    app.listen(3000,()=>{
        console.log('server listen on 3000');
    });
}).catch(err => console.log(err));