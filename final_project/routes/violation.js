var express = require('express');
var router = express.Router();

const violationController = require('../controllers/violation');

router.get('/', violationController.getViolation);

router.get('/delete', violationController.getDeleteViolation);

router.get('/edit', violationController.getEditViolation);

router.post('/add', violationController.postAddViolation);

router.post('/update', violationController.postUpdateViolation);

module.exports = router;