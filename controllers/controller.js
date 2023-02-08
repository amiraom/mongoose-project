const personSchema = require ('../models/person');
exports.CreatePerson = async(req,res) =>
{
    try{

        const newPerson =  new personSchema(req.body);//remplissage de champs fel requete
        newPerson.save();//renregistrement fel database
        res.status(200).json({msg:"person created with sucess",newPerson})

    }
    catch(error)
    {
        console.log(error);
res.status(500).json({msg:"can not create a new person"})

    }
}



