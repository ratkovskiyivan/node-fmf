import {pool as db} from '../db.js'

class ProfileController {
    async createProfile(req, res) {
        const {name, base, formEducation, idDirection} = req.body
        const newProfile = await db.query(
            'INSERT INTO Profile (Name, Base, FormEducation, IdDirection) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, base, formEducation, idDirection]
        )
        res.json(newProfile.rows[0])
    }

    async getProfileByDirection(req, res) {
        const id = req.query.id
        const profile = await db.query('SELECT * FROM Profile WHERE IdDirection = $1', [id])
        res.json(profile.rows[0])
    }

    async updateProfile(req, res) {
        const {id, name, base, formEducation} = req.body
        const profile = await db.query(
            'UPDATE Profile SET Name = $1, Base = $2, FormEducation = $3 WHERE Id = $4 RETURNING *',
            [name, base, formEducation, id]
        )
        res.json(profile.rows[0])
    }

    async deleteProfile(req, res) {
        const id = req.params.id
        const profile = await db.query('DELETE FROM Profile WHERE Id = $1', [id])
        res.json(profile.rows[0])
    }
}

export const profileController = new ProfileController()