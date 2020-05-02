const express = require ('express');
const router = express.Router()
const Contact = require('../modules/contacts')

// Show all Contacts

router.get('/' , async(req , res)=>{
    try {
        let contacts = await Contact.find()
        contacts.length===0 ? res.status(400).json({msg:'there is no contacts'}) : res.send(contacts)
    } catch (error) {
        console.log(error)
    }
})

// Add New Contact

router.post('/' , async(req,res)=>{
    try{
    let {name , phone , mail}=req.body
    let searchmail = await Contact.findOne({mail})
     if (searchmail ) return res.send('please enter a new mail..this mail is already used') 
    let contactToAdd = new Contact({
        name ,
        phone ,
        mail
    })

    let contacts = await contactToAdd.save()
    res.json(contacts)

   }catch (error){
    console.log(error)

}

})

// Delete a Contact

router.delete('/:id' , async (req,res)=>{
    try {
        let deletcontact = req.params.id
         await Contact.findOneAndDelete({_id:deletcontact})
         res.send({msg:'Deleted sucessfully'})
    } catch (error) {
        console.log(error)
    }
})
// Update a Contact 

router.put('/:id' , async(req,res)=>{
    try{
    let Edited = req.params.id
    await Contact.findOneAndUpdate({_id:Edited} , {$set:req.body})
    res.send({msg:'Contact Edited Successfully'})
    }catch (error){
        console.log(error)
    }
})


module.exports=router