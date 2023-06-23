import {Router} from 'express'
import {courseController} from '../controllers/course.controller.js'

export const router = new Router()

router.post('/course', courseController.createCourse)
router.get('/course', courseController.getCourseByProfile)
router.put('/course', courseController.updateCourse)
router.delete('/course/:id', courseController.deleteCourse)