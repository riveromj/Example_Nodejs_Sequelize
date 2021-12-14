import { Router } from 'express';

import { createTask, getTask, getOneTask, deleteTask, getTasksByProject, updateTasks } from '../controllers/task.controller'

const router =Router();

////********   /api/tasks */

router.post('/', createTask );
router.get('/', getTask );
router.get('/:id', getOneTask );
router.delete('/:id', deleteTask );
router.put('/:id', updateTasks );

// **** /api/tasks/project/:projectId
router.get('/project/:projectId', getTasksByProject );

export default router;