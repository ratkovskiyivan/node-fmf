import {pool as db} from '../db.js'

class DepartamentController {
    async createDepartament(req, res) {
        const {name, director, idUser} = req.body
        const newDepartament = await db.query(
            'INSERT INTO DEPARTAMENTS (Name, Director, IdUser) VALUES ($1, $2, $3) RETURNING *',
            [name, director, idUser]
        )
        res.json(newDepartament.rows[0])
    }

    async getDepartament(req, res) {
        const id = req.params.id
        const departament = await db.query('SELECT * FROM DEPARTAMENTS WHERE Id = $1', [id])
        res.json(departament.rows[0])
    }

    async updateDepartament(req, res) {
        const {id, name, director} = req.body
        const departament = await db.query(
            'UPDATE DEPARTAMENTS SET Name = $1, Director = $2 WHERE Id = $3 ($1, $2, $3) RETURNING *',
            [name, director, id]
        )
        res.json(departament.rows[0])
    }

    async deleteDepartament(req, res) {
        const id = req.params.id
        const departament = await db.query('DELETE FROM DEPARTAMENTS WHERE Id = $1', [id])
        res.json(departament.rows[0])
    }
}

export const departamentController = new DepartamentController()