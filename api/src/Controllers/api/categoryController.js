const categoryModel = require("../../Models/api/categoryModel");
const { successResponse } = require("../../Response/response");

const getCategory = async (req, res)=>{
    try{
        const categoryList = await categoryModel.find();
            if(categoryList!=null)
                successResponse(res, "successfully fetched", categoryList, 200);
            else
                errorResponse(res, "error", "Not Found", 400)
    }
    catch(err){
        errorResponse(res, err.name, err.message, 400)
    }
}

const addCategory = async (req, res)=>{
    try{
        const categoryList = new categoryModel(req.body).save();
        if(categoryList)
            successResponse(res, "successfully saved", categoryList, 200);
        else
            res.send({"data":{"message": "Unable to Save", status: 400}})
    }
    catch(err){
        res.send({"error": err, status: 400});
    }
}

module.exports = {
    getCategory, addCategory
}
