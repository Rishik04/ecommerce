const {model, Schema} = require('mongoose');

const addressSchema = new Schema({
    street:{
        type: String,
        required: true
    },
    building:{
        type: String,
        required: true
    },
    area:{
        type: String,
        required: true
    },
    pin:{
        type: Number,
        required: true
    },
    state:{
        type: String,
        required: true
    }
});

const addressModel = model('addresses', addressSchema);

module.exports = addressModel;