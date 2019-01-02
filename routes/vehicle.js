var express = require('express');
var router = express.Router();

const vehicleControll = require('../controllers/vehicle');

router.get('/', vehicleControll.getVehicle);

router.get('/delete', vehicleControll.getDeleteVehicle);

router.get('/edit', vehicleControll.getEditVehicle);

router.post('/add', vehicleControll.postAddVehicle);

router.post('update', vehicleControll.postUpdateVehicle);

module.exports = router;