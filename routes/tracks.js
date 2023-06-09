const express = require('express');
const router = express.Router();
const {getItems, getItem, createItem} = require("../controllers/tracks");
const { validatorCreateItem } = require('../validators/tracks');
const customHeader = require('../middleware/customHeader');

//TODO http://localhost/tracks GET, POST, DELETE, PUT
router.get("/", getItems)
router.post("/", validatorCreateItem, customHeader,  createItem)
router.get("/:id", getItem)




module.exports = router;