import {pool as db} from '../db.js'

class UserController {
    async createUser(req, res) {
        const {name, userRole} = req.body
        const newUser = await db.query('INSERT INTO Users (Name, UserRole) VALUES ($1, $2) RETURNING *', [name, userRole])
        res.json(newUser.rows[0])
    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM Users')
        res.json(users.rows)
    }

    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM Users WHERE Id = $1', [id])
        res.json(user.rows[0])
    }

    async updateUser(req, res) {
        const {id, name, userRole} = req.body
        const user = await db.query('UPDATE Users SET Name = $1, UserRole = $2 WHERE Id = $3 RETURNING *', [name, userRole, id])
        res.json(user.rows[0])
    }

    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM Users WHERE Id = $1', [id])
        res.json(user.rows[0])
    }
}

export const userController = new UserController()