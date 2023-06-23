import {pool as db} from '../db.js'

class InformationProfileController {
    async createInformationProfile(req, res) {
        const {description, price, placeBudget, placeContract, idProfile} = req.body
        const newInformationProfile = await db.query(
            'INSERT INTO InformationProfiles (Description, Price, PlaceBudget, PlaceContract, IdProfile) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [description, price, placeBudget, placeContract, idProfile]
        )
        res.json(newInformationProfile.rows[0])
    }

    async getInformationProfileByProfile(req, res) {
        const id = req.query.id
        const informationProfile = await db.query('SELECT * FROM InformationProfiles WHERE IdProfile = $1', [id])
        res.json(informationProfile.rows[0])
    }

    async updateInformationProfile(req, res) {
        const {id, description, price, placeBudget, placeContract} = req.body
        const informationProfile = await db.query(
            'UPDATE InformationProfiles SET Description = $1, Price = $2, PlaceBudget = $3 PlaceContract = $4 WHERE Id = $4 RETURNING *',
            [description, price, placeBudget, placeContract, id]
        )
        res.json(informationProfile.rows[0])
    }

    async deleteInformationProfile(req, res) {
        const id = req.params.id
        const informationProfile = await db.query('DELETE FROM InformationProfiles WHERE Id = $1', [id])
        res.json(informationProfile.rows[0])
    }
}

export const informationProfileController = new InformationProfileController()