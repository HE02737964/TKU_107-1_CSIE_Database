const db = require('../util/database');

module.exports = class Vehicle {
    constructor(EngineNumber, model, color, OwnerId, MId) {
        this.EngineNumber = EngineNumber;
        this.model = model;
        this.color = color;
        this.OwnerId = OwnerId;
        this.MId = MId;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * FROM vehicle');
    }

    static findByEngineNumber(EngineNumber) {
        return db.execute('SELECT * FROM vehicle where EngineNumber = ?', [EngineNumber]);
    }

    static deleteByEngineNumber(EngineNumber) {
        return db.execute(
            'DELETE FROM vehicle WHERE EngineNumber = ?', [EngineNumber]
        );
    }

    static getCount() {
        return db.execute('SELECT COUNT(*) as count FROM vehicle');
    }

    static add(req, res) {
        //console.log('add():', req.body.name, req.body.price);
        return db.execute(
            'INSERT INTO vehicle (EngineNumber, model, color, OwnerId, MId) VALUES (?, ?, ?, ?, ?)',
            [req.body.EngineNumber, req.body.model, req.body.color, req.body.OwnerId, req.body.MId]
        );
    }

    // UPDATE
    static updateByEngineNumber(req, res) {
        const EngineNumber = req.body.EngineNumber;
        const EngineNumber1 = req.body.EngineNumber1;
        const model = req.body.model;
        const color = req.body.color;
        const OwnerId = req.body.OwnerId;
        const MId = req.body.MId;
        //const date = new Date();
        console.log('model:updateByEngineNumber()', EngineNumber, EngineNumber1)
        return db.execute(
            'UPDATE vehicle SET EngineNumber=?, model=?, color=?, OwnerId=?, MId=?  WHERE EngineNumber = ?', [EngineNumber1, model, color, OwnerId, MId, EngineNumber]
        );
    }

}