const { Schema, model, default: mongoose } = require('mongoose');

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    mobile:[{
        type: Number,
        required: true
    }],
    address:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'addressess'
    }],

    payment:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cards'
    }],

    cart:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'carts'
    }],
    order:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orders'
    }],
    wishlist:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'wishlists'
    }]

}, { timestamps: true})

const userModel = model('users', userSchema);

module.exports = userModel