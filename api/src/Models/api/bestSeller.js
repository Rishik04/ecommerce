const { Schema, model } = require('mongoose');

const bestSellerSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    discount:{
        type: Number,
        required: true
    }

}, { timestamps: true})

const bestSellerModel = model('bestSellers', bestSellerSchema);

module.exports = bestSellerModel