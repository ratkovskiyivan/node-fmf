import {Router} from 'express'
import {ugnController} from '../controllers/ugn.controller.js'

export const router = new Router()

router.get('/ugn', ugnController.getUGN)
