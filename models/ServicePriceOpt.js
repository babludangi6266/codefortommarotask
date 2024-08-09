const {DataTypes}=require('sequelize');
const sequelize =require('../config/db');

const Service =require('./Services');
const Services = require('./Services');

const ServicePriceOpt=sequelize.define('ServicePriceOpt',{
    duration:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    type:{
        type:DataTypes.ENUM('Hourly','Weekly','Monthly'),
        allowNull:false,
    },
    serviceId:{
        type:DataTypes.INTEGER,
        references:{
            model:Services,
            key:'id',
        },
    },
});

Services.hasMany(ServicePriceOpt,{foreignKey:'serviceId'});
ServicePriceOpt.belongsTo(Services,{foreignKey:'serviceId'});

module.exports=ServicePriceOpt;


