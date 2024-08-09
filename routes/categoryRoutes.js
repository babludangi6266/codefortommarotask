 
 const express =require('express');
 const {createCatogory,getCategories,updateCategory , deleteCategory}=require('../controllers/categoryControllers');

 const authenticate =require('../middleware/authenticate');
 const router =express.Router();

//create category
 router.post('/category',authenticate , createCatogory);

 //all category
router.get('/categories', authenticate , getCategories);

//update category
router.put('/category/:categoryId', authenticate , updateCategory);

//delete category
router.delete('/category/:categoryId', authenticate , deleteCategory);

module.exports=router;

 module.exports =router;