import express from 'express';
let router = express.Router();

/* GET home page. */
router.get('/', (req, res) => res.send('Hello World!'));

export default router;
