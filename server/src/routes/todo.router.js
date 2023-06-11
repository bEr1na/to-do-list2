import express from 'express';
import ctrl from '../controllers/todo.controller';

const router = express.Router();

router.route('/api/todos2')
    .get(ctrl.list)
    .post(ctrl.create)
router.route('/api/todos2/:id')
    .get(ctrl.read)
     .put(ctrl.update)
     .delete(ctrl.remove)

export default router;