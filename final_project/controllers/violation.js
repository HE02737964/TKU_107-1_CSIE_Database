const moment = require('moment');

const Violation = require('../models/violation');
const Owner = require('../models/owner');
const Vehicle = require('../models/vehicle');
const VehicleLicence = require('../models/vehiclelicence');
const Manufactwer = require('../models/manufactwer');

exports.getViolation = async (req, res, next) => {

    let Violations;
    let violationCount;
    let owners;
    let ownerCount;
    let Vehicles;
    let vehicleCount;
    let VehicleLicences;
    let vehicleLicenceCount;
    let Manufactwers;
    let manufactwerCount;

    try {
        const getViolation = await Violation.fetchAll()
            .then(([rows]) => {
                for (let p of rows) {
                    p.date = moment(p.date).format('MMM D, YYYY');
                }
                Violations = rows;
            })

        const getViolationCount = await Violation.getCount()
            .then(([rows]) => {
                violationCount = rows[0].count;
            })

        const getOwner = await Owner.fetchAll()
            .then(([rows]) => {
                for (let p of rows) {
                    p.date = moment(p.date).format('MMM D, YYYY');
                }
                owners = rows;
            })
        const getOwnerCount = await Owner.getCount()
            .then(([rows]) => {
                ownerCount = rows[0].count;
            })

        const getVehicle = await Vehicle.fetchAll()
            .then(([rows]) => {
                for (let p of rows) {
                    p.date = moment(p.date).format('MMM D, YYYY');
                }
                Vehicles = rows;
            })
        const getVehicleCount = await Vehicle.getCount()
            .then(([rows]) => {
                vehicleCount = rows[0].count;
            })

        const getVehicleLicence = await VehicleLicence.fetchAll()
            .then(([rows]) => {
                for (let p of rows) {
                    p.date = moment(p.date).format('MMM D, YYYY');
                }
                VehicleLicences = rows;
            })
        const getVehicleLicenceCount = await VehicleLicence.getCount()
            .then(([rows]) => {
                vehicleLicenceCount = rows[0].count;
            })

        const getManufactwer = await Manufactwer.fetchAll()
            .then(([rows]) => {
                for (let p of rows) {
                    p.date = moment(p.date).format('MMM D, YYYY');
                }
                Manufactwers = rows;
            })
        const getManufactwerCount = await Manufactwer.getCount()
            .then(([rows]) => {
                manufactwerCount = rows[0].count;
            })

        let data = {
            Violations: Violations,
            violationCount: violationCount,
            owners: owners,
            ownerCount: ownerCount,
            Vehicles: Vehicles,
            vehicleCount: vehicleCount,
            VehicleLicences: VehicleLicences,
            vehicleLicenceCount: vehicleLicenceCount,
            Manufactwers: Manufactwers,
            manufactwerCount: manufactwerCount
        }

        console.log(JSON.stringify(data));
        //res.send(JSON.stringify(data));

        res.render('violation', {
            title: 'Violation',
            color: 'btn-primary',
            icon: 'fa-cog',
            data: Violations,
            violationCount: violationCount,
            owners: owners,
            ownerCount: ownerCount,
            Vehicles: Vehicles,
            vehicleCount: vehicleCount,
            VehicleLicences: VehicleLicences,
            vehicleLicenceCount: vehicleLicenceCount,
            Manufactwers: Manufactwers,
            manufactwerCount: manufactwerCount
        });
    } catch (err) {
        console.log(err);
    };

};

exports.getDeleteViolation = (req, res, next) => {
    Violation.deleteByTime(req.query.time)
        .then(([rows]) => {
            res.redirect('/');
        })
        .catch();
};

exports.getEditViolation = async (req, res, next) => {

    let violation;
    let time;
    let LicenceNumber;
    let OwnerId;

    const getViolation = await Violation.fetchAll()
        .then(([rows]) => {
            vehiclelicence = rows;
            //console.log('findCategories(): ', JSON.stringify(rows));
        })

    const getLicenceNumber = await VehicleLicence.fetchAll()
        .then(([rows]) => {
            LicenceNumber = rows;
            //console.log('findCategories(): ', JSON.stringify(rows));
        })
    const getOwnerId = await Owner.fetchAll()
        .then(([rows]) => {
            OwnerId = rows;
            //console.log('findCategories(): ', JSON.stringify(rows));
        })
    const findViolationByTime = await Violation.findByTime(req.query.time)
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('YYYY-MM-DD');
                console.log('p.date: ', p.date);
            }
            time = rows;
            //console.log('post[0].date: ', post[0].date);
            console.log('findPostById(): ', JSON.stringify(time));
        })
        .catch(err => console.log(err));

    res.render('editVio', {
        data: time,
        title: 'Edit Violation',
        violation: violation,
        LicenceNumber:LicenceNumber,
        OwnerId:OwnerId
    });
};

exports.postUpdateViolation = (req, res, next) => {

    Violation.updateByTime(req, res)
        .then(([rows]) => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
};

exports.postAddViolation = (req, res, next) => {

    Violation.add(req, res)
        .then(([rows]) => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
};