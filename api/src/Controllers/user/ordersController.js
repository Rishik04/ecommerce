const Razorpay = require("razorpay");
const { errorResponse, successResponse } = require("../../Response/response");
const orderModel = require("../../Models/user/orderModel");
const { default: mongoose, isValidObjectId } = require("mongoose");

const orders = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZOR_KEY_ID,
      key_secret: process.env.RAZOR_PAY_SECRET,
    });

    const {
      email,
      name,
      price,
      delivery,
      tax,
      paymentMethod,
      cartItems,
      shippingAddress,
    } = req.body;
    const total = price + tax + delivery;
    const options = {
      amount: Math.floor(Math.round(total * 100).toFixed(2)), // amount in smallest currency unit
      currency: "INR",
      receipt: "receipt_order_74394",
    };

    const order = await instance.orders.create(options);

    if (!order) errorResponse(res, "OrderError", "Can't create order", 500);
    else successResponse(res, "Order created", order, 200);
  } catch (err) {
    errorResponse(res, err.name, err.message, 400);
  }
};

const addOrder = async (req, res) => {
  try {
    console.log(req.body);
    const { paymentMethod, paymentId } = req.body;

    console.log(paymentId, paymentMethod)

    if (paymentMethod === "RAZORPAY" && paymentId ) {
      const orderList = await new orderModel(req.body).save();
      orderModel.isPaid = true;
      orderModel().save();
      if (orderList.length !== 0) {
        successResponse(res, "Order successful", orderList, 200);
      } else {
        errorResponse(res, "OrderError", "Order failed", 400);
      }
    }
  } catch (err) {
    errorResponse(res, err.name, err.message, 400);
  }
};

const getOrderById = async (req, res) => {
  try {
    if (isValidObjectId(new mongoose.Types.ObjectId(req.params.id))) {
      const orderItem = await orderModel.find({uId : new mongoose.Types.ObjectId(req.params.id)});
      if (orderItem.length !== 0) {
        successResponse(res, "Orders", orderItem, 200);
      } else {
        successResponse(res, "No Orders Found", [], 200);
      }
    }
    else{
        return errorResponse(res, "InvalidOrderId", "No orders found!", 400);
    }

  } catch (err) {
    errorResponse(res, err.name, err.message, 400);
  }
};

module.exports = {
  orders,
  addOrder,
  getOrderById,
};
