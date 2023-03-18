const userModel = require("../../Models/user/userModel");
const { successResponse, errorResponse } = require("../../Response/response");

const addUser = async (req, res)=>{
    try{
    const user = await new userModel(req.body).save();
        if(user)
            successResponse(res, "successfully saved", user, 200);
        else
            errorResponse(res, "error", "Unable to save", 400)
    }
    catch(err){
        errorResponse(res, err.name, err.message, 400)
    }
}


const getUser = async (req, res)=>{
    try{
        const {mobile} = req.body;
        const userList = await userModel.findOne({"mobile": mobile});
        if(userList!=null)
            successResponse(res, "successfully fetched", userList, 200);
        else
            errorResponse(res, "error", "Not Found", 400)
    }
    catch(err){
        errorResponse(res, err.name, err.message, 400)
    }
}


module.exports = {
    addUser,
    getUser
}