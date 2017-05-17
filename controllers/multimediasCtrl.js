var multimedia= require("../collections/multimedia");

function GetAll(req,res){
    multimedia.find({}).then(_result=>res.json("data is : "+_result))
    .catch(_err=>res.status(500).send())
}
function AddMultimedia(req,res){
    var newMultimedia= new multimedia(req.body);
    newMultimedia.save().then(_result => res.json(_result))
        .catch(_err => res.status(500).send())
}
function GetById(req,res){
    multimedia.findById(req.params.id).then(_result=>res.json("data is : "+_result))
    .catch(_err=>res.status(500).send())
}

function Delete(req,res){
    multimedia.findByIdAndRemove(req.params.id).then(_result=>res.json("data is deleted: "+_result))
    .catch(_err=>res.status(500).send())
}

function Update(req,res){
    console.log("params  "+req.params);
    multimedia.findByIdAndUpdate(req.params.id,req.body).then(_result=>res.json("data is updated: "+_result))
    .catch(_err=>res.status(500).send())
}
module.exports={
    AddMultimedia:AddMultimedia,
    GetAll:GetAll,
    GetById:GetById,
    Delete:Delete,
    Update:Update
}