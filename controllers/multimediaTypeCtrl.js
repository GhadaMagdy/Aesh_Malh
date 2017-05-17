var multimediaType= require("../collections/multimediaType");

function GetAll(req,res){
    multimediaType.find({}).then(_result=>res.json("data is : "+_result))
    .catch(_err=>res.status(500).send())
}
function AddMultimediaType(req,res){
    var newMultimediaType= new multimediaType(req.body);
    newMultimediaType.save().then(_result => res.json(_result))
        .catch(_err => res.status(500).send())
}
function GetById(req,res){
    multimediaType.findById(req.params.id).then(_result=>res.json("data is : "+_result))
    .catch(_err=>res.status(500).send())
}

function Delete(req,res){
    multimediaType.findByIdAndRemove(req.params.id).then(_result=>res.json("data is deleted: "+_result))
    .catch(_err=>res.status(500).send())
}

function Update(req,res){
    console.log("params  "+req.params);
    multimediaType.findByIdAndUpdate(req.params.id,req.body).then(_result=>res.json("data is updated: "+_result))
    .catch(_err=>res.status(500).send())
}
module.exports={
    AddMultimediaType:AddMultimediaType,
    GetAll:GetAll,
    GetById:GetById,
    Delete:Delete,
    Update:Update
}