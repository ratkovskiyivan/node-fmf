import {Router} from 'express'
import {departamentController} from '../controllers/departament.controller.js'

export const router = new Router()

router.post('/departament', departamentController.createDepartament)
router.get('/departament/:id', departamentController.getDepartament)
router.put('/departament', departamentController.updateDepartament)
router.delete('/departament/:id', departamentController.deleteDepartament)