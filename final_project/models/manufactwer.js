const db = require('../util/database');

module.exports = class Manufactwer {
    constructor(MId, MName) {
        this.MId = MId;
        this.MName = MName;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * FROM manufactwer');
    }

    static findByMId(MId) {
        return db.execute('SELECT * FROM manufactwer where MId = ?', [MId]);
      }

    static deleteByMId(MId) {
        return db.execute(
            'DELETE FROM manufactwer WHERE MId = ?', [MId]
        );
    }

    static getCount() {
        return db.execute('SELECT COUNT(*) as count FROM manufactwer');
      }

    static add(req, res) {
        //console.log('add():', req.body.name, req.body.price);
        return db.execute('INSERT INTO manufactwer (MName) VALUES (?)',[req.body.MName]);
    }

    // UPDATE
  static updateByMId(req, res) {
    const MId = req.body.MId;
    const MName = req.body.MName;
    //const date = new Date();
    console.log('model:updateByMId()', MName, MId)
    return db.execute(
      'UPDATE manufactwer SET MName = ? WHERE MId = ?', [MName, MId]
    );
  }

}