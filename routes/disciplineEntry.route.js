import {Router} from 'express'
import {disciplineEntryController} from '../controllers/disciplineEntry.controller.js'

export const router = new Router()

router.post('/disciplineEntry', disciplineEntryController.createDisciplineEntry)
router.get('/disciplineEntry/:id', disciplineEntryController.getDisciplineEntry)
router.put('/disciplineEntry', disciplineEntryController.updateDisciplineEntry)
router.delete('/disciplineEntry/:id', disciplineEntryController.deleteDisciplineEntry)