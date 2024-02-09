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


//API ENDPOINTS:

// GET ALL CATELOGS | GET REQUEST
// localhost:4000/api/catelogs/

// GET CATELOG BY NAME | GET REQUET
// localhost:4000/api/catelogs/[CATELOG NAME]

// CREATE A NEW CATELOG | POST REQUEST
// localhost:4000/api/catelogs/

// DELETE AN EXISTING CATELOG | DELETE REQUEST
// localhost:4000/api/catelogs/[CATELOG NAME]