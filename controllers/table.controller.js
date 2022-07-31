const db = require('../db');

class tableController {
    async createTableDataItem(req, res) {
        try {
            const { date, name, count, distance } = req.body;
            const newItem = await db.query('INSERT INTO mockdata (date, name, count, distance) values ($1, $2, $3, $4) RETURNING *', [date, name, count, distance])
            res.json(newItem.rows[0]);
        } catch (err) {
            console.error(err.message);
        }
    }
    async getTableData(req, res) {
        try {
            const alLData = await db.query('SELECT * FROM mockdata');
            res.json(alLData.rows);
        } catch (err) {
            console.error(err.message);
        }
    }
}


module.exports = new tableController();