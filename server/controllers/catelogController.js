const Catalog = require('../models/catelogModel');
const mongoose = require('mongoose');

const getCatalog = async (req, res) => {
    const catalogName = req.params.catalogName;
    try {
        const catalog = await Catalog.findOne({ catalogName });
        if (!catalog) {
            return res.status(404).json({ error: "Catalog not found" });
        }
        res.status(200).json(catalog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createCatalog = async (req, res) => {
    const { catalogName, products } = req.body;
    try {
        const catalog = await Catalog.create({ catalogName, products });
        res.status(200).json(catalog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteCatalog = async (req, res) => {
    const catalogName = req.params.catalogName;
    try {
        const result = await Catalog.deleteOne({ catalogName });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Catalog not found" });
        }
        res.status(200).json({ message: "Catalog deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getCatalog,
    createCatalog,
    deleteCatalog
}
