const userModel =require('./../../Model/Schema')
const Faviourate={
    getPokemon:async(req,resp)=>{
        try{
        let findUser=await userModel.findOne({_id:req.userId})
        return resp.status(200).json({
            Pokemon:findUser.Pokemon,
            err:[]
        })
    }
    catch(e){
        return resp.json({
            data:[],err:{msg:"some error"}
        })
    }
},
AddPokemon:async(req,resp)=>{
    let findUser=await userModel.findOne({_id:req.userId})
    findUser.Pokemon.push({
        name:req.body.name
    })
    await findUser.save()
    return resp.json({
        data:['added'],
        err:{}
    })
}
}
module.exports=Faviourate