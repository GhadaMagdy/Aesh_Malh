var reviewType= require("../collections/reviewType");

function GetAll(req,res){
    reviewType.find({}).then(_result=>res.json("data is : "+_result))
    .catch(_err=>res.status(500).send())
}
function AddReviewType(req,res){
    var newReviewType= new unitType(req.body);
    newUnitType.save().then(_result => res.json(_result))
        .catch(_err => res.status(500).send())
}
function GetById(req,res){
    reviewType.findById(req.params.id).then(_result=>res.json("data is : "+_result))
    .catch(_err=>res.status(500).send())
}

function Delete(req,res){
    reviewType.findByIdAndRemove(req.params.id).then(_result=>res.json("data is deleted: "+_result))
    .catch(_err=>res.status(500).send())
}

function Update(req,res){
    console.log("params  "+req.params);
    reviewType.findByIdAndUpdate(req.params.id,req.body).then(_result=>res.json("data is updated: "+_result))
    .catch(_err=>res.status(500).send())
}
module.exports={
    AddReviewType:AddReviewType,
    GetAll:GetAll,
    GetById:GetById,
    Delete:Delete,
    Update:Update
}