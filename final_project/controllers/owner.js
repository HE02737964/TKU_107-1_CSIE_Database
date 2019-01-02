const moment = require('moment');

const Owner = require('../models/owner');
const Vehiclelicence = require('../models/vehiclelicence');

exports.getOwner = (req, res, next) => {
    Owner.fetchAll()
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('MMM D, YYYY');
            }
            console.log(JSON.stringify(rows, ["OwnerId", "name", "sex", "address", "phone", "LicenceNumber"]));
            //console.log(JSON.stringify(rows));
            //res.send(JSON.stringify(rows));
            res.render('owner', {
                data: rows,
                title: 'Owner List',
            });
        })
        .catch(err => console.log(err));
};

exports.getDeleteOwner = (req, res, next) => {
    Owner.deleteByOwnerId(req.query.OwnerId)
        .then(([rows]) => {
            res.redirect('/owner');
        })
        .catch();
};

exports.getEditOwner = async (req, res, next) => {

    let owner;
    let OwnerId;
    let LicenceNumber;

    const getOwner = await Owner.fetchAll()
        .then(([rows]) => {
            owner = rows;
            //console.log('findCategories(): ', JSON.stringify(rows));
        })

    const getLicenceNumber = await Vehiclelicence.fetchAll()
        .then(([rows]) => {
            LicenceNumber = rows;
        })

    const findOwnerByOwnerId = await Owner.findByOwnerId(req.query.OwnerId)
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('YYYY-MM-DD');
                console.log('p.date: ', p.date);
            }
            OwnerId = rows;
            //console.log('post[0].date: ', post[0].date);
            //console.log('findPostById(): ', JSON.stringify(OwnerId));
        })
        .catch(err => console.log(err));

    res.render('editOwner', {
        data: OwnerId,
        title: 'Edit Owner',
        owner: owner,
        LicenceNumber: LicenceNumber
    });

};

exports.postUpdateOwner = (req, res, next) => {

    Owner.updateByOwnerId(req, res)
        .then(([rows]) => {
            res.redirect('/owner');
        })
        .catch(err => console.log(err));
};

exports.postAddOwner = (req, res, next) => {

    Owner.add(req, res)
        .then(([rows]) => {
            res.redirect('/owner');
        })
        .catch(err => console.log(err));
};