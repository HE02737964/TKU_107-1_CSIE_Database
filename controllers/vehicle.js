const moment = require('moment');

const Vehicle = require('../models/vehicle');
const Owner = require('../models/owner');
const Manufactwer = require('../models/manufactwer');

exports.getVehicle= (req, res, next) => {
    Vehicle.fetchAll()
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('MMM D, YYYY');
            }
            //console.log(JSON.stringify(rows));
            //res.send(JSON.stringify(rows));
            res.render('vehicle', {
                data: rows,
                title: 'Vehicle List',
            });
        })
        .catch(err => console.log(err));
};

exports.getDeleteVehicle = (req, res, next) => {
    Vehicle.deleteByEngineNumber (req.query.EngineNumber)
        .then(([rows]) => {
            res.redirect('/vehicle');
        })
        .catch();
};

exports.getEditVehicle = async (req, res, next) => {

    let vehicle;
    let EngineNumber;
    let OwnerId;
    let MId;

    const getOwnerId = await Owner.fetchAll()
        .then(([rows]) => {
            OwnerId = rows;
    })

    const getMId = await Manufactwer.fetchAll()
        .then(([rows]) => {
            MId = rows;
    })

    const getVehicles = await Vehicle.fetchAll()
        .then(([rows]) => {
            vehicle = rows;
            //console.log('findCategories(): ', JSON.stringify(rows));
        })

    const findVehicleByEngineNumber = await Vehicle.findByEngineNumber(req.query.EngineNumber)
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('YYYY-MM-DD');
                console.log('p.date: ', p.date);
            }
            EngineNumber = rows;
            //console.log('post[0].date: ', post[0].date);
           //console.log('findPostById(): ', JSON.stringify(rows));
        })
        .catch(err => console.log(err));
    
    res.render('editVeh', {
        data: EngineNumber,
        title: 'Edit Vehicle',
        vehicle:vehicle,
        OwnerId:OwnerId,
        MId:MId
   });

};

exports.postUpdateVehicle = (req, res, next) => {

    Vehicle.updateByEngineNumber(req, res)
        .then(([rows]) => {
            res.redirect('/vehicle');
        })
        .catch(err => console.log(err));
};

exports.postAddVehicle = (req, res, next) => {

    Vehicle.add(req, res)
        .then(([rows]) => {
            res.redirect('/vehicle');
        })
        .catch(err => console.log(err));
};