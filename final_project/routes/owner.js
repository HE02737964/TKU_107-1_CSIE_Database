var express = require('express');
var router = express.Router();

const ownerController = require('../controllers/owner');

router.get('/', ownerController.getOwner);

router.get('/delete', ownerController.getDeleteOwner);

router.get('/edit', ownerController.getEditOwner);

router.post('/add', ownerController.postAddOwner);

router.post('/update', ownerController.postUpdateOwner);

module.exports = router;