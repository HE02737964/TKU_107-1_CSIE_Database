var express = require('express');
var router = express.Router();

const manufactwerController = require('../controllers/manufactwer');

router.get('/', manufactwerController.getManufactwer);

router.get('/delete', manufactwerController.getDeleteManufactwer);

router.get('/edit', manufactwerController.getEditManufactwer);

router.post('/add', manufactwerController.postAddManufactwer);

router.post('/update', manufactwerController.postUpdateManufactwer);

module.exports = router;