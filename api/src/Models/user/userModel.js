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
        type: mongoose.Types.ObjectId,
        ref: 'addressess'
    }],

    payment:[{
        type: mongoose.Types.ObjectId,
        ref: 'cards'
    }],

    cart:[{
        type: mongoose.Types.ObjectId,
        ref: 'carts'
    }],
    order:[{
        type: mongoose.Types.ObjectId,
        ref: 'orders'
    }],
    wishlist:[{
        type: mongoose.Types.ObjectId,
        ref: 'wishlists'
    }]

}, { timestamps: true})

const userModel = model('users', userSchema);

module.exports = userModel