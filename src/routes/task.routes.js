import { Router } from "express";

const router = Router()

import * as taskController from '../controllers/task.controller'


router.post('/', taskController.createTask)

router.get('/', taskController.getTasks)

router.get('/:taskId', taskController.getTaskById)

router.put('/:taskId', taskController.updateTaskById)

router.delete('/:taskId', taskController.deleteTaskById)


export default router;