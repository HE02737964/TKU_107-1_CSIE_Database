var express = require('express');
var router = express.Router();

const vehiclelicenceController = require('../controllers/vehiclelicence');

router.get('/', vehiclelicenceController.getVehiclelicence);

router.get('/delete', vehiclelicenceController.getDeleteVehiclelicence);

router.get('/edit', vehiclelicenceController.getDeleteVehiclelicence);

router.post('/add', vehiclelicenceController.postAddVehiclelicence);

router.post('/update', vehiclelicenceController.postUpdateVehiclelicence);

module.exports = router;