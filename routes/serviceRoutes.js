
const express =require('express');
const {createService , getServices , updateServices , deleteService}=require('../controllers/serviceControllers');

const authenticate =require('../middleware/authenticate');
const router =express.Router();

//create services
router.post('/category/:categoryId/services', authenticate, createService);

//get all services
router.get('/category/:categoryId/services', authenticate, getServices);

//update 
router.put('/category/:categoryId/services/:serviceId', authenticate , updateServices);

//delete 
router.put('/category/:categoryId/services/:serviceId', authenticate , deleteService);

module.exports=router;
