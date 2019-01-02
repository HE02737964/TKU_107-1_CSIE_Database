const moment = require('moment');

const Vehiclelicence = require('../models/vehiclelicence');

exports.getVehiclelicence = (req, res, next) => {
    Vehiclelicence.fetchAll()
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('MMM D, YYYY');
            }
            //console.log(JSON.stringify(rows));
            //res.send(JSON.stringify(rows));
            res.render('vehiclelicence', {
                data: rows,
                title: 'VehicleLicence List',
            });
        })
        .catch(err => console.log(err));
};

exports.getDeleteVehiclelicence = (req, res, next) => {
    Vehiclelicence.deleteByLicenceNumber(req.query.LicenceNumber)
        .then(([rows]) => {
            res.redirect('/vehiclelicence');
        })
        .catch();
};

exports.getEditVehiclelicence = async (req, res, next) => {

    let vehiclelicence;
    let LicenceNumber;

    const getVehiclelicence = await Vehiclelicence.fetchAll()
        .then(([rows]) => {
            vehiclelicence = rows;
            //console.log('findCategories(): ', JSON.stringify(rows));
        })

    const findVehiclelicenceByLicenceNumber = await Vehiclelicence.findByLicenceNumber(req.query.LicenceNumber)
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('YYYY-MM-DD');
                console.log('p.date: ', p.date);
            }
            LicenceNumber = rows;
            //console.log('post[0].date: ', post[0].date);
           console.log('findPostById(): ', JSON.stringify(LicenceNumber));
        })
        .catch(err => console.log(err));
    
    res.render('editVehLic', {
        data: LicenceNumber,
        title: 'Edit VehicleLicence',
        vehiclelicence:vehiclelicence
   });
};

exports.postUpdateVehiclelicence = (req, res, next) => {

    Vehiclelicence.updateByLicenceNumber(req, res)
        .then(([rows]) => {
            res.redirect('/vehiclelicence');
        })
        .catch(err => console.log(err));
};

exports.postAddVehiclelicence = (req, res, next) => {

    Vehiclelicence.add(req, res)
        .then(([rows]) => {
            res.redirect('/vehiclelicence');
        })
        .catch(err => console.log(err));
};