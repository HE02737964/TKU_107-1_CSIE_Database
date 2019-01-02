const moment = require('moment');

const Manufactwer = require('../models/manufactwer');

exports.getManufactwer= (req, res, next) => {
    Manufactwer.fetchAll()
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('MMM D, YYYY');
            }
            //console.log(JSON.stringify(rows));
            //res.send(JSON.stringify(rows));
            res.render('manufactwer', {
                data: rows,
                title: 'Manufactwer List',
            });
        })
        .catch(err => console.log(err));
};

exports.getDeleteManufactwer = (req, res, next) => {
    Manufactwer.deleteByMId(req.query.MId)
        .then(([rows]) => {
            res.redirect('/manufactwer');
        })
        .catch();
};

exports.getEditManufactwer = async (req, res, next) => {

    let manufactwer;
    let MId;

    const getManufactwers = await Manufactwer.fetchAll()
        .then(([rows]) => {
            manufactwer = rows;
            //console.log('findCategories(): ', JSON.stringify(rows));
        })

    const findManufactwerByMId = await Manufactwer.findByMId(req.query.MId)
        .then(([rows]) => {
            for (let p of rows) {
                p.date = moment(p.date).format('YYYY-MM-DD');
                console.log('p.date: ', p.date);
            }
            MId = rows;
            //console.log('post[0].date: ', post[0].date);
           //console.log('findPostById(): ', JSON.stringify(rows));
        })
        .catch(err => console.log(err));
    
    res.render('editManu', {
        data: MId,
        title: 'Edit Manufactwer',
        manufactwer: manufactwer
   });

};

exports.postUpdateManufactwer = (req, res, next) => {

    Manufactwer.updateByMId(req, res)
        .then(([rows]) => {
            res.redirect('/manufactwer');
        })
        .catch(err => console.log(err));
};

exports.postAddManufactwer = (req, res, next) => {

    Manufactwer.add(req, res)
        .then(([rows]) => {
            res.redirect('/manufactwer');
        })
        .catch(err => console.log(err));
};