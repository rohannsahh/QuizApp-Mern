import {Router} from "express";
const router =Router();

import * as controller from '../controller/controller.js'


// question route apis
router.get('/questions',controller.getQuestions)
router.post('questions',controller.insertQuestions)
router.delete('questions',controller.dropQuestions)

// result route
router.get('/result',controller.getResult)
router.post('result',controller.storeResult)
router.delete('result',controller.dropResult)



export default router;