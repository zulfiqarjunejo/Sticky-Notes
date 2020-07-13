'use strict';

import express from 'express';
import listService from './list-notes';

const router = express.Router();
router.get('/', listService);

export default router;
