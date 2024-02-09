const express = require('express');
const router = express.Router();
const {
    getCatalog,
    createCatalog,
    deleteCatalog,
    getAllCatalogs
} = require('../controllers/catelogController');

// GET all catelogs in DB
router.get('/', getAllCatalogs);

// GET catalog by name
router.get('/:catalogName', getCatalog);

// POST create new catalog
router.post('/', createCatalog);

// DELETE catalog by name
router.delete('/:catalogName', deleteCatalog);

module.exports = router;
