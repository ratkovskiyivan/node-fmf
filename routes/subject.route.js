import {Router} from 'express'
import {subjectController} from '../controllers/subject.controller.js'

export const router = new Router()

router.post('/subject', subjectController.createSubject)
router.get('/subject', subjectController.getSubjectByProfile)
router.put('/subject', subjectController.updateProfile)
router.delete('/subject/:id', subjectController.deleteSubject)