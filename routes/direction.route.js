import {Router} from 'express'
import {directionController} from '../controllers/direction.controller.js'

export const router = new Router()

router.post('/direction', directionController.createDirection)
router.get('/direction', directionController.getDirectionsByUGN)
router.get('/direction/:id', directionController.getOneDirection)
router.put('/direction', directionController.updateDirection)
router.delete('/direction/:id', directionController.deleteDirection)
