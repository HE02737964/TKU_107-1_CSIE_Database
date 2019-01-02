const db = require('../util/database');

module.exports = class Owner {
    constructor(OwnerId, name, sex, address, phone, LicenceNumber) {
        this.OwnerId = OwnerId;
        this.name = name;
        this.sex = sex;
        this.address = address;
        this.phone = phone;
        this.LicenceNumber = LicenceNumber;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * FROM owner');
    }

    static findByOwnerId(OwnerId) {
        return db.execute('SELECT * FROM owner where OwnerId = ?', [OwnerId]);
    }

    static deleteByOwnerId(OwnerId) {
        return db.execute(
            'DELETE FROM owner WHERE OwnerId = ?', [OwnerId]
        );
    }

    static getCount() {
        return db.execute('SELECT COUNT(*) as count FROM owner');
    }

    static add(req, res) {
        //console.log('add():', req.body.name, req.body.price);
        return db.execute(
            'INSERT INTO owner (OwnerId, name, sex, address, phone, LicenceNumber) VALUES (?, ?, ?, ?, ?, ?)',
            [req.body.OwnerId, req.body.name, req.body.sex, req.body.address, req.body.phone, req.body.LicenceNumber]
        );
    }

    // UPDATE
    static updateByOwnerId(req, res) {
        const OwnerId = req.body.OwnerId;
        const OwnerId1 = req.body.OwnerId1;
        const name = req.body.name;
        const sex = req.body.sex;
        const address = req.body.address;
        const phone = req.body.phone;
        const LicenceNumber = req.body.LicenceNumber;
        //const date = new Date();
        console.log('model:updateByOwnerId()', OwnerId, OwnerId1)
        return db.execute(
            'UPDATE owner SET OwnerId=?, name=?, sex=?, address=?, phone=?, LicenceNumber=?  WHERE OwnerId = ?', [OwnerId1, name, sex, address, phone, LicenceNumber, OwnerId]
        );
    }

}