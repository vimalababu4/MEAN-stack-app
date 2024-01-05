var express = require('express');
var userController = require('../src/user/userController');

const router = express.Router();

router.route('/user/getAll').get(userController.getDataControllerfn);

router.route('/user/create').post(userController.createUserControllerfn);

router.route('/user/update/:id').put(userController.updateUserDataControllerfn);

router.route('/user/delete/:id').delete(userController.deleteUserDataControllerfn);


module.exports = router;