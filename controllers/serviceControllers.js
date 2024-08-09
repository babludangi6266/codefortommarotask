const Services =require('../models/Services');
const ServicePriceOpt =require('../models/ServicePriceOpt');

const createService=async (req,res)=>{
    const {categoryId}=req.params;
    const {name , type , priceOptions}=req.body;

    const service = await Services.create({name,type,categoryId});

    if(priceOptions && priceOptions.length){
        for(const option of priceOptions){
            await ServicePriceOpt.create({...option, serviceId:service.id});
        }
    }
    res.json(service);
};

const updateServices=async (req,res)=>{
    const {categoryId}=req.params;
    const {name , type , priceOptions}=req.body;
    const service = await Services.findByPk(categoryId);

    if(!service){
        return res.status(404).json({message:"Service Not Found"});

    }
   
service.name=name;
service.type=type;
await service.save();

if(priceOptions && priceOptions.length){
    await ServicePriceOpt.destroy({where:{serviceId}});

    for(const option of priceOptions){
        await ServicePriceOpt.create({...option , serviceId: service.id});
    }
}
res.json(service);
};

const getServices=async (req,res)=>{
    const {categoryId}=req.params;
    const service = await Services.findAll({where:{categoryId},include:ServicePriceOpt});
    res.json(services);
};

const deleteService =async (req,res)=>{
    const {serviceId}=req.params;
    await ServicePriceOpt.destroy({where:{serviceId}});
    await Services.destroy({where:{id:serviceId}});

    res.json({message:"services deleted"});
};

module.exports={createService , getServices , updateServices , deleteService};