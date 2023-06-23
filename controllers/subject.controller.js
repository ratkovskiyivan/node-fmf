import {pool as db} from '../db.js'

class SubjectController {
    async createSubject(req, res) {
        const {minScore, isMain, idProfile, idDisciplineEntry} = req.body
        const newSubject = await db.query(
            'INSERT INTO Subjects (MinScore, IsMain, IdProfile, IdDisciplineEntry) VALUES ($1, $2, $3, $4) RETURNING *',
            [minScore, isMain, idProfile, idDisciplineEntry]
        )
        res.json(newSubject.rows[0])
    }

    async getSubjectByProfile(req, res) {
        const id = req.query.id
        const subject = await db.query('SELECT * FROM Subjects WHERE IdProfile = $1', [id])
        res.json(subject.rows)
    }

    async updateProfile(req, res) {
        const {id, minScore, isMain} = req.body
        const subject = await db.query(
            'UPDATE Subjects SET MinScore = $1, IsMain = $2 WHERE Id = $3 RETURNING *',
            [minScore, isMain, id]
        )
        res.json(subject.rows[0])
    }

    async deleteSubject(req, res) {
        const id = req.params.id
        const subject = await db.query('DELETE FROM Subjects WHERE Id = $1', [id])
        res.json(subject.rows[0])
    }
}

export const subjectController = new SubjectController()