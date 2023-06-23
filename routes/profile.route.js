import {Router} from 'express'
import {profileController} from '../controllers/profile.controller.js'

export const router = new Router()

router.post('/profile', profileController.createProfile)
router.get('/profile', profileController.getProfileByDirection)
router.put('/profile', profileController.updateProfile)
router.delete('/profile/:id', profileController.deleteProfile)