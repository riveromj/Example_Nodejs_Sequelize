import { Router } from 'express';

import { createProject, getProject, getOneProject, deleteProject, updateProject } from '../controllers/project.controller'
const router =Router();

// ****** /api/project     ****////

router.post('/', createProject);
router.get('/', getProject);
router.get('/:id', getOneProject);
router.delete('/:id', deleteProject );
router.put('/:id',updateProject);

export default router;