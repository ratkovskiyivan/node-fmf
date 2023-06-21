import {pool as db} from '../db.js'

class UGNController {
    async getUGN(req, res) {
        const ugn = await db.query('SELECT * FROM UGN')
        res.json(ugn.rows)
    }
}

export const ugnController = new UGNController()