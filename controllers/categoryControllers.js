const Category=require('../models/category');
const Services=require('../models/Services');

const createCatogory=async (req,res)=>{
    const {name}=req.body;
    const category=await Category.create({name});
    res.json(category);
};

const getCategories=async(req,res)=>{
    const categories=await Category.findAll();
    res.json(categories);
};

const updateCategory = async (req,res)=>{
    const {categoriesID}=req.params;
    const {name}=req.body;

    const category=await Category.findByPk(categoriesID);
    if(!category){
        return res.status(404).json({Message:"Category Not Foundd"});
    }

    category.name=name;
    await category.save();

    res.json(category);
};

const deleteCategory=async(req,res)=>{
    const {categoryId}=req.params;

    const services=await Services.findAll({where:{categoryId}});

    if(services.length > 0){
        return res.status(400).json({Message:"category contains services"});
    }

    await Category.destroy({where:{id: categoryId}});

    res.json({Message:"Category Deleted"});

}

module.exports={createCatogory,getCategories,updateCategory , deleteCategory};