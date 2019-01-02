const db = require('../util/database');

module.exports = class VehicleLicence {
    constructor(LicenceNumber, VehicleKind) {
        this.LicenceNumber = LicenceNumber;
        this.VehicleKind = VehicleKind;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * FROM vehiclelicence');
    }

    static findByLicenceNumber(LicenceNumber) {
        return db.execute('SELECT * FROM vehiclelicence where LicenceNumber = ?', [LicenceNumber]);
      }

    static deleteByLicenceNumber(LicenceNumber) {
        return db.execute(
            'DELETE FROM vehiclelicence WHERE LicenceNumber = ?', [LicenceNumber]
        );
    }

    static getCount() {
        return db.execute('SELECT COUNT(*) as count FROM vehiclelicence');
      }

    static add(req, res) {
        //console.log('add():', req.body.name, req.body.price);
        return db.execute(
          'INSERT INTO vehiclelicence (LicenceNumber, VehicleKind) VALUES (?, ?)',
          [req.body.LicenceNumber, req.body.VehicleKind]
        );
    }

    static updateByLicenceNumber(req, res) {
        const LicenceNumber = req.body.LicenceNumber;
        const LicenceNumber1 = req.body.LicenceNumber1;
        const VehicleKind = req.body.VehicleKind;
        //const date = new Date();
        console.log('model:updateByLicenceNumber()', LicenceNumber, LicenceNumber1, VehicleKind)
        return db.execute(
          'UPDATE vehiclelicence SET LicenceNumber=? , VehicleKind=? WHERE LicenceNumber = ?', [LicenceNumber1, VehicleKind, LicenceNumber]
        );
      }

}