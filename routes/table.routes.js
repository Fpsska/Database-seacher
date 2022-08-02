const { Router } = require('express');

const router = new Router();
const tableController = require('../controllers/table.controller');



router.post('/', tableController.createTableDataItem);
router.get('/', tableController.getTableData);




module.exports = router;