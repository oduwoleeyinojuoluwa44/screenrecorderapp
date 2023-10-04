import { Router } from "express";
import { test, startRecording, addData, stopRecording } from "../controllers/videoController.js";
const router = Router();


router.get('/', test)
router.post('/startRecording/video', startRecording)
router.post('/addData/video/:id', addData)
router.post('/saveData/video/:id', stopRecording)

export default router;