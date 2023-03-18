const bestSellerModel = require("../../Models/api/bestSeller");

const bestSeller = async (req, res)=>{
    try{
        const bestList = await bestSellerModel.find();
        if(bestList)
            res.send({"data":{"message": "Successfully fetched", status: 200}, bestList});
        else
            res.send({"data":{"message": "Unable to fetch", status: 400}})
    }
    catch(err){
        res.send({"error": err, status: 400});
    }
}

const addBestSeller = async (req, res)=>{
    try{
        const bestList = new bestSellerModel(req.body).save();
        if(bestList)
            res.send({"data":{"message": "Successfully saved", status: 200}})
        else
            res.send({"data":{"message": "Unable to Save", status: 400}})
    }
    catch(err){
        res.send({"error": err, status: 400});
    }
}

module.exports = {
    bestSeller, addBestSeller
}