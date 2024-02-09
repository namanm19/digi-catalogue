const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    productImage: {
        type: String // Assuming the product image will be stored as a URL
    }
});

const catalogSchema = new Schema({
    catalogName: {
        type: String,
        required: true
    },
    products: [productSchema]
}, 
{
    timestamps: true
});

module.exports = mongoose.model('Catalog', catalogSchema);
