import {Router} from 'express'
import {informationProfileController} from '../controllers/informationProfile.controller.js'

export const router = new Router()

router.post('/informationProfile', informationProfileController.createInformationProfile)
router.get('/informationProfile', informationProfileController.getInformationProfileByProfile)
router.put('/informationProfile', informationProfileController.updateInformationProfile)
router.delete('/informationProfile/:id', informationProfileController.deleteInformationProfile)