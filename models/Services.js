const {DataTypes}=require('sequelize');
const sequelize =require('../config/db');

const Category =require('../models/category');

const Services=sequelize.define('Service',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    type:{
         type:DataTypes.ENUM('NORMAL','VIP'),
        // type:DataTypes.INTEGER,
        allowNull:false,
    },
    categoryId:{
        type:DataTypes.INTEGER,
        references:{
            model:Category,
            key:'id',
        },
    },
});

Category.hasMany(Services,{foreignKey:'categoryId'});
Services.belongsTo(Category,{foreignKey:'categoryId'});

module.exports=Services