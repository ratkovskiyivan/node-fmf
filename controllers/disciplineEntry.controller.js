import {pool as db} from '../db.js'

class DisciplineEntryController {
    async createDisciplineEntry(req, res) {
        const {name} = req.body
        const newDisciplineEntry = await db.query('INSERT INTO DisciplinesEntry (Name) VALUES ($1) RETURNING *', [name])
        res.json(newDisciplineEntry.rows[0])
    }

    async getDisciplineEntry(req, res) {
        const id = req.params.id
        const disciplineEntry = await db.query('SELECT * FROM DisciplinesEntry WHERE Id = $1', [id])
        res.json(disciplineEntry.rows[0])
    }

    async updateDisciplineEntry(req, res) {
        const {id, name} = req.body
        const disciplineEntry = await db.query('UPDATE DisciplinesEntry SET Name = $1 WHERE Id = $2 RETURNING *', [name, id])
        res.json(disciplineEntry.rows[0])
    }

    async deleteDisciplineEntry(req, res) {
        const id = req.params.id
        const disciplineEntry = await db.query('DELETE FROM DisciplinesEntry WHERE Id = $1', [id])
        res.json(disciplineEntry.rows[0])
    }
}

export const disciplineEntryController = new DisciplineEntryController()