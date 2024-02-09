const express = require('express');
const router = express.Router();
const {
    getCatalog,
    createCatalog,
    deleteCatalog
} = require('../controllers/catelogController');

// GET catalog by name
router.get('/:catalogName', getCatalog);

// POST create new catalog
router.post('/', createCatalog);

// DELETE catalog by name
router.delete('/:catalogName', deleteCatalog);

module.exports = router;
