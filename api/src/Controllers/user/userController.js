const { ObjectId } = require("mongodb");
const addressModel = require("../../Models/user/addressModel");
const userModel = require("../../Models/user/userModel");
const { successResponse, errorResponse } = require("../../Response/response");
const Crypto = require("crypto-js");
const dotenv = require("dotenv");
const { default: mongoose, isValidObjectId } = require("mongoose");

dotenv.config();

const register = async (req, res) => {
  try {
    const { name, email, password, number } = req.body;
    const isUser = await userModel.findOne({ email: email });

    if (!isUser) {
      const hashPassword = Crypto.AES.encrypt(
        password,
        process.env.HASH_KEY
      ).toString();
      const user = await new userModel({
        name,
        email,
        password: hashPassword,
        number,
      }).save();
      if (user)
        return successResponse(
          res,
          "Registered successfully",
          user.populate("address"),
          200
        );
      else errorResponse(res, "error", "Unable to save", 400);
    } else
      errorResponse(res, "userAlreadyExistError", "User already exist!", 400);
  } catch (err) {
    errorResponse(res, err.name, err.message, 400);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userList = await userModel.findOne({ email: email });
    if (userList === null)
      errorResponse(res, "NoUserFound", "User not exist", 400);
    else {
      const decPassword = Crypto.AES.decrypt(
        userList.password,
        process.env.HASH_KEY
      ).toString(Crypto.enc.Utf8);
      if (decPassword === password) {
        successResponse(
          res,
          "Login Successfull",
          userList.populate("address"),
          200
        );
      } else {
        errorResponse(res, "WrongPasswordError", "Incorrect Password", 400);
      }
    }
  } catch (err) {
    errorResponse(res, err.name, err.message, 400);
  }
};

const addAddress = async (req, res) => {
  try {
    console.log(req.body);

    const { id } = req.body;

    const address = await new addressModel(req.body).save();
    if (address) {
      await userModel.findOneAndUpdate(
        { _id: id },
        { $push: { address: address._id } }
      );
    }
    if (address) {
      successResponse(res, "Successfully added", address, 200);
    } else {
      errorResponse(res, "AddressError", "Unable to add address", 400);
    }
  } catch (err) {
    errorResponse(res, err.name, err.message, 400);
  }
};

module.exports = {
  login,
  register,
  addAddress,
};
