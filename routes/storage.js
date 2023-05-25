
const express = require('express');
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {createItem} = require("../controllers/storage");



//TODO single() para un solo archivo y multi() para varios
router.post('/',uploadMiddleware.single('myfile'), createItem);

module.exports = router;