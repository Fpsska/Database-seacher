const { Router } = require('express');

const router = Router();
const tableController = require('../controllers/table.controller');



router.post('/', tableController.createTableDataItem);
router.get('/', tableController.getTableData);




module.exports = router;