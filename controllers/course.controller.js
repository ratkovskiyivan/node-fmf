import {pool as db} from '../db.js'

class CourseController {
    async createCourse(req, res) {
        const {name, year, departament, yearOfStudy, idProfile} = req.body
        const newCourse = await db.query(
            'INSERT INTO Courses (Name, Year, Department, YearOfStudy, IdProfile) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [name, year, departament, yearOfStudy, idProfile]
        )
        res.json(newCourse.rows[0])
    }

    async getCourseByProfile(req, res) {
        const id = req.query.id
        const course = await db.query('SELECT * FROM Courses WHERE IdProfile = $1', [id])
        res.json(course.rows[0])
    }

    async updateCourse(req, res) {
        const {id, name, year, departament, yearOfStudy} = req.body
        const course = await db.query(
            'UPDATE Courses SET Name = $1, Year = $2, Department = $3, YearOfStudy = $4 WHERE Id = $5 RETURNING *',
            [name, year, departament, yearOfStudy, id]
        )
        res.json(course.rows[0])
    }

    async deleteCourse(req, res) {
        const id = req.params.id
        const course = await db.query('DELETE FROM Courses WHERE Id = $1', [id])
        res.json(course.rows[0])
    }
}

export const courseController = new CourseController()