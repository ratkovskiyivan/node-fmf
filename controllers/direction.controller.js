import {pool as db} from '../db.js'

class DirectionController {
    async createDirection(req, res) {
        const {name, idUGN} = req.body
        const newDirection = await db.query('INSERT INTO Directions (Name, IdUGN) VALUES ($1, $2) RETURNING *', [name, idUGN])
        res.json(newDirection.rows[0])
    }

    async getDirectionsByUGN(req, res) {
        const id = req.query.id
        const directions = await db.query('SELECT * FROM Directions WHERE IdUGN = $1', [id])
        res.json(directions.rows)
    }

    async getOneDirection(req, res) {
        const id = req.params.id
        const direction = await db.query('SELECT * FROM Directions WHERE Id = $1', [id])
        res.json(direction.rows[0])
    }

    async updateDirection(req, res) {
        const {id, name} = req.body
        const direction = await db.query('UPDATE Directions SET Name = $1 WHERE Id = $2 RETURNING *', [name, id])
        res.json(direction.rows[0])
    }

    async deleteDirection(req, res) {
        const id = req.params.id
        const direction = await db.query('DELETE FROM Directions WHERE Id = $1', [id])
        res.json({message: "Направление успешно удалено"})
    }
}

export const directionController = new DirectionController()