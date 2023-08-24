const express = require('express');
const router = express.Router();

const signup = require('../controllers/createUser')
const viewUsers = require('../controllers/viewUsers');
const deleteUser = require('../controllers/deleteUser')

router.post('/createEmployee', signup);
router.get('/getallUsers', viewUsers);
router.delete('/deleteUser/:id', deleteUser);

module.exports = router;