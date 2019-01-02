const db = require('../util/database');

module.exports = class Violation {
    constructor(time,item, place, LicenceNumber, OwnerId) {
        this.time = time;
        this.item = item;
        this.place = place;
        this.LicenceNumber = LicenceNumber;
        this.OwnerId = OwnerId;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * FROM violation');
    }

    static findByTime(time) {
        return db.execute('SELECT * FROM violation where time = ?', [time]);
      }

    static deleteByTime(time) {
        return db.execute(
            'DELETE FROM violation WHERE time = ?', [time]
        );
    }

    static getCount() {
        return db.execute('SELECT COUNT(*) as count FROM violation');
      }

    static add(req, res) {
        //console.log('add():', req.body.name, req.body.price);
        return db.execute(
          'INSERT INTO violation (time,item, place, LicenceNumber, OwnerId) VALUES (?, ?, ?, ?, ?)',
          [req.body.time, req.body.item, req.body.place, req.body.LicenceNumber, req.body.OwnerId]
        );
    }

    // UPDATE
  static updateByTime(req, res) {
    const time = req.body.time;
    const time1 = req.body.time1;
    const item = req.body.item;
    const place = req.body.place;
    const LicenceNumber = req.body.LicenceNumber;
    const OwnerId = req.body.OwnerId;
    //const date = new Date();
    console.log('model:updateByTime()', time, time1, item,  place, LicenceNumber, OwnerId)
    return db.execute(
      'UPDATE violation SET time=?, item=?, place=? , LicenceNumber=?, OwnerId=? WHERE time = ?', [time1, item, place, LicenceNumber, OwnerId, time]
    );
  }

}